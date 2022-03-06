import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import FeedBackList from "./Component/FeedbackList";
// import { useState } from "react";
// import FeedbackData from "./data/FeedbackData";
import FeedBackStat from "./Component/FeedBackStat";
import FeedBackForm from "./Component/FeedBackForm";
import AboutPage from "./Pages/AboutPage";
import AboutIconLink from "./Component/AboutIconLink";
import { FeedbackProvider } from "./Context/FeedbackContext";

//////////////////////////////
export default function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="feedbackitem">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedBackForm />
                  <FeedBackStat />
                  <FeedBackList />
                  <AboutIconLink />
                </>
              }
            ></Route>
            <Route element={<AboutPage />} path="About" />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}
