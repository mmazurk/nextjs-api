function handler(req, res) {
  if (req.method === "POST") {
    // get the data from the body
    const email = req.body.email;
    const feedback = req.body.feedback;

    // create the object that we will store somewhere
    const newFeedback = {
      id: new Date().toISOString(),
      email_entered: email,
      feedback_entered: feedback,
    };

    // let's log the feedback and then send it back to the client
    console.log(newFeedback);
    res.status(201).json({ status: "Success!", feedback: newFeedback });
  } else {
    res.status(200).json({ message: "This GET request works!" });
  }
}
export default handler;
