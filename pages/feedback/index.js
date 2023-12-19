import { getFilePath, getData } from "../api/feedback";
import { useState } from "react";

function Feedback(props) {
  const [eventDetail, setEventDetail] = useState();

  // function loadFeedbackHandler(id) {
  //   fetch(`/api/${id}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setEventDetail(data.item);
  //     });
  // }

  async function loadFeedbackHandler(id) {
    const response = await fetch(`/api/${id}`);
    const data = await response.json();
    setEventDetail(data.item);
  }

  return (
    <>
      <h1>Here you go</h1>
      <ul>
        {props.feedback.map((item) => (
          <li key={item.id}>
            {item.email_entered}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
      <div>
        <hr />
        <h1>Event Details</h1>
        <p>{eventDetail ? eventDetail.feedback_entered : null}</p>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const path = getFilePath();
  const data = getData(path);
  return {
    props: {
      feedback: data,
    },
  };
}

export default Feedback;
