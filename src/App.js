import React from "react";
import "./App.css";
import Header from "./Component/Header";
import FeedBackList from "./Component/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";

//////////////////////////////
export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header />
      <div className="feedbackitem">
        <FeedBackList feedback={feedback} />
      </div>
    </>
  );
}
