import { useState, useEffect } from "react";

const NavBar = (props) => {
  const [position, setPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const offset = window.pageYOffset;
    if (offset > position + 100) {
      setPosition(offset);
      setVisible(false);
      setTimeout(() => setVisible(true), 300);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navigation ${!visible && "navigation__scroll"}`}>
      {props.children}
    </nav>
  );
};

export default NavBar;
