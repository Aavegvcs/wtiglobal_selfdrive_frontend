import { tabsOption } from "@/types/interface";
import { TimeSlabT } from "@/types/types";


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

export const myBookingBookingTabs = {
    UPCAMING: {
        text: "Upcoming",
        value: "UPCAMING"
    },
    CANCELLED: {
        text: "Cancelled",
        value: "CANCELLED"
    },
    COMPLETED: {
        text: "Completed",
        value: "COMPLETED"
    },
}


export const vehiclePickUpTime = {
    SELF_PICKUP: {
        text: "Self Pickup",
        value: "SELF_PICKUP"
    },
    PAID_DELIVERY: {
        text: "Self Pickup",
        value: "PAID_DELIVERY"
    },
}

export const timeSlabList: TimeSlabT[] = [
    { text: '12:00 AM', value: '00:00' },
    { text: '12:30 AM', value: '00:30' },
    { text: '1:00 AM', value: '01:00' },
    { text: '1:30 AM', value: '01:30' },
    { text: '2:00 AM', value: '02:00' },
    { text: '2:30 AM', value: '02:30' },
    { text: '3:00 AM', value: '03:00' },
    { text: '3:30 AM', value: '03:30' },
    { text: '4:00 AM', value: '04:00' },
    { text: '4:30 AM', value: '04:30' },
    { text: '5:00 AM', value: '05:00' },
    { text: '5:30 AM', value: '05:30' },
    { text: '6:00 AM', value: '06:00' },
    { text: '6:30 AM', value: '06:30' },
    { text: '7:00 AM', value: '07:00' },
    { text: '7:30 AM', value: '07:30' },
    { text: '8:00 AM', value: '08:00' },
    { text: '8:30 AM', value: '08:30' },
    { text: '9:00 AM', value: '09:00' },
    { text: '9:30 AM', value: '09:30' },
    { text: '10:00 AM', value: '10:00' },
    { text: '10:30 AM', value: '10:30' },
    { text: '11:00 AM', value: '11:00' },
    { text: '11:30 AM', value: '11:30' },
    { text: '12:00 PM', value: '12:00' },
    { text: '12:30 PM', value: '12:30' },
    { text: '1:00 PM', value: '13:00' },
    { text: '1:30 PM', value: '13:30' },
    { text: '2:00 PM', value: '14:00' },
    { text: '2:30 PM', value: '14:30' },
    { text: '3:00 PM', value: '15:00' },
    { text: '3:30 PM', value: '15:30' },
    { text: '4:00 PM', value: '16:00' },
    { text: '4:30 PM', value: '16:30' },
    { text: '5:00 PM', value: '17:00' },
    { text: '5:30 PM', value: '17:30' },
    { text: '6:00 PM', value: '18:00' },
    { text: '6:30 PM', value: '18:30' },
    { text: '7:00 PM', value: '19:00' },
    { text: '7:30 PM', value: '19:30' },
    { text: '8:00 PM', value: '20:00' },
    { text: '8:30 PM', value: '20:30' },
    { text: '9:00 PM', value: '21:00' },
    { text: '9:30 PM', value: '21:30' },
    { text: '10:00 PM', value: '22:00' },
    { text: '10:30 PM', value: '22:30' },
    { text: '11:00 PM', value: '23:00' },
    { text: '11:30 PM', value: '23:30' }


];


