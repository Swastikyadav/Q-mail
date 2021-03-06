import Profile from "../componentLibrary/Profile";
import NotificationBadge from "../componentLibrary/NotificationBadge";
import IconsComponent from "../componentLibrary/IconsComponent";

import MailFillIcon from "remixicon-react/MailFillIcon";
import SearchLineIcon from "remixicon-react/SearchLineIcon";
import NotificationBellIcon from "remixicon-react/Notification3LineIcon";

function Header() {
  return (
    <header className="border-b-2 h-20 w-full flex justify-between items-center md:justify-around fixed top-0 left-0 bg-white z-99">
      <div className="border-r-2 h-full p-4 flex justify-between items-center w-20 md:w-40">
        <IconsComponent bgColor="bg-green-400" iconColor="#fff" Icon={MailFillIcon} />
        <span className="font-bold text-gray-600 hidden md:inline">
          Q-mail
        </span>
      </div>

      <div className="h-full items-center p-4 hidden md:flex lg:w-2/5 xl:w-3/5">
        <SearchLineIcon color="gray" />
        <input type="text" placeholder="Type in to search..." className="pl-4 outline-none w-full"/>
      </div>

      <div className="w-20 h-full border-l-2 border-r-2 justify-center items-center relative hidden md:flex">
        <NotificationBellIcon />
        <NotificationBadge bgColor="bg-red-400" shape="rounded-full p-1" position="absolute" value="1" />
      </div>

      <Profile
        image="https://pbs.twimg.com/profile_images/1411339822942220294/cB2H_0Rm_400x400.jpg"
        name="Swastik Yadav"
        designation="Software Engineer"
        alignment="justify-center"
      />
    </header>
  );
}

export default Header;