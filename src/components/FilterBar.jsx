import { useState } from "react";

function FilterBar({ filter, setFilter }) {
    return (
        <div className="filter-bar">

            <button onClick={() => setFilter("all")}>
                all
            </button>

            <button onClick={() => setFilter("active")}>
                active
            </button>

            <button onClick={() => setFilter("completed")}>
                completed
            </button>
        </div>
    );
}


export default FilterBar;