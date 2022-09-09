import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductCategories } from "../../store/slices/categories.slice";
import { getAllProducts } from "../../store/slices/products.slice";
import './Filters.css'

const Filters = () => {
    const [priceFrom, setPriceFrom] = useState();
    const [priceTo, setPriceTo] = useState();

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(getProductCategories());
    }, [dispatch]);

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
                        {
                            categories?.map(cat => {
                                return (
                                    <li key={cat.id}><button onClick={() => dispatch(getAllProducts({ category: cat.id }))}>{cat.name}</button></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Filters;