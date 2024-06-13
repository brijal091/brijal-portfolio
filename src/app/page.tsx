"use client";
import Header from "@/components/Header";
import SectionDetail from "@/components/SectionDetail";
import { useEffect, useRef, useState } from "react";
export default function Home() {
  
  const [activeSection, setActiveSection] = useState('#about');
  return (
    <main className="min-h-screen container mx-auto">
      <div className="flex flex-col md:flex-row">
      <div className="flex justify-between gap-8 md:w-1/2">
        <Header activeSection={activeSection}/>
      </div>
      <div className="flex justify-between gap-8 md:w-1/2 relative overflow-auto max-h-screen no-scroll">
        <SectionDetail setActiveSection={setActiveSection}/>
      </div>
      </div>
    </main>
  );
}
