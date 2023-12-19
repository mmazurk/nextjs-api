import { getFilePath, getData } from "./feedback";

function handler(req, res) {
  const feedbackId = req.query.feedback;
  const filePath = getFilePath();
  const data = getData(filePath);
  const selectedFeedback = data.find((item) => item.id === feedbackId);
  res.status(200).json({ item: selectedFeedback });
}

export default handler;
