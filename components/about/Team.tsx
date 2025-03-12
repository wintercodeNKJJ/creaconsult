"use client";

import { FacebookLogo, GoogleLogo, LinkedinLogo } from "phosphor-react";
import SectionContainer from "../global/SectionContainer";

const Team = () => {
  return (
    <SectionContainer>
      <div className="mb-4">
        <h2 className="font-semibold hidden md:block">Team</h2>
        <h4 className="font-semibold md:hidden">Team</h4>
      </div>
      <div className="flex flex-col md:flex-row justify-end gap-4">
        {[
          { name: "Mr. Fotso", post: "CEO", img: "/ui/team/Ceo.jpg" },
          {
            name: "Miss. Richa Barbara",
            post: "Conception",
            img: "/ui/team/Conception.jpg",
          },
          {
            name: "Mr. Ebang Rodrig",
            post: "Technical study",
            img: "/ui/team/Etude.jpg",
          },
          {
            name: "Mr. Charls Xavier",
            post: "Maitre D'oeuvre",
            img: "/ui/team/Ouvrage.jpg",
          },
          {
            name: "Mr. Felix ",
            post: "Certification",
            img: "/ui/team/Certification.jpg",
          },
          { name: "", post: "Human Resources", img: "/ui/team/HR.jpg" },
        ].map((personel, index) => {
          return (
            <div
              key={index}
              className="relative w-full md:max-w-[300px] h-fit flex justify-center items-center"
            >
              <img
                src={personel.img}
                alt=""
                className=" w-full h-[400px] object-cover"
              />
              <div className="space-y-2 absolute bottom-0 left-0 p-4 bg-gradient-to-b from-transparent to-[var(--primary)] w-full">
                <p className="text-white">{personel.post}</p>
                <div className="flex gap-2">
                  <div className="flex p-1 justify-center items-center bg-white text-[var(--primary)] rounded-full w-fit h-fit">
                    <GoogleLogo size={16} />
                  </div>
                  <div className="flex p-1 justify-center items-center bg-white text-[var(--primary)] rounded-full w-fit h-fit">
                    <FacebookLogo size={16} />
                  </div>
                  <div className="flex p-1 justify-center items-center bg-white text-[var(--primary)] rounded-full w-fit h-fit">
                    <LinkedinLogo size={16} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default Team;
