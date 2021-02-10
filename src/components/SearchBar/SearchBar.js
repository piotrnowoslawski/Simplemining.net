import { useDispatch } from "react-redux";
import { searchFaq } from "data/actions/search.actions";
import { ImgElement } from "components";
import icon from "images/icons/zoom.png";

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
      <form className="search-bar__form" onSubmit={handleSubmit}>
        <input
          className="search-bar__input"
          placeholder="Search for..."
          onChange={(e) => handleInput(e, searchFaq)}
        />
      </form>
      <div className="search-bar__img-wrapper">
        <ImgElement
          iconSrc={icon}
          text={"Search icon"}
          styleName={"search-bar__img"}
        />
      </div>
    </div>
  );
};

export default SearchBar;
