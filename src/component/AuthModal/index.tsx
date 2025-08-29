import { bgColors } from '@/constant/colors'

import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import RightSideAuth from './RightSideAuth'
import LeftSideAuth from './LeftSideAuth'
import { authModalState } from '@/state/authModalStore/authModalStore'
// import Button from '../ui/Button/Button'



const AuthModal = () => {
    const closeAuthModalAction = authModalState((store) => store.closeAuthModalAction);
    return (
        <div className={`w-full h-[480px] rounded-3xl ${bgColors.bgWhite} relative`}>
            <div className='absolute right-3 top-3'>
                <button onClick={closeAuthModalAction}><RxCross2 /></button>
            </div>
            <div className='grid grid-cols-[360px_auto] h-full'>
                <LeftSideAuth />
                <RightSideAuth />
            </div>
        </div>
    )
}

export default AuthModal