import React from 'react'
import './HelpCategoryMenu.scss'

export const HelpCategoryMenu = ({ helpData, handleActiveCategory, isActive }) => {
    return (
        <>
            <ul className='flex flex-column-s flex-row-m'>
                {helpData.map(el =>
                    <li key={el.category}
                        className={"p-l-4 p-r-4 center " + (isActive === el.category ? 'b-2 b-col-1' : null)}
                        onClick={() => handleActiveCategory(el.category)}>
                        {el.category}
                    </li>)}
            </ul>
            <div className='categoryDesc center m-t-8'>
                {helpData.map(el =>
                    el.category === isActive
                        ?
                        <p key={el.category} className='p-l-4 p-r-4'>
                            {el.shortDesc}
                        </p>
                        : null
                )}
            </div>
        </>
    )

}
