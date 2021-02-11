import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GroupItemTitle, GroupItemContent } from "components";

const GroupItem = ({ item }) => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => setOpen(!isOpen);

  useEffect(() => {
    window.location.hash === `#question-${item.id}`
      ? setOpen(true)
      : setOpen(false);
  }, [window.location.hash]);

  useEffect(() => {
    window.addEventListener("hashchange", (e) => {
      window.location.hash === `#question-${item.id}`
        ? setOpen(true)
        : setOpen(false);
    });
  });

  return (
    <li id={decodeURIComponent(item.title)}>
      <NavLink
        to={{
          pathname: "/",
          hash: `#question-${item.id}`,
        }}
      >
        <GroupItemTitle title={item.title} handleClick={handleClick} />
      </NavLink>
      <GroupItemContent content={item.content} isOpen={isOpen} />
    </li>
  );
};

export default GroupItem;
