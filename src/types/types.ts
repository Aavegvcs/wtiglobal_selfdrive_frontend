import { String } from "lodash"


export type TimeSlabT = {
    text: string,
    value: string
}

export type RentalPolicyItemT = {
    icon: string
    title: string,
    body: {
        description: string
        postulates: string[]
    }
}


export type TabsT = {
    key : string,
    label : string,
    value : string
}