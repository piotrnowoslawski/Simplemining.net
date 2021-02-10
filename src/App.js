import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFaq } from "data/fetch/faq.fetch";
import { getFilteredFaq } from "data/selectors/getFilteredFaq";

function App() {
  const faqGroups = useSelector((state) => state.faqReducer.faq.groups);
  const faqQuestions = useSelector((state) =>
    getFilteredFaq(state.faqReducer.faq.questions, state.searchReducer)
  );
  const pending = useSelector((state) => state.faqReducer.pending);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFaq());
  }, []);

  console.log(faqGroups);
  console.log(faqQuestions);

  return <div className="App"></div>;
}

export default App;
