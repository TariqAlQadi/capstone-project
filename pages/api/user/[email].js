import dbConnect from "@/db/connect";
import User from "@/db/models/User";

export default async function handler(request, response) {
  await dbConnect();
  const { email } = request.query;

  if (request.method === "GET") {
    const user = await User.findOne({ email: email });

    if (!user) {
      return response.status(404).json({ status: "Not Found" });
    }

    return response.status(200).json(user);
  }
}
