import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFaq } from "data/fetch/faq.fetch";

function App() {
  const faq = useSelector((state) => state.faqReducer.faq);
  const pending = useSelector((state) => state.faqReducer.pending);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFaq());
  }, []);

  console.log(faq);

  return <div className="App"></div>;
}

export default App;
