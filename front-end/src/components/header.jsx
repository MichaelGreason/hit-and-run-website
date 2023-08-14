import React from "react";
import { MegaMenu } from "primereact/megamenu";
import { InputText } from "primereact/inputtext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const start = <FontAwesomeIcon icon={faMusic} />;
  const end = <InputText placeholder="Search" type="text" />;

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
