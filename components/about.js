import React from "react";
import Image from "next/image";
import ImageSlider from "./Slider";
import { SliderImages } from "./Slider/sliderImages";
import { AiFillGithub } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { BsTelegram } from "react-icons/bs";

export default function About() {
  var HoverOp = "hover:opacity-[0.7] duration-300 ";
  return (
    <div className="content-body">
      <div className="flex justify-center">
        <div className="text-[17px]  w-[97%] ">
          <div className=" h-[211px] text-[61px] bg-[#cab2f2] my-5 flex rounded-[12px] mx-4 ">
            <div className="w-[80%] ml-5 mt-10 ">
              <p className="text-[.7em] font-bold ">Honour Nosakhare</p>
              <p className="text-[21px] ">Web Developer</p>
            </div>
            <div className="w-[20%] h-full flex justify-end items-center mr-5">
              <Image
                className="rounded-full"
                src={"/images/profile/work-profile.jpg"}
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
          <div className="mx-4">
            <div className=" w-[115px] h-6 bg-[#000000ce] text-white ml-4 rounded-t-[5px] flex items-center ">
              <p className="ml-2 font-[Inter] ">Workspace</p>
            </div>
            <div className=" bg-[#cab2f2]   rounded-[12px] flex flex-col md:flex-row items-center px-4 mb-4 justify-between">
              <div className="programming-languages w-[100%] md:w-[32.3%]  my-4 md:h-[350px] h-[400px] rounded-[7px] ">
                <div className=" h-full opacity-70 z-0">
                  <p className="text-[22px] text-white font-bold text-center mt-4 ">
                    Programming Workspace
                  </p>
                  <div className=" w-full h-16 bg-slate-100 flex items-center justify-around my-[94px] z-10 ">
                    <Image
                      className={`rounded-full" ${HoverOp} `}
                      src={"/images/languages/html_logo.svg"}
                      alt="lang"
                      width={"40%"}
                      height={"40%"}
                    />
                    <Image
                      className={`rounded-[5px] ${HoverOp} `}
                      src={"/images/languages/react-logo.svg"}
                      alt="lang"
                      width={"40%"}
                      height={"40%"}
                    />
                    <Image
                      className={`rounded-[5px] ${HoverOp} `}
                      src={"/images/languages/css3-logo.svg"}
                      alt="lang"
                      width={"40%"}
                      height={"40%"}
                    />
                    <Image
                      className={`rounded-[5px] ${HoverOp} `}
                      src={"/images/languages/javascript_logo.svg"}
                      alt="lang"
                      width={"40%"}
                      height={"40%"}
                    />
                    <Image
                      className={`rounded-[5px] ${HoverOp} `}
                      src={"/images/languages/rest-api.svg"}
                      alt="lang"
                      width={"40%"}
                      height={"40%"}
                    />
                    <Image
                      className={`rounded-[5px] ${HoverOp} `}
                      src={"/images/languages/next-js.svg"}
                      alt="lang"
                      width={"40%"}
                      height={"40%"}
                    />
                  </div>
                </div>
              </div>
              <div className="flex slider-background md:w-[32.3%] my-4 rounded-[7px] ">
                <div className=" w-[100%]    md:h-[350px] h-[400px] bg-[#000000cc] rounded-[7px] flex flex-col items-center  ">
                  <p className="text-white font-[inter] font-bold text-[22px] mt-4 opacity-[.7]   ">
                    projects
                  </p>
                  <ImageSlider slides={SliderImages} />
                </div>
              </div>
              <div className=" w-[100%] md:w-[32.3%]  my-4 md:h-[350px] h-[400px] bg-[#120a1f] rounded-[7px] flex flex-col ">
                <p className="text-[22px] text-white font-bold font-[Inter] text-center mt-4 opacity-[.7] ">
                  Experience
                </p>
                <div className="bg-[#0b0613]  my-4  h-[200px] flex items-center justify-center ">
                  <p className="yayy text-white font-[Inter-light] text-[13px] my-4 mx-4 leading-7 ">
                    <b>6</b> years designing websites with HTML and CSS <br />
                    <b>3</b> years experience with Javascript and Github <br />
                    <b>2</b> years experience with React framework using Next js{" "}
                    <br />
                    <b>1 </b>
                    year experience with Typescript
                  </p>
                </div>
                <div className=" h-[30px] flex items-center justify-evenly mt-[31px]">
                  <AiFillGithub className="text-white text-[21px] opacity-[.7] hover:opacity-[1] duration-200 " />
                  <FiMail className="text-white text-[21px] opacity-[.7] hover:opacity-[1] duration-200 " />
                  <BsTelegram className="text-white text-[21px] opacity-[.7] hover:opacity-[1] duration-200 " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
