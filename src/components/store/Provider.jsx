import { useReducer } from "react";
import context from "./context";

let initialArr = [];
let initialId = 0;

if( localStorage.getItem("expenses")){
  initialArr = JSON.parse(localStorage.getItem("expenses"));
  initialId = initialArr[initialArr.length-1].id;
};

const initialValue = {
  items:initialArr,
  total: 0,
  id: initialId,
};

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        items: [...state.items, action.payload],
        total: +state.total + +action.payload.price,
        id: state.id + 1,
      };
    case "remove":
      const delItem = state.items.find((each) => each.id === action.payload);
      return {
        items: state.items.filter((each) => each.id !== action.payload),
        total: state.total - delItem.price,
        id: state.id,
      };
    default:
      return initialValue;
  }
};

const Provider = ({ children }) => {
  const [data, dispatchFunc] = useReducer(reducerFunc, initialValue);

  return (
    <context.Provider
      value={{
        items: data.items,
        total: data.total,
        id: data.id,
        dispatch: dispatchFunc,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default Provider;
