import ButtonAdv from "./ButtonAdv";
import Profile from "./Profile";

import InboxIcon from "remixicon-react/Download2LineIcon";
import DraftIcon from "remixicon-react/DraftFillIcon";
import StartIcon from "remixicon-react/StarLineIcon";
import SentIcon from "remixicon-react/SendPlaneFillIcon";
import DeleteIcon from "remixicon-react/DeleteBin7LineIcon";
import CircleIcon from "remixicon-react/CheckboxBlankCircleLineIcon";

function MailBox() {
  return (
    <section className="w-80 h-screen border-r-2 mt-20 ml-20 overflow-y-scroll pb-20">
      <h2 className="text-gray-600 font-bold border-b-2 p-4">Mailbox</h2>

      <ButtonAdv active="bg-green-100" textValue="Inbox" notificationCount="6" Icon={InboxIcon} />
      <ButtonAdv textValue="Draft" notificationCount="2" Icon={DraftIcon} />
      <ButtonAdv textValue="Favourites" notificationCount="0" Icon={StartIcon} />
      <ButtonAdv textValue="Sent Items" notificationCount="4" Icon={SentIcon} />
      <ButtonAdv textValue="Deleted" notificationCount="3" Icon={DeleteIcon} />

      <h2 className="text-gray-600 font-bold border-b-2 p-4">Label</h2>

      <ButtonAdv textValue="Business" notificationCount="5" Icon={CircleIcon} iconColor="blue" />
      <ButtonAdv textValue="Social" notificationCount="0" Icon={CircleIcon} iconColor="yellow" />
      <ButtonAdv textValue="Personal" notificationCount="2" Icon={CircleIcon} iconColor="hotpink" />

      <h2 className="text-gray-600 font-bold border-b-2 p-4">Contact</h2>

      <Profile
        image="https://pbs.twimg.com/profile_images/1411339822942220294/cB2H_0Rm_400x400.jpg"
        name="Swastik Yadav"
        position="Software Engineer"
      />
      <Profile
        image="https://pbs.twimg.com/profile_images/1411339822942220294/cB2H_0Rm_400x400.jpg"
        name="Swastik Yadav"
        position="Software Engineer"
      />
      <Profile
        image="https://pbs.twimg.com/profile_images/1411339822942220294/cB2H_0Rm_400x400.jpg"
        name="Swastik Yadav"
        position="Software Engineer"
      />
      <Profile
        image="https://pbs.twimg.com/profile_images/1411339822942220294/cB2H_0Rm_400x400.jpg"
        name="Swastik Yadav"
        position="Software Engineer"
      />
    </section>
  );
}

export default MailBox;