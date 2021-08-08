import ButtonAdv from "../componentLibrary/ButtonAdv";
import Profile from "../componentLibrary/Profile";

import mailBoxData from "../data/mailBoxData";

function MailBox() {
  return (
    <section className="hidden lg:block w-60 lg:w-80 h-screen border-r-2 mt-20 ml-20 overflow-x-hidden overflow-y-scroll pb-20">
      <h2 className="text-gray-600 font-bold border-b-2 p-4">Mailbox</h2>

      {
        mailBoxData.data.map((data, idx) => {
          return (
            <ButtonAdv
              key={idx}
              active={data.active}
              textValue={data.textValue}
              notificationCount={data.notificationCount}
              Icon={data.Icon}
            />
          );
        })
      }

      <h2 className="text-gray-600 font-bold border-b-2 p-4">Label</h2>

      {
        mailBoxData.label.map((data, idx) => {
          return (
            <ButtonAdv
              key={idx}
              textValue={data.textValue}
              notificationCount={data.notificationCount}
              Icon={data.Icon} iconColor={data.iconColor}
            />
          );
        })
      }

      <h2 className="text-gray-600 font-bold border-b-2 p-4">Contact</h2>

      {
        mailBoxData.contact.map((data, idx) => {
          return (
            <Profile
              key={idx}
              image={data.image}
              name={data.name}
              designation={data.designation}
            />
          );
        })
      }
    </section>
  );
}

export default MailBox;