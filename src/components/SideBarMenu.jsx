import IconsComponent from "./IconsComponent";

import AppsIcon from "remixicon-react/Apps2FillIcon";
import MailOpenIcon from "remixicon-react/MailOpenFillIcon";
import BookMarkIcon from "remixicon-react/BookMarkFillIcon";
import CalendarTodoIcon from "remixicon-react/CalendarTodoFillIcon";
import EqualizerIcon from "remixicon-react/EqualizerFillIcon";

function SideBarMenu() {
  return (
    <aside className="w-20 h-screen border-r-2 flex flex-col justify-center items-center fixed top-0 left-0">
      <section className="bg-white">
        <IconsComponent bgColor="bg-white" iconColor="#000" marginY="my-8" Icon={AppsIcon} />
        <IconsComponent bgColor="bg-green-400" iconColor="#fff" marginY="my-8" Icon={MailOpenIcon} />
        <IconsComponent bgColor="bg-white" iconColor="#000" marginY="my-8" Icon={BookMarkIcon} />
        <IconsComponent bgColor="bg-white" iconColor="#000" marginY="my-8" Icon={CalendarTodoIcon} />
        <IconsComponent bgColor="bg-white" iconColor="#000" marginY="my-8" Icon={EqualizerIcon} />
      </section>
    </aside>
  );
}

export default SideBarMenu;