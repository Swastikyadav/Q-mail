import SideBarMenu from "./SideBarMenu";
import MailBox from "./MailBox";

function Main() {
  return (
    <main className="w-screen fixed top-0 left-0">
      <SideBarMenu />
      <MailBox />
    </main>
  );
}

export default Main;