import { get } from "http";

const fs = require("fs");
const path = require("path");

export function getFilePath() {
  const filePath = path.join(process.cwd(), "data", "feedback.json");
  console.log(filePath);
  return filePath;
}

export function getData(filePath) {
  const fileData = fs.readFileSync(filePath);
  return JSON.parse(fileData);
}

function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedback = req.body.feedback;

    const newFeedback = {
      id: new Date().toISOString(),
      email_entered: email,
      feedback_entered: feedback,
    };

    console.log(newFeedback);
    const filePath = getFilePath();
    const data = getData(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ status: "Success!", feedback: newFeedback });
  } else {
    const filePath = getFilePath();
    const data = getData(filePath);
    res.status(200).json({ feedback: data });
  }
}
export default handler;
