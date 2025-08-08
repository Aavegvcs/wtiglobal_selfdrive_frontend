"use client"

import { useEffect, useState } from "react"

const useIsScroll = () => {
    const [isScroll, setIsScroll] = useState<boolean>(false);
    const handleScroll = () => {
        setIsScroll(window.scrollY > 0);
    };

    useEffect(() => {
        // Listen to scroll
        window.addEventListener('scroll', handleScroll);

        // Run once on mount
        handleScroll();

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return {
        isScroll: isScroll
    }
}

export default useIsScroll