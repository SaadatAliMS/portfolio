import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 md:px-32  sm:px-20 ">
      <div className="col-span-12 lg:col-span-3 bg-white rounded-2xl p-4 text-center ">
        <Sidebar />
      </div>
      <div className="flex flex-col col-span-12 bg-white rounded-2xl lg:col-span-9 p-4 text-center ">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
