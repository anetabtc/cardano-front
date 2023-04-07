import { Tab } from "@headlessui/react";
import { useState } from "react";
import styles from "../../styles/home/WrapUnwrap.module.css";
import { classNames } from "../../utils/Classnames";
import InvalidBTCAddressModal from "./wrapUnwrap/InvalidBTCAddressModal";
import Unwrap from "./wrapUnwrap/Unwrap";
import Wrap from "./wrapUnwrap/Wrap";

const WrapUnwrap = () => {
  const [payBridgeModalOpen, setPayBridgeModalOpen] = useState<boolean>(false);
  const [btcValidAddressFinal, setBtcValidAddressFinal] =
    useState<boolean>(true);
  const [tabName, setTabName] = useState<string>("Wrap");
  const [validBtcAddress, setValidBtcAddress] = useState<boolean>(false);

  return (
    <div className="flex font-nunito-sans flex-col gap-4 bg-primary-full-dark-color w-11/12 lg:w-full max-w-md rounded-lg p-4">
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
        <Wrap />
      )}
      <InvalidBTCAddressModal
        isOpen={btcValidAddressFinal == false}
        setIsOpen={setBtcValidAddressFinal}
      />
    </div>
  );
};

export default WrapUnwrap;
