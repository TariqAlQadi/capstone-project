import dbConnect from "@/db/connect";
import Tutorial from "@/db/models/Tutorial";

export default async function handler(request, response) {
  await dbConnect();
  const { _id } = request.query;

  if (request.method === "GET") {
    const product = await Tutorial.findById(_id);

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  }

  if (request.method === "PUT") {
    const updatedTutorial = await Tutorial.findByIdAndUpdate(id, {
      $set: request.body,
    });

    if (!updatedTutorial) {
      return response.status(404).json({ status: "Not Found" });
    }
    return response.status(200).json({ status: "Tutorial updated" });
  }
}
