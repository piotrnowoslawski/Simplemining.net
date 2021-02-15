import {
  API,
  FETCH_FAQ_PENDING,
  FETCH_FAQ_SUCCESS,
  FETCH_FAQ_ERROR,
} from "data/constans";

export const getFaq = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_FAQ_PENDING,
    });

    fetch(`${API}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: FETCH_FAQ_SUCCESS,
          payload: data,
        });
      })
      .catch((error) =>
        dispatch({
          type: FETCH_FAQ_ERROR,
          payload: error,
        })
      );
  };
};
