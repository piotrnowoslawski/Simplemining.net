const ImgElement = ({ iconSrc, text, styleName }) => {
  return <img src={iconSrc} alt={text} className={styleName} />;
};

export default ImgElement;
