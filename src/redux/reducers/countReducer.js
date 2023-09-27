import { INCREMENT, DECREMENT } from "../constant";

const initState = 0;
export default function countReducer(prevState = initState, action) {
  const { type } = action;
  // console.log(type);
  switch (type) {
    case INCREMENT:
      return prevState + 1;
    case DECREMENT:
      return prevState - 1;
    default:
      return prevState;
  }
}
