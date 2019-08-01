import React, { useState } from "react";
import "./sidebar.scss";
import { cn } from "../../../logic/helpers/cn";
import { Icons } from "../../icons/icons";

export function Sidebar(props) {
  const [visable, setVisable] = useState(true);

  function toggleSidebar() {
    setVisable(!visable);
  }

  return (
    <div className={cn("sidebar", !visable && "hide")}>
      <div className={cn("sidebar__switcher")} onClick={toggleSidebar}>
        <Icons name="burger" color="white" />
      </div>

      {props.children}
    </div>
  );
}
