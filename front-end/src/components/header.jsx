import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import { MenuItem } from "@mui/base/MenuItem";
import { Dropdown } from "@mui/base/Dropdown";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const navigate = useNavigate();

  function goHome() {
    navigate("/");
  }

  function goListen() {
    navigate("/listen");
  }

  function goPhotos() {
    navigate("/photos");
  }

  function goReviews() {
    navigate("/reviews");
  }

  return (
    <>
      <div className="mb-4 flex justify-between header">
        <div className="self-center ml-4 cursor-pointer" onClick={goHome}>
          <img className="h-20" src="/src/assets/HRslimmed.png" />
        </div>
        <div className=" self-center mr-4">
          <Dropdown>
            <MenuButton>
              Explore <FontAwesomeIcon icon={faArrowDown} className="ml-1" />
            </MenuButton>
            <Menu className=" border-2 border-gray-900 p-2 bg-white">
              <MenuItem className="mr-4 my-2 cursor-pointer" onClick={goListen}>
                <FontAwesomeIcon icon={faHeadphones} className=" mr-1" /> Listen
              </MenuItem>
              <MenuItem className="mr-4 my-2 cursor-pointer" onClick={goPhotos}>
                <FontAwesomeIcon icon={faImage} className="mr-1" /> Photos
              </MenuItem>
              <MenuItem
                className="mr-4 my-2 cursor-pointer"
                onClick={goReviews}
              >
                <FontAwesomeIcon icon={faPencil} className="mr-1" /> Reviews
              </MenuItem>
            </Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
}
