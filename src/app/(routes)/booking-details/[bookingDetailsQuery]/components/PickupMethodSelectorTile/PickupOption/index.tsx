"use client";
import { Radio } from 'antd'
import { CheckboxGroupProps } from 'antd/es/checkbox'
import React, { useState } from 'react'



const PickupOption = () => {
   


    const pickupOptionList: CheckboxGroupProps<string>['options'] = [
        {
            label: "Self Pickup",
            value: "SELF_PICKUP"
        },
        {
            label: "Paid Delivery",
            value: "PAID_DELIVERY"
        }
    ]

     const [selectedPickupOption, setSelectedPickupOption] = useState(pickupOptionList[0])

     const onChangeHandler =() =>{
        
     }

    return (
        <div>

            <Radio.Group value={""} options={pickupOptionList}>
            </Radio.Group>
        </div>
    )
}

export default PickupOption