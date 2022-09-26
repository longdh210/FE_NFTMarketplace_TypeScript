import React from "react";
import { useState } from "react";
import "../../styles/pages/Home/category.scss";
const Category = () => {
  const links = ["Trending", "Sport", "Art", "Music", "Photography"];
  const [active, setActive] = useState<String | null>("Trending");
  return (
    <div className="px-5">
      <span className="header-text ">
        Explore Collection
      </span>
      <div className="d-flex flex-row text-nowrap overflow-auto border-bottom border-3 border-color">
        {links.map((link) => (
          <li className="nav-item zeroPadding">
            <a
              href={`#${link}`}
              className={`  ${active == link ? "picked-colortext border-bottom border-3  border-dark" : "normal-colortext"} nav-link  tab-bar `}
              onClick={() => setActive(link)}
            >
              {link}
            </a>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Category;
