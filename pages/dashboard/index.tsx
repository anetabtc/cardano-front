import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import { dashboardInfo } from "../../utils/dashboard";

const Dashboard = () => {
  return (
    <div className="min-h-[100vh] flex items-center justify-center my-auto mr-28 2xl:mr-0 ">
      <div className="max-w-4xl 2xl:mx-auto ml-auto grid grid-cols-3 justify-items-center  gap-5 font-nunito-sans">
        {dashboardInfo.map((value, i) => {
          return (
            <div
              key={i}
              className="flex w-72 flex-col text-neutral-200 gap-4 p-4 bg-primary-full-dark-color rounded-lg"
            >
              <h1 className=" text-white font-semibold">{value.name}</h1>
              {value.synced ? (
                <div className=" bg-primary-mid-dark-color flex flex-col justify-center items-center gap-2 border border-neutral-800 py-4 px-8 rounded-lg">
                  {value.amount.split(" ")[0]?.split(".").length > 1 ? (
                    <h2 className=" font-nunito-sans text-lg">
                      <span>{value.amount.split(" ")[0]?.split(".")[0]}</span>.
                      <span className="text-base">
                        {value.amount.split(" ")[0]?.split(".")[1]}
                      </span>
                      <span>{" " + value.amount.split(" ")[1]}</span>
                    </h2>
                  ) : (
                    <h2 className=" font-nunito-sans text-lg">
                      {value.amount}
                    </h2>
                  )}
                  <div className=" w-20 h-20 border border-blue-500 rounded-full flex items-center justify-center">
                    <p className=" text-center text-[10px] flex items-center ">
                      Synced{" "}
                      <ShieldCheckIcon className="w-3.5 h-3.5 text-green-500 ml-1" />{" "}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="h-full bg-primary-mid-dark-color flex flex-col justify-center items-center gap-2 border border-neutral-800 py-4 px-8 rounded-lg">
                  <h2 className=" font-nunito-sans text-xl flex items-center pb-4">
                    {"Secure"}
                    <ShieldCheckIcon className="w-6 h-6 text-green-500 ml-1" />{" "}
                  </h2>
                  <div className="flex items-center flex-col justify-center gap-1">
                    <p className="flex text-[10px] font-bold">
                      anetaBTC Bridge
                    </p>
                    <Image
                      alt="Secure Slash"
                      width={70}
                      height={25}
                      src={"/images/assets/secure_slash.png"}
                    />
                  </div>
                </div>
              )}
              <button className=" text-[10px] font-medium flex items-center justify-center w-full py-2 bg-primary-blue-color rounded-lg">
                View Supply{" "}
                <ArrowRightIcon className="w-2.5 h-2.5 text-neutral-100 ml-1" />{" "}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
