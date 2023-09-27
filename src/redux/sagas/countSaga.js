import { INCREMENT, INCREMENT_ASYNC } from "../constant";
import { all, takeLatest, call, put } from "redux-saga/effects";

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* asyncCount() {
  yield call(delay, 2000);
  yield put({ type: INCREMENT });
}

export function* incrementAsync() {
  yield takeLatest(INCREMENT_ASYNC, asyncCount);
}

export default function* countSaga() {
  yield all([incrementAsync()]);
}
