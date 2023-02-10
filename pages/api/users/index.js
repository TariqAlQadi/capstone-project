import dbConnect from "@/db/connect";
import User from "@/db/models/User";
import { getToken } from "next-auth/jwt";

export default async function handler(request, response) {
  const conn = await dbConnect();

  const session = await conn.startSession();

  await session.withTransaction(async () => {
    const token = await getToken({ request });

    if (token && req.method === "GET") {
      const existingUser = await User.findOne({ sub: token.sub });

      if (!existingUser) {
        const newUser = new User({
          sub: token.sub,
        });

        await newUser.save();

        return response
          .status(201)
          .json(newUser, { status: "Created a new user" });
      }
      return response.status(200).json(existingUser);
    }
  });

  session.endSession();
}
