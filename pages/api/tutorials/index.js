import dbConnect from "@/db/connect";
import Tutorial from "@/db/models/Tutorial";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const tutorials = await Tutorial.find();
    return response.status(200).json(tutorials);
  }
}
