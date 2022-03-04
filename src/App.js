import React from "react";
import Header from "./Component/Header";
import FeedBackList from "./Component/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedBackStat from "./Component/FeedBackStat";
import FeedBackForm from "./Component/FeedBackForm";

//////////////////////////////
export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteItem = (idd) => {
    setFeedback(
      feedback.filter((item) => {
        return item.id !== idd;
      })
    );
  };
  return (
    <>
      <Header />
      <div className="feedbackitem">
        <FeedBackForm />
        <FeedBackStat feedback={feedback} />
        <FeedBackList feedback={feedback} deleteItem={deleteItem} />
      </div>
    </>
  );
}
