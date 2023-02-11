import dbConnect from "@/db/connect";
import Tutorial from "@/db/models/Tutorial";

export default async function handler(request, response) {
  await dbConnect();

  const { _id } = request.query;

  if (request.method === "GET") {
    const tutorial = await Tutorial.findById(_id);

    if (!tutorial) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(tutorial);
  }
}
