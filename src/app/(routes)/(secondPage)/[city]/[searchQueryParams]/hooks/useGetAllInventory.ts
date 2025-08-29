"use client";
import { useEffect, useRef } from 'react'
import useKeepSearchEngineStoreInSync from './useKeepSearchEngineStoreInSync'
import { useMutation } from '@tanstack/react-query'
import { getAllInvertoryService } from '../service'
import { ApiResponse } from '@/types/ApiResponse';
import { CarInvertoryI } from '@/types/interface';
import { InventryQueryT } from '@/app/PathWatcherForHeroSection/HeroSection/types/types';
import { useDeepCompareEffect } from 'react-use';

const useGetAllInventory = () => {
    const { payloadForAllInventroy } = useKeepSearchEngineStoreInSync({ tripType: undefined })

    const { mutateAsync, isPending, ...a } = useMutation<ApiResponse<CarInvertoryI[]>, Error, InventryQueryT>({

        mutationFn: getAllInvertoryService
    })

    // useEffect(() => {
    //     mutateAsync(payloadForAllInventroy);
    // }, []);



    useDeepCompareEffect(() => {
        mutateAsync(payloadForAllInventroy);
    }, [payloadForAllInventroy]);




    return {
        isLoading: isPending,
        inventryList: a.data?.result ?? [],

    }
}

export default useGetAllInventory