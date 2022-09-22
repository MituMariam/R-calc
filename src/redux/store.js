import { rootReducer } from "./reducer";
import { configureStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

let store = configureStore(rootReducer, composeWithDevTools());

export {store}