import { INCREMENT, INCREMENT_ASYNC } from "../constant";
import { all, takeLatest, call, put } from "redux-saga/effects";

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* asyncCount(action) {
  // console.log(this);
  console.log(action);
  console.log("countSaga: asyncCount");
  const { data, milliseconds } = action.payload;
  yield call(delay, milliseconds);
  yield put({ type: INCREMENT, data });
}

export function* watchIncrementAsync() {
  console.log("watching: INCREMENT_ASYNC ACTION");
  yield takeLatest(INCREMENT_ASYNC, asyncCount);
}

export default function* countSaga() {
  yield all([watchIncrementAsync()]);
}
