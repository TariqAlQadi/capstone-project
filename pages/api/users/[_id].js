import dbConnect from "@/db/connect";
import User from "@/db/models/User";

export default async function handler(request, response) {
  await dbConnect();

  const { _id } = request.query;

  if (request.method === "GET") {
    const users = await User.findById(_id);
    return response.status(200).json(users);
  }

  if (request.method === "PUT") {
    await User.findByIdAndUpdate(
      { _id: _id },
      {
        $set: request.body,
      }
    );

    return response.status(200).json({ status: "User updated" });
  }
}
