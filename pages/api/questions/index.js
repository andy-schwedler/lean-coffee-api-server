import dbConnect from "../../../db/dbConnect";
import Question from "../../../db/models/Question";

export default async function handler(req, res) {
  //1. Connect to the database and wait for the connection to be established
  await dbConnect();

  // 2. Read data from database (async! use await!)
  const questions = await Question.find(); // this is a mongoose collection

  // 3. Translate collection to array
  const questionsArray = questions.map((question) => {
    return {
      id: question._id,
      name: question.name,
      text: question.text,
    };
  });

  res.status(200).json(questionsArray);
}
