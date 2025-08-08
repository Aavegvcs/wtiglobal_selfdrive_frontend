"use client";
import Container from "@/component/layout/Container";
import Heading from "@/app/PathWatcherForHeroSection/HeroSection/components/Heading";
import "./index.css";
import Tabs from "@/app/PathWatcherForHeroSection/HeroSection/components/Tabs";
import SearchEngines from "@/app/PathWatcherForHeroSection/HeroSection/SearchEngines";



const HeroSection = () => {


  return (
    <div className="pt-[72px] pb-[60px]" id="HeroSection">
      <Container>
        <div className="flex flex-col items-center w-full pt-20">
          <Heading heading1="Self-Drive Rentals by WTicabs" heading2=" Flexible Plans, Clean Cars, Total Control." />
          <div className="mb-3">
            <Tabs />
          </div>
          <SearchEngines />
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
