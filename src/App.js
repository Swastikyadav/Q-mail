import Header from "./components/Header";
import SideBarMenu from "./components/SideBarMenu";
import MailBox from "./components/MailBox";

function App() {
  return (
    <>
      <Header />
      <main className="w-screen fixed top-0 left-0">
        <SideBarMenu />
        <MailBox />
      </main>
    </>
  );
}

export default App;
