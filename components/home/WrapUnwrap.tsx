import { Tab } from "@headlessui/react";
import React, { useState } from "react";
import { classNames } from "../../utils/Classnames";
import styles from "../../styles/home/WrapUnwrap.module.css";
import Wrap from "./wrapUnwrap/Wrap";
import Unwrap from "./wrapUnwrap/Unwrap";
import InvalidBTCAddressModal from "./wrapUnwrap/InvalidBTCAddressModal";

const WrapUnwrap = () => {
  const [payBridgeModalOpen, setPayBridgeModalOpen] = useState<boolean>(false);
  const [btcValidAddressFinal, setBtcValidAddressFinal] =
    useState<boolean>(true);
  const [tabName, setTabName] = useState<string>("Wrap");
  const [validBtcAddress, setValidBtcAddress] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBtcValidAddressFinal(validBtcAddress);
  };

  return (
    <div className="">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className={styles.container}
      >
        <div className="flex justify-evenly">
          {/* switch button  */}
          <Tab.Group>
            <Tab.List className={styles.tabList}>
              {["Wrap", "Unwrap"].map((value: string) => (
                <Tab
                  key={value}
                  onClick={() => setTabName(value)}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-3 text-xs font-semibold leading-5 text-white outline-none",
                      value == tabName
                        ? " bg-primary-blue-color shadow"
                        : "text-blue-100 hover:bg-primary-blue-color/[0.5] hover:text-white"
                    )
                  }
                >
                  {value}
                </Tab>
              ))}
            </Tab.List>
          </Tab.Group>
        </div>
        {tabName == "Unwrap" ? (
          <Unwrap
            payBridgeModalOpen={payBridgeModalOpen}
            setPayBridgeModalOpen={setPayBridgeModalOpen}
            setValidBtcAddress={setValidBtcAddress}
            validAddress={btcValidAddressFinal}
          />
        ) : (
          <Wrap
            setValidBtcAddress={setValidBtcAddress}
            validAddress={btcValidAddressFinal}
            payBridgeModalOpen={payBridgeModalOpen}
            setPayBridgeModalOpen={setPayBridgeModalOpen}
          />
        )}
        <InvalidBTCAddressModal
          isOpen={btcValidAddressFinal == false}
          setIsOpen={setBtcValidAddressFinal}
        />
      </form>
    </div>
  );
};

export default WrapUnwrap;
