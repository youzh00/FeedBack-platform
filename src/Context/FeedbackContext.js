import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [updateFB, setUpdateFB] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
    setIsLoading(false);
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch("http://localhost:5000/feedback");
    const data = await response.json();
    setFeedback(data);
  };

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
        updateFB,
        isLoading,
        deleteItem,
        addNewFeedBack,
        updateFeedback,
        replaceFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
