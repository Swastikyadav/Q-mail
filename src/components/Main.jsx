import React from "react";

import SideBarMenu from "./SideBarMenu";
import MailBox from "./MailBox";
import Inbox from "./Inbox";
import Message from "./Message";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      showingBox: "inbox",
      messageBoxData: "",
    }

    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleStateChange(boxToShow, messageBoxData="") {
    this.setState({
      showingBox: boxToShow,
      messageBoxData,
    });
  }

  render() {
    return (
      <main className="w-screen flex justify-between fixed top-0 left-0">
        <SideBarMenu />
        <MailBox />
        <Inbox
          showingBox={this.state.showingBox}
          handleStateChange={this.handleStateChange}
        />
        <Message
          showingBox={this.state.showingBox}
          messageBoxData={this.state.messageBoxData}
          handleStateChange={this.handleStateChange}
        />
      </main>
    );
  }
}

export default Main;