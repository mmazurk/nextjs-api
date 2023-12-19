import { getFilePath, getData } from "../api/feedback";

function Feedback(props) {
  return (
    <>
      <h1>Here you go</h1>
      {console.log(props.feedback)}
      <ul>
        {props.feedback.map((item) => (
          <li>{item.email_entered}</li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps(context) {
  const path = getFilePath();
  const data = getData(path);
  console.log(data);
  return {
    props: {
      feedback: data,
    },
  };
}

export default Feedback;
