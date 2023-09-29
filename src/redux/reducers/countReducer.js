import { INCREMENT, DECREMENT } from "../constant";

const initState = { count: 0 };
export default function countReducer(prevState = initState, action) {
  const { type, data } = action;
  //console.log("countReducer", data);
  switch (type) {
    case INCREMENT:
      return { count: prevState.count + data };
    case DECREMENT:
      return { count: prevState.count - data };
    default:
      return prevState;
  }
}
