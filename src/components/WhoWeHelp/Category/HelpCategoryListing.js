import React from 'react'
import './HelpCategoryListing.scss'

export const HelpCategoryListing = ({ start, end, helpData, isActive }) => {
    return (
        <div className='container'>
            <ul className='categoryListing row p-l-0-s m-t-8 p-r-0-s p-l-20-l p-r-20-l'>
                {helpData.map(el =>
                    el.category === isActive
                        ?
                        <li key={el.category} className='c-s-12'>
                            {el.companies.slice(start, end).map(el =>
                                <div className='categoryItem flex flex-column-s flex-row-ml flex-justify-between' key={el.name}>
                                    <div>
                                        <h3 className='h3 fs-4'>{el.name}</h3>
                                        <p className='p fs-3'>{el.mission}</p>
                                    </div>
                                    <div>
                                        <p className='p fs-3'>{el.things}</p>
                                    </div>
                                </div>)}
                        </li>
                        : null
                )}
            </ul>
        </div>

    )
}
