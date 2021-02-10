import { SEARCH_FAQ } from "data/constans";

const faqSearch = (state = [], action) => {
  switch (action.type) {
    case SEARCH_FAQ:
      return action.filter;
    default:
      return state;
  }
};

export default faqSearch;
