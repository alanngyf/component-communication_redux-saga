import { ADD_PERSON } from "../constant";

const initState = [{ id: 1, name: "anna", age: 26 }];
export default function personReducer(prevState = initState, action) {
  //console.log(action);
  const { type, payload } = action;
  //console.log(type, payload);
  switch (type) {
    case ADD_PERSON:
      return [...prevState, payload];
    default:
      return prevState;
  }
}
