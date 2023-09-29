import { INCREMENT, DECREMENT } from "../constant";

const initState = 0;
export default function countReducer(prevState = initState, action) {
  const { type, data } = action;
  // console.log(type);
  switch (type) {
    case INCREMENT:
      return prevState + data;
    case DECREMENT:
      return prevState - data;
    default:
      return prevState;
  }
}
