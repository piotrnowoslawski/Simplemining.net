import { useState, useEffect } from "react";
import { GroupItemTitle, GroupItemContent } from "components";

const GroupItem = ({ item }) => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => setOpen(!isOpen);

  useEffect(() => {
    window.addEventListener("load", (e) => {
      if (
        window.location.hash.replace("#/", "") ===
        encodeURIComponent(item.title)
      )
        setOpen(true);
    });
  });

  return (
    <li id={decodeURIComponent(item.title)}>
      <GroupItemTitle title={item.title} handleClick={handleClick} />
      <GroupItemContent content={item.content} isOpen={isOpen} />
    </li>
  );
};

export default GroupItem;
