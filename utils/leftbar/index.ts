//icons
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import {
  BsTwitter,
  BsFacebook,
  BsDiscord,
  BsTelegram,
  BsFillGridFill,
} from "react-icons/bs";
import { AiOutlineHistory } from "react-icons/ai";
import { MdFeedback } from "react-icons/md";
import { SiReadthedocs } from "react-icons/si";
import { NavigationType } from "../../types/leftbar";

export const navigationLeftbar: NavigationType[] = [
  {
    name: "Bridge",
    href: "/",
    icon: ArrowPathIcon,
    current: false,
  },
  {
    name: "Transactions",
    href: "/transactions",
    icon: AiOutlineHistory,
    current: false,
  },
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: BsFillGridFill,
    current: false,
  },
  {
    name: "Feedback",
    href: "/feedback",
    icon: MdFeedback,
    current: false,
  },
  {
    name: "Docs",
    href: "#",
    icon: SiReadthedocs,
    current: false,
  },
];

export const socialIconLeftbar = [
  { icon: BsTwitter },
  { icon: BsFacebook },
  { icon: BsDiscord },
  { icon: BsTelegram },
];
