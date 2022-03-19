import { useReducer } from "react";
import context from "./context";

const initialValue = {
  items: [],
  total: 0,
};

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        items: [...state.items, action.payload],
        total: +state.total + +action.payload.price,
      };
    case "remove":
      const delItem = state.items.find((each) => each.id === action.payload);
      return {
        items: state.items.filter((each) => each.id !== action.payload),
        total: state.total - delItem.price,
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
        dispatch: dispatchFunc,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default Provider;
