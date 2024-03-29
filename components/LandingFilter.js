import React from 'react';

import FilterButton from './FilterButton';

function LandingFilter({ landing, setLanding }) {
    return (
        <div className="filterSubContainer">
            <div className="filterSubHeading">Successful Landing</div>
            <hr />
            <div className="filterGrid">
                <FilterButton active={landing?.toString() === "true"} onSelect={() => setLanding(true)} text='True' />
                <FilterButton active={landing?.toString() === "false"} onSelect={() => setLanding(false)} text='False' />
            </div>
        </div>
    );
}

export default LandingFilter;
