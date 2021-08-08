import Profile from "../componentLibrary/Profile";

import inboxMessages from "../data/inboxMessages";

function Inbox({ showingBox, handleStateChange }) {
  return (
    <section className={`${showingBox === "inbox" ? "block" : "hidden"} sm:block w-full sm:w-96 h-screen border-l-2 border-r-2 mt-20 overflow-y-scroll pb-20`}>
      <h2 className="text-gray-600 font-bold border-b-2 p-4">Recent</h2>

      {
        inboxMessages.map(data => {
          return (
            <article
              key={data.id}
              className="relative border-b-2 hover:bg-green-100 cursor-pointer"
              onClick={() => handleStateChange("messagebox", data)}
            >
              <Profile
                image={data.image}
                name={data.name}
                designation={data.designation}
                dropDownArrow={false}
              />

              <p className="inbox-preview text-gray-500 w-4/5 m-auto pl-11 relative -top-2 ">
                {data.message.slice(0, 56) + "..."}
              </p>

              <span className="text-gray-400 absolute top-4 right-2">
                {new Date().toLocaleDateString()}
              </span>
            </article>
          );
        })
      }
    </section>
  );
}

export default Inbox;