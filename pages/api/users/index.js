import dbConnect from "@/db/connect";
import User from "@/db/models/User";
import { getToken } from "next-auth/jwt";

export default async function handler(request, response) {
  const conn = await dbConnect();

  const session = await conn.startSession();

  await session.withTransaction(async () => {
    if (request.method === "PUT") {
      const token = await getToken({ req: request });

      await User.findByIdAndUpdate(
        { email: token.sub },
        {
          $set: request.body,
        }
      );

      return response.status(200).json({ status: "User updated" });
    }

    if (request.method === "GET") {
      const token = await getToken({ req: request });

      if (token) {
        const existingUser = await User.findOne({ email: token.sub });

        if (!existingUser) {
          const newUser = new User({
            name: token.name,
            email: token.sub,
            img: token.picture,
            bio: "",
          });

          await newUser.save();

          return response.status(200).json(newUser);
        }
        if (existingUser) {
          return response.status(200).json(existingUser);
        }
      }
    }
  });
  session.endSession();
}
