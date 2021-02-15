import { GroupHeader, GroupItemsList, GroupItem, Status } from "components";

const Group = ({ item, groupQuestions }) => {
  return (
    <div className="group__container">
      <GroupHeader title={item.name} />
      {groupQuestions.length > 0 ? (
        <GroupItemsList>
          {groupQuestions.map((item) => (
            <GroupItem key={item.id} item={item} />
          ))}
        </GroupItemsList>
      ) : (
        <Status message={"No information in this category"} />
      )}
    </div>
  );
};

export default Group;
