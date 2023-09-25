import React from "react";
import { Link } from "react-router-dom";

function MenuItem(prop) {
  // style providing object for link active
  const link_style = {
    textDecoration: "none",
    fontSize: "20px",
    fontWeight: "300px",
    color: "blue",
  };

  // style providing object for link
  const link_style_active = {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    fontWeight: "300px",
  };

  if (prop.isActive) {
    return (
      <li className="list_item active">
        <Link style={link_style_active} to={`/${prop.name}`}>
          {prop.name}
        </Link>
      </li>
    );
  } else {
    return (
      <li className="list_item">
        <Link style={link_style} to={`/${prop.name}`}>
          {prop.name}
        </Link>
      </li>
    );
  }
}

export default MenuItem;
