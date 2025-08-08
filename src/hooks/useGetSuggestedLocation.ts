import { LocationFieldI } from '@/app/PathWatcherForHeroSection/HeroSection/types/types';
import { getSuggestedLocationListService } from '@/services/services'
import { ApiResponse } from '@/types/ApiResponse';
import { useQuery } from '@tanstack/react-query'



const useGetSuggestedLocation = () => {
    const { isLoading, error, data } = useQuery<ApiResponse<LocationFieldI[]>, Error>(
        {
            queryKey: ["suggestedLocation"],
            queryFn: getSuggestedLocationListService,
        });

    return {
        isLoading: isLoading,
        error: error,
        suggestLocationList: data?.result ?? []
    }

}

export default useGetSuggestedLocation