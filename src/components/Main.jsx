import SideBarMenu from "./SideBarMenu";
import MailBox from "./MailBox";
import Inbox from "./Inbox";

function Main() {
  return (
    <main className="w-screen flex fixed top-0 left-0">
      <SideBarMenu />
      <MailBox />
      <Inbox />
    </main>
  );
}

export default Main;