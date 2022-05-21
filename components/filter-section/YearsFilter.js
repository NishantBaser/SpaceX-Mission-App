import React, { useEffect, useState } from 'react';
import FilterButton from './FilterButton';

function YearsFilter({ selectedYear, setSelectedYear }) {
    const [years, setYears] = useState([]);

    useEffect(() => {
        const startYear = 2006;
        const curYear = new Date().getUTCFullYear();
        for (let i = startYear; i <= curYear; i += 1) {
            setYears(y => [...y, i]);
        }
    }, []);

    return (
        <div className="filterSubContainer">
            <div className="filterSubHeading">Launch Year</div>
            <hr/>
            <div className="filterGrid">
                {
                    years && years.map(year =>
                        <FilterButton key={year} active={year === parseInt(selectedYear,10)} onSelect={() => setSelectedYear(year)} text={year} />
                    )
                }
            </div>
        </div >
    );
}

export default YearsFilter;
