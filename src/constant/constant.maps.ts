import { tabsOption } from "@/types/interface";


export const tabsListData: tabsOption[] = [
    {
        href: "/daily-weekly-rental",
        text: "Daily Rental"
    },
    {
        href: "/monthly-car-rental",
        text: "Monthly Rental"
    },
]

export const tripTripMap = {
    DAILY_RENTAL: {
        code: 1,
        textValue: "Daily or Weelky"
    },
    MONTHLY_RENTAL: {
        code: 2,
        textValue: "Monthly"
    }
}