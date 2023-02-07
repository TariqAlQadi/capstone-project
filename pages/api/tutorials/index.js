import dbConnect from "@/db/connenct";
import Tutorial from "@/db/models/Tutorial";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Tutorial.find();
    return response.status(200).json(products);
  }
}
