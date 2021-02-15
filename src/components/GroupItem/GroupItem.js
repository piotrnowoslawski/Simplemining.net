import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { GroupItemTitle, GroupItemContent } from "components";

const GroupItem = ({ item }) => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => setOpen(!isOpen);
  const myRef = useRef();

  const scrollTo = () => {
    if (myRef.current) {
      window.scrollTo({
        behavior: "smooth",
        top: myRef.current.offsetTop - 125,
      });
    }
  };

  useEffect(() => {
    if (window.location.hash === `#question-${item.id}`) {
      setOpen(true);
      scrollTo();
    } else setOpen(false);
  }, [window.location.hash]);

  useEffect(() => {
    window.addEventListener("hashchange", (e) => {
      if (window.location.hash === `#question-${item.id}`) {
        setOpen(true);
        scrollTo();
      } else setOpen(false);
    });
  });

  return (
    <li ref={myRef}>
      <Link
        to={{
          pathname: "/",
          hash: `#question-${item.id}`,
        }}
      >
        <GroupItemTitle title={item.title} handleClick={handleClick} />
      </Link>
      <GroupItemContent content={item.content} isOpen={isOpen} />
    </li>
  );
};

export default GroupItem;
