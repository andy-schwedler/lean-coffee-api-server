import dbConnect from "../../../db/dbConnect";
import Question from "../../../db/models/Question";

export default async function handler(req, res) {
  await dbConnect();

  const id = req.query.id;

  const question = await Question.findById(id);

  if (question) {
    res.status(200).json(question);
  } else {
    res.status(404).json({ message: "not found, try again" });
  }
}
