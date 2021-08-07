import MailFillIcon from "remixicon-react/MailFillIcon";
import SearchLineIcon from "remixicon-react/SearchLineIcon";
import NotificationBellIcon from "remixicon-react/Notification3LineIcon";
import ArrowDropDownLineIcon from "remixicon-react/ArrowDropDownLineIcon";

function Header() {
  return (
    <header className="border-b-2 h-20 w-full flex justify-between items-center md:justify-around">
      <div className="border-r-2 h-full p-4 flex justify-between items-center w-20 md:w-40">
        <div className="bg-green-400 p-6 w-2 h-2 rounded-full relative md:w-4 md:h-4">
          <MailFillIcon color="#fff" className="absolute top-3 left-3" />
        </div>
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
        <span className="bg-red-400 rounded-full w-2 h-2 p-2 absolute text-sm p-1 left-10 bottom-10 text-white font-bold flex justify-center items-center">1</span>
      </div>

      <div className="flex justify-center items-center p-4">
        <img src="https://pbs.twimg.com/profile_images/1411339822942220294/cB2H_0Rm_400x400.jpg" alt="my-profile" className="rounded-full w-12"/>
        <span className="px-4 text-xs md:text-base">
          <p>Swastik Yadav</p>
          <p>Software Engineer</p>
        </span>
        <ArrowDropDownLineIcon />
      </div>
    </header>
  );
}

export default Header;