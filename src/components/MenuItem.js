import React from "react";
import { Link } from "react-router-dom";

function MenuItem(prop) {
  if (prop.isActive) {
    return (
      <li>
        <Link to={`/${prop.name}`} className="list_item active">
          {prop.name}
        </Link>
      </li>
    );
  } else {
    return (
      <li>
        <Link to={`/${prop.name}`} className="list_item">
          {prop.name}
        </Link>
      </li>
    );
  }
}

export default MenuItem;
