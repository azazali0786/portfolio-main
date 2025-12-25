"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";

import { projects, projects_app } from "@/data";
import { PinContainer } from "./ui/Pin";

type Project = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
};

const RecentProjects = () => {
  const [activeTab, setActiveTab] = useState<"web" | "app">("web");

  const activeProjects: Project[] =
    activeTab === "web" ? projects : projects_app;

  return (
    <div id="projects" style={{ scrollMarginTop: "6rem" }}>
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      {/* 🔘 TAB BUTTONS */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => setActiveTab("web")}
          className={`px-6 py-2 rounded-full text-sm font-medium transition
            ${
              activeTab === "web"
                ? "bg-purple text-white"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
        >
          Web Projects
        </button>

        <button
          onClick={() => setActiveTab("app")}
          className={`px-6 py-2 rounded-full text-sm font-medium transition
            ${
              activeTab === "app"
                ? "bg-purple text-white"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
        >
          App Projects
        </button>
      </div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 p-4">
        {activeProjects.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>

                <motion.img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl font-light text-sm line-clamp-2"
                style={{ color: "#BEC1DD", margin: "1vh 0" }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon: string, i: number) => (
                    <div
                      key={i}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * i + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-purple text-sm lg:text-xl cursor-pointer"
                >
                  {activeTab === "web" ? "Check Live Site" : "View on GitHub"}

                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </a>
              </div>
            </PinContainer>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
