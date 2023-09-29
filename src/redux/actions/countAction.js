import { INCREMENT, DECREMENT, INCREMENT_ASYNC } from "../constant";

export const increment = (data) => ({ type: INCREMENT, data });
export const decrement = (data) => ({ type: DECREMENT, data });

export const incrementAsync = (data, milliseconds) => ({
  type: INCREMENT_ASYNC,
  payload: { data, milliseconds },
});
