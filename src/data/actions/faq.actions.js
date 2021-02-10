import {
  FETCH_FAQ_PENDING,
  FETCH_FAQ_SUCCESS,
  FETCH_FAQ_ERROR,
} from "data/constans";

export const fetchFaqPending = () => ({
  type: FETCH_FAQ_PENDING,
});

export const fetchFaqSuccess = (faq) => ({
  type: FETCH_FAQ_SUCCESS,
  payload: faq,
});

export const fetchFaqError = (error) => ({
  type: FETCH_FAQ_ERROR,
  payload: error,
});
