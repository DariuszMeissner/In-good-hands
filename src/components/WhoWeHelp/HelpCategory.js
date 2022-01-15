import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { HelpCategoryListing, HelpCategoryMenu, HelpCategoryPagination } from './Category'
import './HelpCategory.scss'


export const HelpCategory = () => {
    // current active category
    const [isActive, setIsActive] = useState("foundation")

    // default value of prev/current/end page
    const [prevPage, setPrevPage] = useState(0)
    const [currPage, setCurrPage] = useState(1)
    const [nextPage, setNextPage] = useState(2)

    // number of elements on page
    const [pageSize, setPageSize] = useState(3)

    // default positions on loaded page
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(pageSize)

    // current entrie and current lenght of entrie
    const [entrieLength, setEntrieLength] = useState(3)

    // catch data from redux
    const helpData = useSelector(state => state.help.category)

    // updating position: start/end 
    useEffect(() => {
        positions()
    }, [currPage])

    // updating current length of entry
    useEffect(() => {
        pageLength()
    }, [isActive])


    // Return current length of entry
    const pageLength = () => {
        let arrayLength;

        helpData.forEach(el => (el.category === isActive) && (arrayLength = el.companies.length));

        const pageNumbers = arrayLength / pageSize
        const array = []

        for (let i = 1; i < pageNumbers + 1; i++) {
            array.push(i)
        }
        return array
    }

    // calculation positions and beginning values
    const positions = () => {
        // increase
        if (currPage >= nextPage) {
            setStart((currPage * pageSize) - pageSize)
            setEnd(currPage * pageSize)
            setNextPage(currPage + 1)
            setPrevPage(currPage - 1)
        }
        // decrease
        if (currPage <= prevPage) {
            setStart((currPage * pageSize) - pageSize)
            setEnd(currPage * pageSize)
            setNextPage(currPage + 1)
            setPrevPage(currPage - 1)
        }
    }

    // handle active category of entries
    const handleActiveCategory = (category) => {
        // set Active category
        setIsActive(category)
        // set beginning values - each category can have different number of elements
        setStart(0)
        setEnd(pageSize)
        setCurrPage(1)
    }

    return (
        <>
            {/* menu entries  */}
            <HelpCategoryMenu
                helpData={helpData}
                handleActiveCategory={handleActiveCategory}
                isActive={isActive} />

            {/* listing entries */}
            <HelpCategoryListing
                helpData={helpData}
                start={start}
                end={end}
                isActive={isActive} />

            {/* Pagination */}
            <HelpCategoryPagination
                setCurrPage={setCurrPage}
                currEntrie={pageLength()}
                entrieLength={pageLength().length}
                currPage={currPage}
            />


        </>
    )
}
