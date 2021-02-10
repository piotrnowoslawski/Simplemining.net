import { ImgElement } from "components";
import icon from "images/icons/faq.png";
const Logo = () => {
  return (
    <div className="logo__container">
      <ImgElement iconSrc={icon} text={"Brand logo"} styleName={"logo__img"} />
    </div>
  );
};

export default Logo;
