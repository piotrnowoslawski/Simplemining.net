import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getFaq } from "data/fetch/faq.fetch";
import { NavBar, Logo, SearchBar, Wrapper, Status, Column } from "components";
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

  return (
    <Router
      basename={process.env.NODE_ENV === "development" ? "/" : "/simplemining"}
    >
      <div className="App">
        <NavBar>
          <Logo />
          <SearchBar />
        </NavBar>
        {pending ? (
          <Status message={"Data loading ..."} />
        ) : (
          <Wrapper>
            {faqGroups && (
              <Column groups={faqGroups.left} questions={faqQuestions} />
            )}
            {faqGroups && (
              <Column groups={faqGroups.right} questions={faqQuestions} />
            )}
          </Wrapper>
        )}
      </div>
    </Router>
  );
}

export default App;
