const GroupItemContent = ({ content, isOpen }) => {
  const createMarkup = () => {
    return { __html: content };
  };

  const setContent = () => {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
  };

  return (
    <div
      className={`group__content-wrapper ${
        isOpen && "group__content-wrapper-active"
      }`}
    >
      {setContent()}
    </div>
  );
};

export default GroupItemContent;
