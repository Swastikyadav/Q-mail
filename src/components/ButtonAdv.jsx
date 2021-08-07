import NotificationBadge from "./NotificationBadge";

function ButtonAdv({ active="", textValue, notificationCount="", Icon, iconColor="" }) {
  return (
    <span className={`${active} flex justify-between hover:bg-green-100 cursor-pointer p-2 rounded-full m-4 w-56 md:w-72`}>
      {Icon && <Icon color={iconColor} />}
      <span>{textValue}</span>
      <NotificationBadge bgColor="bg-green-400" shape="rounded-full py-3 px-6" value={notificationCount} />
    </span>
  );
}

export default ButtonAdv;