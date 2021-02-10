const GroupItemContent = ({ content }) => {
  const createMarkup = () => {
    return { __html: content };
  };

  const setContent = () => {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
  };

  return <>{setContent()}</>;
};

export default GroupItemContent;
