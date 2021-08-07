function NotificationBadge({ bgColor, shape, position="", value }) {
  return (
    <span
      className={`${bgColor} ${shape} ${position} w-2 h-2 p-2 text-sm left-10 bottom-10 text-white font-bold flex justify-center items-center`}
    >
      {value}
    </span>
  )
}

export default NotificationBadge;