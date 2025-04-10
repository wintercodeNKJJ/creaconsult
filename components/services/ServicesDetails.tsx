"use client";

import clsx from "clsx";
import { Barricade } from "phosphor-react";
import SectionContainer from "../global/SectionContainer";

interface ServicesDetailsT {
  title: string;
  description: string;
  imgs: Array<string>;
  subs: Array<string>;
}

const ServicesDetails = () => {
  const services: ServicesDetailsT[] = [
    {
      title: "Ingénierie et Études Techniques",
      description:
        "Expertises techniques pour la conception et la mise en œuvre d’infrastructures.",
      imgs: [
        "/ui/services/TechnicalStudies_pic1.jpg",
        "/ui/services/TechnicalStudies_pic2.jpg",
        "/ui/services/TechnicalStudies_pic3.jpg",
      ],
      subs: [
        "Les études de voiries et réseaux divers",
        "L’ingénierie électrique",
        "Les études topographiques et SIG",
        "Les études géotechniques",
      ],
    },
    {
      title: "Maîtrise d’Œuvre et Gestion de Projets",
      description:
        "Pilotage global des projets, de la planification à l’exécution sur le terrain",
      imgs: [
        "/ui/services/ProjectManagmant_pic1.jpg",
        "/ui/services/ProjectManagmant_pic2.jpg",
        "/ui/services/ProjectManagmant_pic3.jpg",
      ],

      subs: [
        "Les maîtrises d'œuvre",
        "La planification opérationnelle",
        "Les suivis opérationnels des travaux",
        "La rédaction des cahiers de charges",
      ],
    },
    {
      title: "Conseil en Conception et Optimisation",
      description:
        "Études préliminaires pour orienter, planifier et sécuriser la faisabilité des projets.",
      imgs: [
        "/ui/services/Conception_pic1.jpg",
        "/ui/services/Conception_pic2.jpg",
        "/ui/services/Conception_pic3.jpg",
      ],
      subs: [
        "Les études d'opportunité",
        "Les études de préfaisabilité",
        "Les études de faisabilité",
        "Les études socioéconomiques",
      ],
    },
    {
      title: "Développement Durable et Certifications",
      description:
        "Solutions axées sur la durabilité, la gestion environnementale et l’optimisation des ressources naturelles.",
      imgs: [
        "/ui/services/EcoDevelopment_pic1.jpg",
        "/ui/services/EcoDevelopment_pic2.jpg",
        "/ui/services/EcoDevelopment_pic3.jpg",
      ],
      subs: [
        "Les métiers de l'environnement",
        "Le génie rural",
        "Les études hydrogéologie et hydrologie",
        "Les techniques d'analyse des données",
      ],
    },
  ];
  return (
    <SectionContainer>
      <div className="flex flex-col gap-[100px] lg:gap-[250px]">
        {services.map((service, index) => {
          const revert = index % 2 == 0;
          return (
            <div
              className={clsx(
                "flex gap-[50px] justify-between flex-col",
                revert ? " lg:flex-row-reverse" : "lg:flex-row"
              )}
              key={index}
            >
              <div className="grid grid-cols-3 lg:w-1/2 gap-2">
                {service.imgs.map((img, index) => {
                  return (
                    <img
                      key={index}
                      src={img}
                      alt=""
                      className={clsx(
                        "w-full h-[250px] lg:h-[400px] aspect-square object-cover bg-slate-200",
                        index == 1 ? "mt-10" : ""
                      )}
                    />
                  );
                })}
              </div>
              <div className="flex flex-col gap-8">
                <h3 className="font-semibold hidden md:block">
                  {service.title}
                </h3>
                <h5 className="font-semibold md:hidden">{service.title}</h5>
                <div className="space-y-4  max-w-[600px]">
                  <h6>{service.description}</h6>
                  {service.subs.map((desc, i) => (
                    <div key={i} className="flex gap-2 w-full">
                      <span className="w-fit">
                        <Barricade size={24} />
                      </span>{" "}
                      <p>{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default ServicesDetails;
