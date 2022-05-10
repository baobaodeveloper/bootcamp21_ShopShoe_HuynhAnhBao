import { configureStore } from "redux";
import { rootReducer } from "./reducers";

export const store = configureStore(rootReducer);
