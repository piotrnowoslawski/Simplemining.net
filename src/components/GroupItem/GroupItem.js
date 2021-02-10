import { useState } from "react";
import { GroupItemTitle, GroupItemContent } from "components";

const GroupItem = ({ item }) => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => setOpen(!isOpen);

  return (
    <li>
      <GroupItemTitle title={item.title} handleClick={handleClick} />
      <GroupItemContent content={item.content} isOpen={isOpen} />
    </li>
  );
};

export default GroupItem;
