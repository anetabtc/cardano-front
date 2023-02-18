import { Tab } from "@headlessui/react";
import { classNames } from "../../utils/Classnames";
import { useState } from "react";
import { BsDot } from "react-icons/bs";
import { transactions } from "../../utils/transactions";

export default function Transactions() {
  const [tabName, setTabName] = useState<string>("Wrap Requests");
  return (
    <div className="px-4 min-h-[100vh] justify-center flex flex-col items-end 2xl:items-center 2xl:ml-28 font-nunito-sans mt-4">
      <div className="flex flex-col justify-center mr-12 2xl:mr-0 ">
        <div className="w-96 my-4 -ml-8">
          <Tab.Group>
            <Tab.List className={"flex space-x-1 rounded-lg bg-black "}>
              {["Wrap Requests", "Unwrap Requests"].map((value: string) => (
                <Tab
                  key={value}
                  onClick={() => setTabName(value)}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-3 text-xs font-semibold leading-5 text-neutral-200 outline-none",
                      value == tabName
                        ? " bg-primary-blue-color shadow"
                        : "text-neutral-200 hover:bg-primary-blue-color/[0.7] hover:text-white"
                    )
                  }
                >
                  {value}
                </Tab>
              ))}
            </Tab.List>
          </Tab.Group>
        </div>
        <div className="sm:-mx-6 lg:-mx-8 bg-primary-full-dark-color px-10 py-6 rounded-lg">
          <h1 className=" text-lg">
            {tabName == "Wrap Requests" ? "Wrap Requests" : "Unwrap Requests"}
          </h1>
          <div className="inline-block py-2 align-middle">
            <div className="shadow-sm">
              <table className="border-separate" style={{ borderSpacing: 0 }}>
                <thead className="">
                  <tr>
                    <th
                      scope="col"
                      className=" font-medium z-10 border-b border-gray-300 bg-opacity-75 py-3.5 text-left text-[12px] text-neutral-200 "
                    >
                      Created At
                    </th>
                    <th
                      scope="col"
                      className=" font-medium z-10 hidden border-b border-gray-300 bg-opacity-75 px-8 py-3.5 text-left text-[12px] text-neutral-200 sm:table-cell"
                    >
                      Transaction (BTC)
                    </th>
                    <th
                      scope="col"
                      className=" font-medium z-10 hidden border-b border-gray-300 bg-opacity-75 px-8 py-3.5 text-left text-[12px] text-neutral-200 lg:table-cell"
                    >
                      Transaction (eBTC)
                    </th>
                    <th
                      scope="col"
                      className=" font-medium border-b border-gray-300 bg-opacity-75 px-8 py-3.5 text-left text-[12px] text-neutral-200"
                    >
                      Transaction{" "}
                      {tabName == "Wrap Requests"
                        ? "(Bridge Fee)"
                        : "(cBtc + ADA)"}
                    </th>
                    <th
                      scope="col"
                      className=" font-medium border-b border-gray-300 bg-opacity-75 px-8 py-3.5 text-left text-[12px] text-neutral-200"
                    >
                      anetaBTC ID
                    </th>
                    <th
                      scope="col"
                      className=" font-medium border-b border-gray-300 bg-opacity-75 pl-3 py-3.5 text-left text-[12px] text-neutral-200"
                    >
                      Confirmation Status
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {transactions.map((trns, idx) => (
                    <tr key={idx}>
                      <td className="whitespace-nowrap py-8 pr-8 text-[12px]  text-neutral-300">
                        {trns.createdAt}
                      </td>
                      <td className="whitespace-nowrap px-8 py-8 text-[12px] text-neutral-300 hidden sm:table-cell">
                        <p className="flex flex-col gap-1">
                          <span>{trns.Btc.amount}</span>
                          <span className="underline">{trns.Btc.id}</span>
                        </p>
                      </td>
                      <td className="whitespace-nowrap px-8 py-8 text-[12px] text-neutral-300 hidden lg:table-cell">
                        <p className="flex flex-col gap-1">
                          <span>{trns.eBtc.amount}</span>
                          <span className="underline">{trns.eBtc.id}</span>
                        </p>
                      </td>
                      <td className="whitespace-nowrap px-8 py-8 text-[12px] text-neutral-300">
                        <p className="flex flex-col gap-1">
                          <span>{trns.bridgeFee.amount}</span>
                          <span className="underline">{trns.bridgeFee.id}</span>
                        </p>
                      </td>
                      <td className="whitespace-nowrap pl-3 py-8 text-[12px] text-neutral-300">
                        {trns.id}
                      </td>
                      <td className="whitespace-nowrap pl-3 text-[12px] py-8 text-neutral-300 flex  justify-end">
                        <p className="border  w-24 border-neutral-500 py-1 pl-1 pr-3 flex items-center rounded-md">
                          <BsDot
                            className={`w-5 h-5 ${
                              trns.status == "Pending"
                                ? "text-orange-500"
                                : trns.status == "Complete"
                                ? "text-green-500"
                                : "text-red-700"
                            }`}
                          />{" "}
                          {trns.status}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
