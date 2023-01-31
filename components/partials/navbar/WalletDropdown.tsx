import React, { useState, Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import { MdOutlineContentCopy, MdOutlineLogout } from "react-icons/md";

interface Props {
  isShowing: boolean;
  setIsShowing: (value: boolean) => void;
  setDisconnect: (value: boolean) => void;
}

const walletList = [
  {
    name: "ADA",
    subName: "Cardano",
    image: "/images/assets/blue-star.png",
    price: "3,366.5343",
  },
  {
    name: "MELDt",
    subName: "MELDt",
    image: "/images/assets/meldt.png",
    price: "0",
  },
  {
    name: "cNETAt",
    subName: "cNETAt",
    image: "/images/assets/cnetat.png",
    price: "2.282439",
  },
  {
    name: "HOSKYt",
    subName: "HOSKYt",
    image: "/images/assets/hoskyyt.png",
    price: "0",
  },
  {
    name: "cNETAt",
    subName: "cNETAt",
    image: "/images/assets/cnetat.png",
    price: "2.282439",
  },
  {
    name: "HOSKYt",
    subName: "HOSKYt",
    image: "/images/assets/hoskyyt.png",
    price: "0",
  },
];

const WalletDropdown = ({ isShowing, setIsShowing, setDisconnect }: Props) => {
  return (
    <Transition
      show={isShowing}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className={`flex  flex-col gap-3 absolute z-50 right-[3.2rem] translate-x-[50%] lg:translate-x-0 top-20 shadow-lg lg:top-14 bg-black rounded-lg p-4 w-72`}
    >
      {/* theme */}
      <div className={`flex font-nunito-sans justify-between items-center`}>
        <div className="flex items-center gap-1 select-none">
          <Image
            src={"/images/wallet/wallet-1.png"}
            width={20}
            height={20}
            alt="Wallet"
          />
          <h3 className=" text-sm font-semibold tracking-wide">Nami Wallet</h3>
        </div>
        <XMarkIcon
          onClick={() => setIsShowing(false)}
          className="w-5 h-5 text-gray-300 outline-none cursor-pointer"
        />
      </div>
      <div className="flex items-center justify-between gap-1 bg-neutral-800 p-2 rounded-lg text-white ">
        <p className="text-[10px]">addr1qyktedakdpu...av5tsasefrbxuhsxkyq0u</p>
        <MdOutlineContentCopy className="w-3 h-3 text-gray-200" />
      </div>
      <div className="flex items-center gap-4 text-sm font-normal">
        <button className="border-b border-neutral-600 pb-1">Tokens</button>
        <button className="pb-1">NFTs</button>
      </div>

      {/* wallet list  */}

      <div className="flex flex-col gap-6 max-h-56 overflow-y-auto pr-2">
        {walletList.map((value, i) => (
          <div key={i} className="flex justify-between">
            <div className="flex items-center gap-2">
              <Image src={value.image} alt="Wallet " height={25} width={25} />
              <div className="flex flex-col">
                <h1 className="text-sm text-neutral-200">{value.name}</h1>
                <p className="text-[10px] text-neutral-500">{value.subName}</p>
              </div>
            </div>
            <p className=" text-sm text-neutral-200">{value.price}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => setDisconnect(false)}
        className="flex items-center gap-2 justify-center border-neutral-600 text-neutral-300 border-2 rounded-lg p-2"
      >
        <MdOutlineLogout className="w-4 h-4 text-neutral-300" /> Disconnect
      </button>
    </Transition>
  );
};

export default WalletDropdown;
