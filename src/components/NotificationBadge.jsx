function NotificationBadge({ bgColor, shape, value }) {
  return (
    <span
      className={`${bgColor} ${shape} w-2 h-2 p-2 absolute text-sm left-10 bottom-10 text-white font-bold flex justify-center items-center`}
    >
      {value}
    </span>
  )
}

export default NotificationBadge;