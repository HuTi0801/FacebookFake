import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { reducers } from "../redux/reducers";
import { thunk } from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
/**
 * reducers: reducer xử lý câp nhật lại state
 * initValue: giá trị khởi tạo
 * enhancers: middleware: redux-thunk
 */
export default store