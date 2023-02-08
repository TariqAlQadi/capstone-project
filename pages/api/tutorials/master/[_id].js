import dbConnect from "@/db/connect";
import Tutorial from "@/db/models/Tutorial";

export default async function handler(request, response) {
  await dbConnect();

  const { _id } = request.query;

  if (request.method === "PUT") {
    await Tutorial.findByIdAndUpdate(
      { _id: _id },
      {
        $push: { mastered: request.body },
      }
    );

    return response.status(200).json({ status: "Tutorial updated" });
  }

  if (request.method === "DELETE") {
    await Tutorial.findByIdAndUpdate(
      { _id: _id },
      {
        $pull: { mastered: request.body },
      }
    );

    return response.status(200).json({ status: "Tutorial updated" });
  }
}
