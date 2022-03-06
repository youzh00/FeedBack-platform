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
    const response = await fetch("/feedback?_sort=id&_order=desc");
    const data = await response.json();
    setFeedback(data);
    console.log(data);
  };

  const deleteItem = async (idd) => {
    await fetch(`/feedback/${idd}`, {
      method: "DELETE",
    });
    setFeedback(
      feedback.filter((item) => {
        return item.id !== idd;
      })
    );
  };

  const addNewFeedBack = async (newFB) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFB),
    });
    const data = await response.json();
    setFeedback([data, ...feedback]);
  };

  const updateFeedback = (item) => {
    console.log("updateFeedBack function");
    setUpdateFB({
      item,
      edit: true,
    });
  };
  const replaceFeedback = async (item, id) => {
    console.log("replaceFeedBack function");
    console.log(item);
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    const data = await response.json();

    setFeedback(
      feedback.map((fb) => {
        return fb.id === id
          ? {
              ...fb,
              ...data,
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
