"use client";

import { useRouter } from "next/navigation";

export const flattenQuery = (query: Record<string, any>) => {
    const params = new URLSearchParams();

    for (const key in query) {
        const value = query[key];

        if (typeof value === "object" && value !== null) {
            for (const nestedKey in value) {
                params.append(`${key}_${nestedKey}`, value[nestedKey]);
            }
        } else {
            params.append(key, value);
        }
    }

    return params.toString();  // e.g. pickup_date=2025-08-13&vehicle_class=all
};



const useNavigation = () => {
    const router = useRouter();


    const goBack = () => router.back();


    const navigate = (path: string, query: Record<string, any> = {}) => {
        const queryString = flattenQuery(query);
        const url = `${path}?${queryString}`;
        router.push(url);
    };

    const makeFlattenQueryHandler = (query) =>flattenQuery(query);

    return {
        goBack,
        navigate,
        makeFlattenQueryHandler
    }
}

export default useNavigation