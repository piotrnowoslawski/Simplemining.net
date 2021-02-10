const GroupItemTitle = ({ title, handleClick }) => {
  return (
    <h3 className="group__title" onClick={handleClick}>
      {title}
    </h3>
  );
};

export default GroupItemTitle;
