import { ImgElement } from "components";
import { Link } from "react-router-dom";
import icon from "images/icons/faq.png";
const Logo = () => {
  return (
    <div className="logo__container">
      <Link to="/">
        <ImgElement
          iconSrc={icon}
          text={"Brand logo"}
          styleName={"logo__img"}
        />
      </Link>
    </div>
  );
};

export default Logo;
