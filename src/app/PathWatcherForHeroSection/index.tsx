"use client";
import HeroSection from '@/app/PathWatcherForHeroSection/HeroSection';
import { usePathname } from 'next/navigation';

const heroSectionVisibleOnUrl: string[] = ["/", "/daily-weekly-rental", "/monthly-car-rental"];

const PathWatcherForHeroSection = () => {
    const pathName = usePathname();
    const isVisible = heroSectionVisibleOnUrl.includes(pathName);

    return (<> {isVisible && <HeroSection />}</>)
}

export default PathWatcherForHeroSection