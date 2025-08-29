
import React, { useState } from 'react'
import Tabs from '../Tabs'
import { TabsT } from '@/types/types'
import RegisterUser from './RegisterUser'
import LoginUser from './LoginUser'

const tabsList: TabsT[] = [
    {
        key: "0",
        label: "Login",
        value: "LOGIN"
    },
    {
        key: "1",
        label: "Register",
        value: "REGISTER"
    }
]

const RightSideAuth = () => {
    const [activeTab, setActiveTab] = useState<TabsT>(tabsList[1])

    const onClickHandler = (el: TabsT) => setActiveTab(el);


    return (
        <div className='flex flex-col gap-6 py-6 px-6 rounded-3xl'>
            <Tabs
                onClick={onClickHandler}
                activeTab={activeTab}
                tabsList={tabsList}
                alignment="center"
            />

            {activeTab?.value === "LOGIN" && <LoginUser />}

            {activeTab?.value === "REGISTER" && <RegisterUser />}
        </div>
    )
}

export default RightSideAuth