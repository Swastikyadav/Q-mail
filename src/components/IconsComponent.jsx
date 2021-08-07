function IconsComponent({ bgColor, iconColor, marginY="", Icon }) {
  return (
    <div className={`${bgColor} ${marginY} p-6 w-2 h-2 rounded-full relative md:w-4 md:h-4 hover:bg-green-400 cursor-pointer`}>
      <Icon color={iconColor} className="absolute top-3 left-3" />
    </div>
  );
}

export default IconsComponent;