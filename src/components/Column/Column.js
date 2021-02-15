import { Group } from "components";

const Column = ({ groups, questions }) => {
  const filterQuestions = (item, questions) =>
    [...questions].filter((el) => el.groupId === item.id);
  return (
    <div className="column__container">
      {groups.map((item) => (
        <Group
          item={item}
          key={item.id}
          groupQuestions={filterQuestions(item, questions)}
        />
      ))}
    </div>
  );
};

export default Column;
