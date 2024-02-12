import { Avatar, Menu } from "@mantine/core";
import {
  IconArrowsLeftRight,
  IconCaretDownFilled,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconTrash,
} from "@tabler/icons-react";

export function Header() {
  return (
    <header className="py-4 mb-8 flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Despesas</h1>

      <Menu position="bottom-end">
        <Menu.Target>
          <div className="w-52 flex gap-2 items-center bg-gray-100 dark:bg-gray-50/5 hover:bg-gray-200 dark:hover:bg-gray-50/10 p-1 pr-3 rounded-3xl cursor-pointer transition-all duration-300">
            <Avatar radius="xl">LK</Avatar>
            <span className="font-bold text-sm mr-4 truncate grow">
              Lucas Kennedy
            </span>
            <IconCaretDownFilled size="1rem" />
          </div>
        </Menu.Target>

        <Menu.Dropdown className="rounded-3xl pb-4 shadow-md !w-52">
          <Menu.Label>Application</Menu.Label>
          <Menu.Item leftSection={<IconSettings />}>Settings</Menu.Item>
          <Menu.Item leftSection={<IconMessageCircle />}>Messages</Menu.Item>
          <Menu.Item leftSection={<IconPhoto />}>Gallery</Menu.Item>
          <Menu.Item leftSection={<IconSearch />}>Search</Menu.Item>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item leftSection={<IconArrowsLeftRight />}>
            Transfer my data
          </Menu.Item>
          <Menu.Item color="red" leftSection={<IconTrash />}>
            Delete my account
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </header>
  );
}
