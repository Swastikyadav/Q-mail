import SideBarMenu from "./SideBarMenu";
import MailBox from "./MailBox";
import Inbox from "./Inbox";
import Message from "./Message";

function Main() {
  return (
    <main className="w-screen flex justify-between fixed top-0 left-0">
      <SideBarMenu />
      <MailBox />
      <Inbox />
      <Message />
    </main>
  );
}

export default Main;