import { SEARCH_FAQ } from "data/constans";

export const searchFaq = (filter) => ({
  type: SEARCH_FAQ,
  filter,
});
