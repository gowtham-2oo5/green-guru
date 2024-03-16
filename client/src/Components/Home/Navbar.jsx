import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../Suvidha.png";
import { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function App() {
  const [isServicesCurrent, setServicesCurrent] = useState(false);
  const [isApplyCurrent, setApplyCurrent] = useState(false);
  const [isTrackCurrent, setTrackCurrent] = useState(false);
  // const serviceChange = () => {
  //   setServicesCurrent(true);
  // }
  // const applyChange = () => {
  //   setApplyCurrent(true);
  // }
  // const trackChange = () => {
  //   setTrackCurrent(true);
  // }

  const navigation = [
    { name: "Services", to: "/services", current: isServicesCurrent },
    { name: "Apply", to: "/apply", current: isApplyCurrent },
    { name: "Track", to: "/track", current: isTrackCurrent },
  ];
  return (
    <Disclosure as="nav" className="bg-transparent border border-b-slate-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex scale-150">
                  <Link to="/">
                    <img
                      className=" h-12 w-auto scale-100"
                      src={logo}
                      alt="Your Company"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={`${item.to}`}
                        className={classNames(
                          item.current
                            ? " underline"
                            : "text-gray-900 hover:text-gray-800",
                          "rounded-md px-3 py-2 text-lg font-medium"
                        )}
                        onClick={() => {
                          setServicesCurrent(false);
                          setApplyCurrent(false);
                          setTrackCurrent(false);
                          switch (item.name) {
                            case "Services":
                              setServicesCurrent(true);
                              break;
                            case "Apply":
                              setApplyCurrent(true);
                              break;
                            case "Track":
                              setTrackCurrent(true);
                              break;
                            default:
                              break;
                          }
                        }}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}

                    <Menu as="div">
                      <div>
                        <Menu.Button className=" mt-2 inline-flex w-full justify-center gap-x-1.5 text-lg text-gray-900 shadow-sm  hover:bg-gray-50">
                          More
                          <ChevronDownIcon
                            className="mt-1.5 mr-2 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute top-12 z-10 w-56 origin-top-right rounded-md bg-white ">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  FAQs
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  News
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Support
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Feedback
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
              <div className="absolute gap-3 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button className="bg-green-500 px-7 py-1 rounded-xl text-lg font-semibold text-gray-200 hover:opacity-90">
                  Login
                </button>
                <button className="bg-green-500 px-7 py-1 rounded-xl text-lg font-semibold text-gray-200 hover:opacity-90">
                  Register
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
