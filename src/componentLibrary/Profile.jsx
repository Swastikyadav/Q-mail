import ArrowDropDownLineIcon from "remixicon-react/ArrowDropDownLineIcon";

function Profile({image, name, designation, alignment=""}) {
  return (
    <div className={`flex ${alignment} items-center p-4`}>
      <img src={image} alt="my-profile" className="rounded-full w-12"/>
      <span className="px-4 text-xs md:text-base">
        <p className="text-gray-600 font-bold">{name}</p>
        <p className="text-gray-400">{designation}</p>
      </span>
      <ArrowDropDownLineIcon />
    </div>
  );
}

export default Profile;