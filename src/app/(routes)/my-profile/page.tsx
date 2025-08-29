import Container from '@/component/layout/Container'
import Section from '@/component/section'
import { bgColors } from '@/constant/colors'
import React from 'react'
import UpdateUserForm from './UpdateUserForm'
import SideBarProfile from './SideBarProfile'

const MyProfile = () => {
    return (
        <>
            <Section paddY='py-14' bgColor={bgColors.bgFadeWhite}>
                <Container>
                    <div className={`grid grid-cols-[0.8fr_2.2fr] gap-6 pt-8 items-start`}>
                        {/*  SIDE BAR PROFILE */}
                        <SideBarProfile />
                        {/*  USER FORM */}
                        <div>
                            <UpdateUserForm />
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    )
}

export default MyProfile