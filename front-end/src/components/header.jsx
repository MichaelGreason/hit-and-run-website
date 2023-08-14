import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import { MenuItem } from "@mui/base/MenuItem";
import { Dropdown } from "@mui/base/Dropdown";

export default function Header() {
  return (
    <>
      <div className="mt-4 mx-4 mb-10">
        <div className=" flex justify-end">
          <Dropdown>
            <MenuButton>Settings</MenuButton>
            <Menu>
              <MenuItem className="mr-4">My account</MenuItem>
              <MenuItem className="mr-4">Notification preferences</MenuItem>
            </Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
}
