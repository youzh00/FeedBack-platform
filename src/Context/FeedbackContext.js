import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "this item from context api",
      rating: 8,
    },
  ]);

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
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteItem,
        addNewFeedBack,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
