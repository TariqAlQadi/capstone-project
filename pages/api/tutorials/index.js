import dbConnect from "@/db/connect";
import Tutorial from "@/db/models/Tutorial";
import { getToken } from "next-auth/jwt";

export default async function handler(request, response) {
  await dbConnect();

  const token = await getToken({ req: request });

  if (request.method === "GET") {
    const tutorials = await Tutorial.find();
    return response.status(200).json(tutorials);
  }
}
