import {
  FETCH_FAQ_PENDING,
  FETCH_FAQ_SUCCESS,
  FETCH_FAQ_ERROR,
} from "data/constans";

const initialFaq = {
  pending: false,
  faq: {},
  error: null,
};

const faqReducer = (state = initialFaq, action) => {
  switch (action.type) {
    case FETCH_FAQ_PENDING:
      return {
        ...state,
        pending: true,
        error: null,
      };
    case FETCH_FAQ_SUCCESS:
      return {
        ...state,
        pending: false,
        faq: action.payload,
      };

    case FETCH_FAQ_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload,
        faq: {},
      };

    default:
      return state;
  }
};

export default faqReducer;
