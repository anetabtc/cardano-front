import Link from "next/link";
import React from "react";
import { BsDiscord, BsTelegram } from "react-icons/bs";

const Feedback = () => {
  const feedBackUrl = [
    {
      name: "anetaBTC Feedback Form",
      url: "#",
    },
    {
      name: "Discuss on Discord",
      url: "#",
      icon: BsDiscord,
    },
    {
      name: "Discuss on Telegram",
      url: "#",
      icon: BsTelegram,
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-[100vh] font-light">
      <div className=" bg-primary-full-dark-color rounded-lg p-5 font-nunito-sans flex flex-col gap-3">
        {feedBackUrl.map((val, i) => {
          return (
            <Link key={i} legacyBehavior href={val.url}>
              <a className="text-neutral-200 hover:bg-[#25345A] py-4 px-28 bg-primary-mid-dark-color rounded-md border border-neutral-700 text-center flex items-center gap-4">
                {val.name}
                {val.icon && <val.icon className="w-5 h-5 text-neutral-300" />}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Feedback;
