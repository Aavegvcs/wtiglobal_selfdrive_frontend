

export interface SelectedTime {
    time: string,
    timeZone: string
}
export interface LocationFieldI {
    city: string,
    countryCode: string,
    countryId: string
}


export type inventryPayloadMakerHelperT = {
    source: LocationFieldI,
    pickup: {
        date: Date,
        time: string,
    },
    drop: {
        date: Date,
        time: string,
    }
    minDate?: Date
    plan_type: number,
    vehicle_class: string,
    duration_months?: number
}


export type InventryQueryT = {
    source: LocationFieldI;
    pickup: { date: string; time: string };
    drop: { date: string; time: string };
    minDate?: string;
    plan_type: number;
    vehicle_class: string;
    duration_months?: number;   // <--- optional
}
