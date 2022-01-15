import React from 'react'
import './HelpCategoryListing.scss'

export const HelpCategoryListing = ({ start, end, helpData, isActive }) => {
    return (
        <div className='container'>
            <ul className='categoryListing row p-l-4-s p-r-4-s p-l-20-l p-r-20-l'>
                {helpData.map(el =>
                    el.category === isActive
                        ?
                        <li key={el.category} className='c-s-12'>
                            {el.companies.slice(start, end).map(el =>
                                <li className='categoryItem flex flex-column-s flex-row-ml flex-justify-between' key={el.name}>
                                    <div>
                                        <h3 className='h3 fs-4'>{el.name}</h3>
                                        <p className='p fs-3'>{el.mission}</p>
                                    </div>
                                    <div>
                                        <p className='p fs-3'>{el.things}</p>
                                    </div>
                                </li>)}
                        </li>
                        : null
                )}
            </ul>
        </div>

    )
}
