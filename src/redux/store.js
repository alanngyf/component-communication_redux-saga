import { legacy_createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
// import countReducer from "./reducers/countReducer";
import rootReducer from "./reducers/rootReducer";
import countSaga from "./sagas/countSaga";

const sagaMiddleware = createSagaMiddleware();

const store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware));
export default store;

sagaMiddleware.run(countSaga);
