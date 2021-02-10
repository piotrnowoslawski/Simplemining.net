import {
  GroupHeader,
  GroupItemsList,
  GroupItemTitle,
  GroupItemContent,
} from "components";

const Group = ({ item, groupQuestions }) => {
  return (
    <div>
      <GroupHeader title={item.name} />
      <GroupItemsList>
        {groupQuestions.map(({ id, title, content }) => (
          <li key={id}>
            <GroupItemTitle title={title} />
            <GroupItemContent content={content} />
          </li>
        ))}
      </GroupItemsList>
    </div>
  );
};

export default Group;
