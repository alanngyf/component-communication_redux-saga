import { INCREMENT, DECREMENT, INCREMENT_ASYNC } from "../constant";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

export const incrementAsync = () => ({ type: INCREMENT_ASYNC });
