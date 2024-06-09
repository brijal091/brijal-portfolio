"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const sections = [
      { id: "about", ref: aboutRef },
      { id: "experience", ref: experienceRef },
      { id: "projects", ref: projectsRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []);

  return (
    <main className="min-h-screen container mx-auto">
      <div className="flex justify-between gap-8">
        <div className="flex flex-col gap-4 w-1/2 p-28">
          <Link href="/">
            <h1 className="text-7xl font-black">Brijal Kansara</h1>
          </Link>
          <h2 className="text-white text-2xl">Senior Frontend Engineer</h2>
          <p className="text-xl">
            I build pixel-perfect, engaging, and accessible digital experiences.
          </p>
          <div className="sections mt-16 text-xl">
            <ul className="flex flex-col gap-4">
              <li
                className={`${activeSection === "about" ? "text-white" : ""}`}
              >
                <Link href="#about">
                  <span
                    className={`border-b-2 inline-block mb-2 mr-5 ${
                      activeSection === "about"
                        ? "w-16"
                        : "w-10 border-gray-500"
                    }`}
                  ></span>
                  <span>About</span>
                </Link>
              </li>
              <li
                className={`nav-item ${
                  activeSection === "experience" ? "text-white" : ""
                }`}
              >
                <Link href="#experience">
                  <span
                    className={`border-b-2 inline-block mb-2 mr-5 ${
                      activeSection === "experience"
                        ? "w-16"
                        : "w-10 border-gray-500"
                    }`}
                  ></span>
                  <span>Experience</span>
                </Link>
              </li>
              <li
                className={`nav-item ${
                  activeSection === "projects" ? "active" : ""
                }`}
              >
                <Link
                  href="#projects"
                  className={`${
                    activeSection === "projects" ? "text-white" : ""
                  }`}
                >
                  <span
                    className={`border-b-2 inline-block mb-2 mr-5 ${
                      activeSection === "projects"
                        ? "w-16"
                        : "w-10 border-gray-500"
                    }`}
                  ></span>
                  <span>Projects</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-1/2 h-screen overflow-auto no-scroll p-24">
          <section id="about" ref={aboutRef}>
            <h2>About</h2>
            <p>
              Back in 2012, I decided to try my hand at creating custom Tumblr
              themes and tumbled head first into the rabbit hole of coding and
              web development. Fast-forward to today, and I’ve had the privilege
              of building software for an advertising agency, a start-up, a huge
              corporation, and a digital product studio. My main focus these
              days is building accessible user interfaces for our customers at
              Klaviyo. I most enjoy building software in the sweet spot where
              design and engineering meet — things that look good but are also
              built well under the hood. In my free time, I've also released an
              online video course that covers everything you need to know to
              build a web app with the Spotify API. When I’m not at the
              computer, I’m usually rock climbing, reading, hanging out with my
              wife and two cats, or running around Hyrule searching for Korok
              seeds Korok seeds.Back in 2012, I decided to try my hand at
              creating custom Tumblr themes and tumbled head first into the
              rabbit hole of coding and web development. Fast-forward to today,
              and I’ve had the privilege of building software for an advertising
              agency, a start-up, a huge corporation, and a digital product
              studio.
            </p>
          </section>
          <section id="experience" ref={experienceRef}>
            <h2>Experience</h2>
            <p>
              When I’m not at the computer, I’m usually rock climbing, reading,
              hanging out with my wife and two cats, or running around Hyrule
              searching for Korok seeds Korok seeds.Back in 2012, I decided to
              try my hand at creating custom Tumblr themes and tumbled head
              first into the rabbit hole of coding and web development.
              Fast-forward to today, and I’ve had the privilege of building
              software for an advertising agency, a start-up, a huge
              corporation, and a digital product studio. My main focus these
              days is building accessible user interfaces for our customers at
              Klaviyo. I most enjoy building software in the sweet spot where
              design and engineering meet — things that look good but are also
              built well under the hood. In my free time, I've also released an
              online video course that covers everything you need to know to
              build a web app with the Spotify API.
            </p>
          </section>
          <section
            id="projects"
            ref={projectsRef}
            // style={{ minHeight: "90vh" }}
          >
            <h2>Projects</h2>
            <p>
              Back in 2012, I decided to try my hand at creating custom Tumblr
              themes and tumbled head first into the rabbit hole of coding and
              web development. Fast-forward to today, and I’ve had the privilege
              of building software for an advertising agency, a start-up, a huge
              corporation, and a digital product studio. My main focus these
              days is building accessible user interfaces for our customers at
              Klaviyo. I most enjoy building software in the sweet spot where
              design and engineering meet — things that look good but are also
              built well under the hood. In my free time, I've also released an
              online video course that covers everything you need to know to
              build a web app with the Spotify API. When I’m not at the
              computer, I’m usually rock climbing, reading, hanging out with my
              wife and two cats, or running around Hyrule searching for Korok
              seeds Korok seeds.Back in 2012, I decided to try my hand at
              creating custom Tumblr themes and tumbled head first into the
              rabbit hole of coding and web development. Fast-forward to today,
              and I’ve had the privilege of building software for an advertising
              agency, a start-up, a huge corporation, and a digital product
              studio.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
