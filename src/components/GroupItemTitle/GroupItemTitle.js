import { ImgElement } from "components";
import icon from "images/icons/question.png";

const GroupItemTitle = ({ title, handleClick }) => {
  return (
    <h3 className="group__title" onClick={handleClick}>
      <ImgElement
        iconSrc={icon}
        text={"Title icon"}
        styleName={"group__title-img"}
      />
      <span>{title}</span>
    </h3>
  );
};

export default GroupItemTitle;
