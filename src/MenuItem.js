import React from "react";

function MenuItem(prop) {
  if (prop.isActive) {
    return <li className="list_item active">{prop.name}</li>;
  } else {
    return <li className="list_item">{prop.name}</li>;
  }
}

export default MenuItem;
