import React from 'react'
import './AboutUsContent.scss'
import { ReactComponent as DecorationSvg } from '../../assets/images/Decoration.svg'
import { ReactComponent as SignSvg } from '../../assets/images/Signature.svg'


export const AboutUsContent = () => {
    return (
        <div className='aboutUs-content c-s-12 c-l-6 p-t-4 b-b-4 bg-col-3 flex flex-column flex-align-center flex-justify-center'>
            <h3 className='h3'>About us</h3>
            <DecorationSvg className='decoration m-b-6 m-t-1' />
            <p className='center'>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
            <div className='sign-wrapper flex flex-justify-end'>
                <SignSvg className='sign' />
            </div>
        </div>
    )
}
