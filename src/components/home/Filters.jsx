import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getProductCategories } from "../../store/slices/categories.slice";
import { getAllProducts } from "../../store/slices/products.slice";
import './Filters.css'

const Filters = () => {
    const { register, handleSubmit } = useForm();

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(getProductCategories());
    }, [dispatch]);

    const selectPrice = (data) => {
        dispatch(getAllProducts({ priceFrom: data.priceFrom, priceTo: data.priceTo }))
    }
    
    return (
        <div className='filters'>
            <div className="filter-item">
                <div className="header">
                    <span>Price</span>
                </div>
                <div className="content">
                    <form className="price-filter" onSubmit={handleSubmit(selectPrice)}>
                        <label>
                            <span>From</span>
                            <input type="number" {...register("priceFrom")} />
                        </label>
                        <label>
                            <span>To</span>
                            <input type="number" {...register("priceTo")} />
                        </label>
                        <button type='submit'>
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