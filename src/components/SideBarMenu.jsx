import IconsComponent from "../componentLibrary/IconsComponent";

import sidebarData from "../data/sideBarData";

function SideBarMenu() {
  return (
    <aside className="w-20 h-full border-r-2 flex flex-col justify-center items-center fixed top-20 left-0">
      <section>
        {
          sidebarData.map((data, idx) => {
            return (
              <IconsComponent key={idx} bgColor={data.bgColor} iconColor={data.iconColor} marginY={data.marginY} Icon={data.Icon} />
            )
          })
        }
      </section>
    </aside>
  );
}

export default SideBarMenu;