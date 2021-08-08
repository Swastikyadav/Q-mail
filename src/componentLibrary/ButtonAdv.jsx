import NotificationBadge from "./NotificationBadge";

function ButtonAdv({ active="", textValue, notificationCount="", Icon, iconColor="" }) {
  return (
    <span className={`${active} flex justify-between hover:bg-green-100 cursor-pointer p-2 rounded-full mt-4 mb-4 w-4/5 m-auto`}>
      {Icon && <Icon color={iconColor} />}
      <span>{textValue}</span>
      <NotificationBadge bgColor="bg-green-400" shape="rounded-full py-3 px-6" value={notificationCount} />
    </span>
  );
}

export default ButtonAdv;