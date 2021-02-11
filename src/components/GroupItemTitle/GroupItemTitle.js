import { ImgElement } from "components";
import { Link } from "react-router-dom";
import icon from "images/icons/question.png";

const GroupItemTitle = ({ title, handleClick }) => {
  // console.log(window.location.pathname);
  // console.log(decodeURIComponent(title));
  return (
    <Link to={encodeURIComponent(title)}>
      <h3 className="group__title" onClick={handleClick}>
        <ImgElement
          iconSrc={icon}
          text={"Title icon"}
          styleName={"group__title-img"}
        />
        <span>{title}</span>
      </h3>
    </Link>
  );
};

export default GroupItemTitle;
