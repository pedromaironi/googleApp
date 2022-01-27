import Head from "next/head";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";

import Image from "next/image";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*  Header */}

      <header
        className="flex flex-row w-full p-5 justify-between
       text-sm text-gray-700"
      >
        {/* Left Section */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right Section */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <ViewGridIcon
            className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 
          cursor-pointer transition transform duration-110 hover:scale-110"
          />

          {/* Avatar */}
          <Avatar url="https://media.discordapp.net/attachments/936073527155654696/936360288276611142/unknown.png?width=566&height=566" />
        </div>
      </header>

      {/* Body */}
      <form
        className="flex flex-col items-center mt-44
        flex-grow w-4/5"
      >
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
        />

        <div
          className="flex w-full mt-5 hover:shadow-lg 
        focus-within:shadow-lg max-w-md rounded-full 
        border border-gray-200 px-5 py-3 items-center
        sm:max-w-xl lg:max-w-2xl
        "
        >
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input type="text" className="focus:outline-none flex-grow" />
          <MicrophoneIcon className="h-5 ml-3 text-gray-500" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8
        sm:space-y-0 sm:flex-row sm:space-x-4
        ">
        <buttons className="btn text-center">Google Search</buttons>
        <buttons className="btn text-center">I'm Feeling Lucky</buttons>
      </div>
      </form>

      <Footer />
      {/* Footer */}
    </div>
  );
}
