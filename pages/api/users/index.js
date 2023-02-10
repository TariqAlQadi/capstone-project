import dbConnect from "@/db/connect";
import User from "@/db/models/User";
import { getToken } from "next-auth/jwt";

export default async function handler(request, response) {
  await dbConnect();

  const token = await getToken({ req: request });
  console.log(token);

  if (request.method === "GET") {
    const users = await User.find();
    return response.status(200).json(users);
  }
}
