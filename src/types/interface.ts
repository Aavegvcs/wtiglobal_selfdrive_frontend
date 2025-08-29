import { CarRentalLocationI, InsurancePremiumPercentageI, Tariff, TariffForSingleInventoryI, VehicleSpecsI } from "./helper.interface"

export interface ChipsOptionI {
    label: string,
    value: string
}

export interface KeyValueI {
    label: string,
    value: string
}

export interface SocialMediaI {
    icon: React.ReactNode,
    link: string
}

export interface FooterLinkI {
    text: string,
    href: string
}

export interface FooterColumnI {
    title: string
    links: FooterLinkI[]
}

export interface tabsOption {
    href: string,
    text: string
}


export interface ImportantInfoItemI {
    icon: string,
    id: string;
    label: string;
    value?: string;
    linkText?: string;
    iconOnly?: boolean;
    modalContent: string;
}


export interface CarOverviewItem {
    id: string;
    label: string;
    value: string;
    icon?: string; // optional, if using icons
    hasModal?: boolean; // for items like "Credit Card, Cash & more"
}

export interface CarInvertoryI {
    vehicle_id: {
        _id: string, //    ( MONGO ID VEHICLE ID)
        vendor_id: string | null,
        model_name: string,
        specs: VehicleSpecsI,
        isActive: boolean,
        images: string[],
        createdAt: string,
        updatedAt: string,
        __v: number,
        vehicle_rating: number,
        vehicle_promotion_tag: string
        monthly_discount_percentage: string
    },
    finalPrice?: number,
    rentalDays?: number,
    searchedPlan?: string
    tariff_daily: Tariff,
    tariff_weekly: Tariff,
    tariff_monthly: Tariff,
    minimumRentalDays: number,
    currency: string,
    discount_percentage: number,
    overrun_cost_per_km: number,
    insurance_charge: number,
    insurance_premium_percentage: InsurancePremiumPercentageI,
    total_security_deposit: number,
    onDemand: boolean,
    isActive: boolean,
    createdAt: string,
    updatedAt: string,
}

export interface CarRentalLocationResultI {
    isActive: boolean;
    tagline: string;
    availableInCountries: ChipsOptionI[];
    data: CarRentalLocationI[];
}

export interface AddUserContactQueryI {
    name: string,
    location: string,
    email: string,
    contact: string,
    description: string,
    slug: string
}



// ====================================== TYPES ======================================= 

export interface BookingDetailsI {
    vehicle_id: {
        model_name: string,
        specs: VehicleSpecsI,
        vehicle_rating: number,
        isActive: boolean,
        images: string[]
    },
    tarrif_selected: string,
    tarrifs: TariffForSingleInventoryI[]
    overrun_cost_per_km : number
}


