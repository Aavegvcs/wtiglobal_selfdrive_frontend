

export interface VehicleSpecsI {
    Class: string;
    EngineCapacity: string;
    MaxSpeed: number;
    Doors: number;
    Year: number;
    PowerHP: string;
    Transmission: string;
    IsSimilarCarsTitle: boolean;
    IsVerified: boolean;
    IsSimilarCars: boolean;
    Model: string;
    Seats: number;
    Order_number: string;
    DriveType: string;
    ExteriorColor: string;
    Manufactory: string;
    BodyType: string;
    _id: string;
    mileage_limit: string
    LuggageCapacity: string
}

export interface Tariff {
    base: number;
    mileage_limit: number;
    is_mileage_unlimited: boolean;
    partial_security_deposit: number;
    hikePercentage: number;
}

export interface InsurancePremiumPercentageI {
    daily: number;
    weekly: number;
    monthly: number;
}

export interface CarRentalLocationI {
    _id: string;
    cityName: string;
    isActive: boolean;
    slug: string;
    image: string;
    createdAt?: Date;
    updatedAt?: Date;
    __v?: number;
    countryCode: string;

}


export interface DateTimeI {
    date: string,
    time: string
}

export interface fareDetailsI {
    inventory_rate: number,
    base_fare: number,
    extra_charges: number,
    delivery_charges: number,
    collection_charges: number,
    total: number,
    tax: number,
    grand_total: number
}

export interface TariffForSingleInventoryI extends Tariff {
    pickup: DateTimeI,
    drop: DateTimeI,
    tariff_type: string,
    fare_Details: fareDetailsI
}

