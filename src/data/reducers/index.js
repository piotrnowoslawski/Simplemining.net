import { combineReducers } from "redux";
import faqReducer from "./faq.reducer";
import searchReducer from "./search.reducer";

const rootReducer = combineReducers({ faqReducer, searchReducer });

export default rootReducer;
