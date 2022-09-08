import React, { useState } from "react";
import './Filters.css'

const Filters = () => {
    const [priceFrom, setPriceFrom] = useState();
    const [priceTo, setPriceTo] = useState();

    const selectPrice = () => {

    }
    
    return (
        <div className='filters'>
            <div className="filter-item">
                <div className="header">
                    <span>Price</span>
                </div>
                <div className="content">
                    <form className="price-filter" onSubmit={selectPrice}>
                        <label>
                            <span>From</span>
                            <input type="number" value={priceFrom} onChange={e => setPriceFrom(e.target.value)} />
                        </label>
                        <label>
                            <span>To</span>
                            <input type="number" value={priceTo} onChange={e => setPriceTo(e.target.value)} />
                        </label>
                        <button>
                            Filter price
                        </button>
                    </form>
                </div>
            </div>
            <div className="filter-item">
                <div className="header">
                    <span>Category</span>
                </div>
                <div className="content">
                    <ul className="category-filter">
                        <li>
                            <button>TVs</button>
                        </li>
                        <li>
                            <button>Laptops</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Filters;