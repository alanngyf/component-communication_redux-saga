import { legacy_createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import countReducer from "./reducers/countReducer";
import countSaga from "./sagas/countSaga";

const sagaMiddleware = createSagaMiddleware();

const store = legacy_createStore(countReducer, applyMiddleware(sagaMiddleware));
export default store;

sagaMiddleware.run(countSaga);
