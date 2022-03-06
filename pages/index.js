import { RiHomeLine } from "react-icons/ri";
import { BiCopy } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import { IoStatsChart } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

export default function Home() {
  return (
    <div className="flex justify-center bg-[#e0e0e0] h-screen p-5  ">
      <div className=" grid grid-cols-5 grid-rows-2 gap-x-10 gap-10 h-fit">
        {/* Sidebar Section */}
        <div className=" row-span-2 h-fit ">
          <div className="bg-[#091226] p-4 px-0 pb-0 rounded-3xl w-64 h-fit flex flex-col items-center drop-shadow-[0_10px_10px_rgba(0,0,0,0.6)] hover:translate-y-[-0.3rem] ease-in duration-200">
            <div className="bg-white rounded-full w-24 h-24 mt-10 mb-5">
              <img className="rounded-full " src="/image.jpg" alt="" />
            </div>
            <h3 className="text-center text-white text-2xl font-thin mb-3">
              Levi
            </h3>
            <div className="bg-[#6616DC] shadow-purple text-white rounded-xl px-3 py-1 text-sm mb-10">
              <p>Pro Level</p>
            </div>
            <div className="bg-[#15224B] shadow-dark w-64 h-full py-10 text-white rounded-3xl flex flex-col items-center">
              <ul className="mb-10">
                <li className="mb-5 flex items-center">
                  <RiHomeLine className="mr-3" />
                  <p>Dashboard</p>
                </li>
                <li className="mb-5 flex items-center">
                  <BiCopy className="mr-3" />
                  <p>Projects</p>
                </li>
                <li className="mb-5 flex items-center">
                  <FaWallet className="mr-3" />
                  <p>Invoices</p>
                </li>
                <li className="mb-5 flex items-center">
                  <AiOutlinePieChart className="mr-3" />
                  <p>Reports</p>
                </li>
              </ul>
              <div className="bg-gray-700 shadow-gray rounded-2xl p-5 mb-[5px]">
                <p>Having Problem?</p>
                <p>Contact Us</p>
              </div>
            </div>
          </div>
        </div>
        {/* Goodmorning Section */}
        <div className="col-span-2 px-0 rounded-2xl h-fit">
          <p className="text-2xl text-black font-bold mb-5">
            Good morning,{" "}
            <span className="text-gray-600 text-2xl font-normal">Levi</span>
          </p>
          <div className="grid gap-10 grid-cols-2 h-fit">
            <div className="bg-[#6616DC] shadow-purple w-50 rounded-2xl flex flex-col items-center text-white pt-8 drop-shadow-[0_10px_10px_rgba(0,0,0,0.4)] hover:translate-y-[-0.3rem] ease-in duration-200">
              <IoStatsChart className="h-20 w-20 mb-3" />
              <p className="text-xl mb-2">Earnings</p>
              <p className="text-2xl font-bold mb-1">$7,896</p>
              <div className="bg-violet-900 p-2 rounded-2xl drop-shadow-[0_10px_10px_#00000050]">
                <p className="text-xs ">+ 10% since last month</p>
              </div>
            </div>
            <div className="bg-[#e0e0e0] shadow-inner w-50 rounded-2xl flex flex-col items-center p-5 drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] hover:translate-y-[-0.3rem] ease-in duration-200">
              <div className="bg-[#e0e0e0] shadow-white w-full rounded-2xl mb-5 h-fit p-4 flex items-center">
                <div className="bg-[#6616DC] rounded-2xl w-14 h-14 flex justify-center items-center mr-3">
                  <p className="text-2xl text-white">98</p>
                </div>
                <div>
                  <p className="font-bold text-lg">Rank</p>
                  <p className="font-thin text-sm">In top 20%</p>
                </div>
              </div>
              <div className="bg-[#e0e0e0] shadow-white w-full rounded-2xl p-4">
                <div className="flex items-center mb-2">
                  <div className="bg-[#6616DC] rounded-2xl w-14 h-14 flex justify-center items-center mr-3">
                    <p className="text-2xl text-white">32</p>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Projects</p>
                    <p className="font-thin text-sm">8 this mmonth</p>
                  </div>
                </div>
                <div className="flex ">
                  <p className="bg-[#EAECFC] text-xs p-1 px-2 rounded-2xl mr-2">
                    mobile app
                  </p>
                  <p className="bg-[#EAECFC] text-xs p-1 px-2 rounded-2xl">
                    branding
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Project Section */}
        <div className="col-span-2 rounded-2xl relative h-fit">
          <div className="bg-[#EAECFC] flex items-center w-fit rounded-xl p-3 absolute right-0 top-0">
            <FiSearch className="mr-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search for Projects"
              className="bg-[#EAECFC] outline-none text-xs w-32 "
            />
          </div>
          <div className=" h-full ">
            <p className="font-bold mb-5 mt-16 text-xl">Your Projects</p>
            <div className="bg-[#e0e0e0] shadow-inner rounded-2xl relative h-52 drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] hover:translate-y-[-0.3rem] ease-in duration-200">
              <div className=" w-full h-fit p-4 pb-0 flex items-center">
                <div className=" rounded-full w-14 h-14 flex justify-center items-center mr-3">
                  <img
                    className="rounded-full ml-1"
                    src="/Bakery.jpg"
                    alt=""
                    width="90px"
                    height="90px"
                  />
                </div>
                <div className="ml-2">
                  <p className="font-bold ">Logo Design for bakery</p>
                  <p className="font-thin text-sm">1 day remaining</p>
                </div>
              </div>
              <div className=" w-full  h-fit p-4 flex items-center">
                <div className="bg-[#6616DC] rounded-full w-16 h-16 flex justify-center items-center mr-3">
                  <img
                    className="rounded-full "
                    src="/personal.png"
                    alt=""
                    width="90px"
                    height="90px"
                  />
                </div>
                <div>
                  <p className="font-bold ">Personal Branding</p>
                  <p className="font-thin text-sm">3 day remaining</p>
                </div>
              </div>
              <p className="text-violet-800 text-sm font-bold absolute right-0 mr-5 cursor-pointer">
                See all projects
              </p>
            </div>
          </div>
        </div>
        {/* Invoices Section */}
        <div className="col-span-2 rounded-2xl h-fit">
          <div className=" h-fit ">
            <p className="font-bold mb-5 text-xl">Recent Invoices</p>
            <div className="bg-[#e0e0e0] shadow-inner rounded-2xl mb-4 drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] hover:translate-y-[-0.3rem] ease-in duration-200">
              <div className="flex items-center justify-between">
                <div className="h-fit p-4 pb-0 flex items-center">
                  <div className=" rounded-full w-14 h-14 flex justify-center items-center mr-3">
                    <img
                      className="rounded-full ml-1"
                      src="/Bakery.jpg"
                      alt=""
                      width="90px"
                      height="90px"
                    />
                  </div>
                  <div className="ml-2">
                    <p className="font-bold ">Lord Arthur</p>
                    <p className="font-thin text-sm">ABC holdings</p>
                  </div>
                </div>
                <div className="flex items-center p-4 pb-0 pr-8">
                  <p className="bg-[#c8ec95] p-1 px-3 rounded-2xl mr-6 text-[#72a329]">
                    Paid
                  </p>
                  <p>$1,200.87</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className=" w-full h-fit p-4 flex items-center">
                  <div className="rounded-full w-16 h-16 flex justify-center items-center mr-3">
                    <img
                      className="rounded-full "
                      src="/personal.png"
                      alt=""
                      width="90px"
                      height="90px"
                    />
                  </div>
                  <div>
                    <p className="font-bold ">Jennifer Anitson</p>
                    <p className="font-thin text-sm">Inchor Associate</p>
                  </div>
                </div>
                <div className="flex items-center pb-0 pr-8">
                  <p className="bg-[#ffb2b0] p-1 px-3 rounded-2xl mr-6 text-[#ff625f]">
                    Late
                  </p>
                  <p>$6,500.87</p>
                </div>
              </div>
            </div>
            <div className="bg-[#15224B] p-5 py-4 shadow-dark rounded-2xl flex justify-between items-center drop-shadow-[5px_5px_5px_rgba(0,0,0,0.5)] hover:translate-y-[-0.3rem] ease-in duration-200">
              <div className=" h-fit pb-0 flex items-center">
                <div className=" rounded-full w-11 h-11 flex justify-center items-center mr-3">
                  <img
                    className="rounded-full ml-1 text-white"
                    src="/slack-icon.svg"
                    alt=""
                    width="90px"
                    height="90px"
                  />
                </div>
                <div className="ml-2 text-white">
                  <p className="font-bold text-xl">Engage with clients</p>
                  <p className="font-thin text-xs text-gray-300">
                    Join slack channel
                  </p>
                </div>
              </div>
              <button className="bg-[#6616DC] px-6 py-2 rounded-xl text-white">
                Join Now
              </button>
            </div>
          </div>
        </div>
        {/* Recommended Section */}
        <div className="col-span-2 rounded-2xl h-fit">
          <div className=" h-fit ">
            <p className="font-bold mb-5 text-xl">Recommended Projects</p>
            <div className="bg-[#e0e0e0] shadow-inner rounded-2xl mb-4 pb-4 drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] hover:translate-y-[-0.3rem] ease-in duration-200">
              <div className="flex items-center justify-between">
                <div className="h-fit p-4 pb-0 flex items-center">
                  <div className=" rounded-full w-14 h-14 flex justify-center items-center mr-3">
                    <img
                      className="rounded-full ml-1"
                      src="/wilson.png"
                      alt=""
                      width="90px"
                      height="90px"
                    />
                  </div>
                  <div className="ml-2">
                    <p className="font-bold ">Wilson Fisk</p>
                    <p className="font-thin text-sm">Updated 10 min ago</p>
                  </div>
                </div>
                <div className="flex items-center p-4 pb-0 pr-8">
                  <p className="bg-[#6616DC] p-1 px-3 rounded-2xl mr-6 text-white">
                    Design
                  </p>
                </div>
              </div>
              <div className=" items-center justify-between p-4 px-8">
                <p className="mb-2">
                  Need a designer to form branding essentials for my business.
                </p>
                <span className="text-gray-600 text-sm">
                  Looking for a talented brand designer to create all the
                  <br />
                  branding elements for my new startup.
                </span>
              </div>
              <div className="bg-[#e0e0e0] shadow-white rounded-2xl p-3 px-4 mx-4 flex items-center justify-between">
                <p>$8700/month</p>
                <button className="border-violet border-2 rounded-2xl px-3 py-1 text-violet">
                  Full Time
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
