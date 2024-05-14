import { useState } from "react";

const FoodContextProvider = ({ children }) => {
  const [order, setOrder] = useState([]);
  console.log('from context',order)

  return (
    <div></div>
  );
};

export default FoodContextProvider;
