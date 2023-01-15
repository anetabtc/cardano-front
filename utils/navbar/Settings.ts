import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { BsGithub } from "react-icons/bs";
import { SiReadthedocs } from "react-icons/si";

interface Languages {
  name: string;
}
interface SettingsRedirectUrl {
  name: string;
  icon: any;
  href: string;
}
export const languages: Languages[] = [
  { name: "English" },
  { name: "Arabic" },
  { name: "Urdu" },
  { name: "Bengali" },
];
export const settingsRedirectUrl: SettingsRedirectUrl[] = [
  {
    name: "How to use",
    icon: QuestionMarkCircleIcon,
    href: "#",
  },
  {
    name: "Docs",
    icon: SiReadthedocs,
    href: "#",
  },
  {
    name: "Github",
    icon: BsGithub,
    href: "#",
  },
];
