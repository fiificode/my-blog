import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/memoj.png";

const Navbar = () => {
  return (
    <nav className=" bg-white max-w-6xl flex relative justify-between items-center mx-auto px-8 h-20">
      <div className="inline-flex">
        <Link className="_o6689fn  flex items-center" href="/">
          <Image
            src={Logo}
            alt="logo"
            width={60}
            height={60}
            className="rounded-full w-18 h-18"
          />
          <h1 className="font-headers text-xl">fiifi</h1>
        </Link>
      </div>

      <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
        <div className="inline-block">
          <div className="inline-flex items-center max-w-full">
            <button
              className="flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-1  py-1"
              type="button"
            >
              <div className="block flex-grow flex-shrink overflow-hidden">
                Start your search
              </div>
              <div className="flex items-center justify-center relative  h-8 w-8 rounded-full">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: "block",
                    fill: "none",
                    height: 12,
                    width: 12,
                    stroke: "currentcolor",
                    strokeWidth: 5.33333,
                    overflow: "visible",
                  }}
                >
                  <g fill="none">
                    <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-initial">
        <div className="flex justify-end items-center relative">
          <div className=" hidden sm:flex mr-4 space-x-3 px-3 items-center border rounded-full  group-hover:bg-black">
            <a className="inline-block py-2" href="#">
              <div className="flex items-center relative cursor-pointer whitespace-nowrap">
                fiificode@gmail.com
              </div>
            </a>
            <ArrowUpRight className="w-5 h-5" />
          </div>

          <div className="block cursor-pointer">
            <div className="inline relative">
              <button
                type="button"
                className="flex items-center justify-center"
              >
                <div className="">
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                      display: "block",
                      fill: "none",
                      height: "16px",
                      width: "16px ",
                      stroke: "currentcolor",
                      strokeWidth: 3,
                      overflow: "visible",
                    }}
                  >
                    <g fill="none" fill-rule="nonzero">
                      <path d="m2 16h28"></path>
                      <path d="m2 24h28"></path>
                      <path d="m2 8h28"></path>
                    </g>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
