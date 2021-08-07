import InboxIcon from "remixicon-react/Download2LineIcon";
import DraftIcon from "remixicon-react/DraftFillIcon";
import StartIcon from "remixicon-react/StarLineIcon";
import SentIcon from "remixicon-react/SendPlaneFillIcon";
import DeleteIcon from "remixicon-react/DeleteBin7LineIcon";
import CircleIcon from "remixicon-react/CheckboxBlankCircleLineIcon";

const mailBoxData = {
  data: [
    {
      active: "bg-green-100",
      textValue: "Inbox",
      notificationCount: "6",
      Icon: InboxIcon,
    },
    {
      active: "",
      textValue: "Draft",
      notificationCount: "2",
      Icon: DraftIcon,
    },
    {
      active: "",
      textValue: "Favourites",
      notificationCount: "0",
      Icon: StartIcon,
    },
    {
      active: "",
      textValue: "Sent Items",
      notificationCount: "4",
      Icon: SentIcon,
    },
    {
      active: "",
      textValue: "Deleted",
      notificationCount: "3",
      Icon: DeleteIcon,
    },
  ],

  label: [
    {
      active: "",
      textValue: "Business",
      notificationCount: "5",
      Icon: CircleIcon,
      iconColor: "blue",
    },
    {
      active: "",
      textValue: "Social",
      notificationCount: "0",
      Icon: CircleIcon,
      iconColor: "yellow",
    },
    {
      active: "",
      textValue: "Personal",
      notificationCount: "2",
      Icon: CircleIcon,
      iconColor: "hotpink",
    },
  ],
  contact: [
    {
      image: "https://pbs.twimg.com/profile_images/113282741/Picture_2_400x400.png",
      name: "Sandhia Pani",
      designation: "Director"
    },
    {
      image: "https://pbs.twimg.com/profile_images/821936367/salman_khan_Veer_400x400.jpg",
      name: "Salman Khan",
      designation: "Actor"
    },
    {
      image: "https://pbs.twimg.com/profile_images/1303190121244549120/lG0RIxkS_400x400.jpg",
      name: "Chaduvula Prasanth",
      designation: "Web Developer"
    },
    {
      image: "https://pbs.twimg.com/profile_images/1215134273147109381/A7YcpYAF_400x400.jpg",
      name: "Sunil Kumar",
      designation: "Unit Tester"
    },
  ],
}

export default mailBoxData;