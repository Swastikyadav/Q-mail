import Profile from "../componentLibrary/Profile";
import NotFoundImage from "../assets/not-found.svg";

function Message({ showingBox, handleStateChange, messageBoxData }) {
  return (
    <section className={`${showingBox === "messagebox" ? "block" : "hidden"} w-full sm:block sm:w-3/5 lg:w-2/5 mt-20 h-screen border-r-2 border-l-2 overflow-y-scroll pb-24`}>
      <h2 className="text-gray-600 font-bold border-b-2 p-4">
        <span
          className="sm:hidden text-3xl cursor-pointer"
          onClick={() => handleStateChange("inbox")}
        >
          &#8592;
        </span>{" "}
        Message
      </h2>

      {
        messageBoxData ? (
          <>
            <Profile
              image={messageBoxData.image}
              name={messageBoxData.name}
              designation={messageBoxData.designation}
              dropDownArrow={false}
            />

            <p className="text-gray-500 w-11/12 m-auto">
              {messageBoxData.message}
            </p>
          </>
        ) : (
          <div className="flex flex-col items-center pt-14 text-center">
            <p className="text-gray-500 w-11/12">
              Nothing to show here. Select a message from Inbox.
            </p>
            <img src={NotFoundImage} alt="not-found-image" width="400" />
          </div>
        )
      }
    </section>
  );
}

export default Message;