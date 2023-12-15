import { useRef } from "react";

export default function Home() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();
    const selectedEmail = emailInputRef.current.value;
    const textEntered = feedbackInputRef.current.value;
    fetch("http://localhost:3000/api/feedback", {
      method: "POST",
      body: JSON.stringify({
        email: selectedEmail,
        feedback: textEntered,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log("Payload:", data));
    emailInputRef.current.value = "";
    feedbackInputRef.current.value = "";
  }

  return (
    <div>
      <h1 className="center">Time to Create a Fun Form</h1>
      <form onSubmit={submitFormHandler} className="feedback-form">
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input
            type="text"
            id="email"
            placeholder="email address"
            ref={emailInputRef}
          />
          <div>
            <label htmlFor="feedback">Feedback</label>
          </div>
          <textarea
            id="feedback"
            rows="5"
            placeholder="feedback"
            ref={feedbackInputRef}
          />
        </div>
        <button type="submit">Send Feedback</button>
      </form>
    </div>
  );
}
