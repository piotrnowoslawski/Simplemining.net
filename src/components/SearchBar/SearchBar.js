import { useDispatch } from "react-redux";
import { searchFaq } from "data/actions/search.actions";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleInput = (e, searchFilter) => {
    const phrase = e.target.value.toLowerCase().split(" ");
    dispatch(searchFilter(phrase));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-bar__container">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search for..."
          onChange={(e) => handleInput(e, searchFaq)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
