import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import { MenuItem } from "@mui/base/MenuItem";
import { Dropdown } from "@mui/base/Dropdown";
import { useNavigate } from "react-router-dom";

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
      <div className="mt-4 mx-4 mb-10 flex  justify-between">
        <div className=" cursor-pointer" onClick={goHome}>
          Hit and Run Studios
        </div>
        <div className="">
          <Dropdown>
            <MenuButton>Explore</MenuButton>
            <Menu>
              <MenuItem className="mr-4 my-2 cursor-pointer" onClick={goListen}>
                Listen
              </MenuItem>
              <MenuItem className="mr-4 my-2 cursor-pointer" onClick={goPhotos}>
                Photos
              </MenuItem>
              <MenuItem
                className="mr-4 my-2 cursor-pointer"
                onClick={goReviews}
              >
                Reviews
              </MenuItem>
            </Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
}
