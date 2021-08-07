import ArrowDropDownLineIcon from "remixicon-react/ArrowDropDownLineIcon";

function Profile({image, name, position}) {
  return (
    <div className="flex justify-center items-center p-4">
      <img src={image} alt="my-profile" className="rounded-full w-12"/>
      <span className="px-4 text-xs md:text-base">
        <p className="text-gray-600 font-bold">{name}</p>
        <p className="text-gray-400">{position}</p>
      </span>
      <ArrowDropDownLineIcon />
    </div>
  );
}

export default Profile;