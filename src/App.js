import React from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Header from "./Component/Header";
import FeedBackList from "./Component/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedBackStat from "./Component/FeedBackStat";
import FeedBackForm from "./Component/FeedBackForm";
import AboutPage from "./Pages/AboutPage";

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
  function addNewFeedBack(newFB) {
    newFB.id = uuidv4();
    setFeedback([newFB, ...feedback]);
  }
  return (
    <Router>
      <Header />
      <div className="feedbackitem">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedBackForm handleAddFB={(newFB) => addNewFeedBack(newFB)} />
                <FeedBackStat feedback={feedback} />
                <FeedBackList feedback={feedback} deleteItem={deleteItem} />
                <div>
                  <a href="/About">About</a>
                </div>
              </>
            }
          ></Route>
          <Route element={<AboutPage />} path="About" />
        </Routes>
      </div>
    </Router>
  );
}
