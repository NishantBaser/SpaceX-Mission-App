import React from 'react';
import FilterButton from './FilterButton';

function LaunchFilter({ launch, setLaunch }) {
    return (
        <div className="filterSubContainer">
            <div className="filterSubHeading">Successful Launch</div>
            <hr />
            <div className="filterGrid">
                <FilterButton active={launch?.toString() === "true"} onSelect={() => setLaunch(true)} text='True' />
                <FilterButton active={launch?.toString() === "false"} onSelect={() => setLaunch(false)} text='False' />
            </div>
        </div>
    );
}

export default LaunchFilter;
