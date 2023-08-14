import React from "react";
import { MegaMenu } from "primereact/megamenu";
import { InputText } from "primereact/inputtext";

export default function Header() {
  const start = <FontAwesomeIcon icon="fa-solid fa-music" />;
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
