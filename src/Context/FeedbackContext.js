import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "this item 1 from context api",
      rating: 8,
    },
    {
      id: 2,
      text: "this item 2 from context api",
      rating: 6,
    },
  ]);
  const [updateFB, setUpdateFB] = useState({
    item: {},
    edit: false,
  });

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

  const updateFeedback = (item) => {
    console.log("updateFeedBack function");
    setUpdateFB({
      item,
      edit: true,
    });
  };
  const replaceFeedback = (item, id) => {
    console.log("replaceFeedBack function");

    setFeedback(
      feedback.map((fb) => {
        return fb.id === id
          ? {
              ...fb,
              ...item,
            }
          : fb;
      })
    );
    updateFB.edit = false;
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteItem,
        addNewFeedBack,
        updateFeedback,
        updateFB,
        replaceFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
