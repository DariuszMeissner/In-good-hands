import React from 'react'
import './HelpCategoryPagination.scss'

export const HelpCategoryPagination = ({ setCurrPage, currEntrie, entrieLength, currPage }) => {
    return (
        <div className='pagination flex'>

            {/* prev entries */}
            <div className='icon-arrow-left'
                onClick={() => setCurrPage(prev => prev <= 1
                    ? 1
                    : prev - 1
                )}></div>

            {currEntrie.map(el =>
                <button
                    className={'p-l-2 p-r-2 ' + (el === currPage ? 'b-1 b-col-1' : null)}
                    onClick={e => setCurrPage(+(e.target.id))}
                    id={el}
                    key={el}>
                    {el}
                </button>)}

            {/* next entries */}
            <div className='icon-arrow-right'
                onClick={() => setCurrPage(prev => prev >= entrieLength
                    ? entrieLength
                    : prev + 1
                )}></div>
        </div>
    )
}
