import React from "react";
import { MegaMenu } from "primereact/megamenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "primereact/menu";
import { useRef } from "react";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { Button } from "primereact/button";

export default function Header() {
  const menuRight = useRef(null);
  const start = <FontAwesomeIcon icon={faMusic} />;
  const items = {
    label: "Listen",
    icon: <FontAwesomeIcon icon={faHeadphones} />,
  };
  const end = (
    <>
      <Menu
        model={items}
        popup
        ref={menuRight}
        id="popup_menu_right"
        popupAlignment="right"
      />
      <Button
        label="Show Right"
        icon="pi pi-align-right"
        className="mr-2"
        onClick={(event) => menuRight.current.toggle(event)}
        aria-controls="popup_menu_right"
        aria-haspopup
      />
    </>
  );

  return (
    <div className="card">
      <MegaMenu
        orientation="horizontal"
        start={start}
        end={end}
        breakpoint="960px"
      />
    </div>
  );
}
