import React, { useState } from 'react';
import BrowseCard from '../components/BrowseCard';

import { useQuery } from '@apollo/client';
import { QUERY_ITEMS, QUERY_CAT_ITEMS } from '../utils/queries';
// import {  } from '../utils/queries';

export default function Browse() {

    const { loading, data } = useQuery(QUERY_ITEMS)
    let allItems = data?.items || {};
    console.log(allItems)

    const [categoryState, setCategoryState] = useState({
        category_name: 'dairy',
      });
    
      const { categoryData } = useQuery(QUERY_CAT_ITEMS, {
        variables: { category_name: "dairy" },
    })

    console.log(categoryData);


    const categoryChange = (event) => {
        // const { name, value } = event.target;

        // setCategoryState({
        // ...categoryState,
        // [name]: value,
        // });
    };

    if(loading) {
        return <div>Loading...</div>
    }
    

    const filterCategory = (event) => {
        event.preventDefault();

        console.log(categoryState.category_name)
        console.log(categoryData)

        let allItems = categoryData?.items || {};
        console.log("NEW ITEMS")
        console.log(allItems)
    
    }

    return (
        <div id="browse-background">
            <div className="browse-container">
                <div className="form-container">
                    <form className="browse-form" onSubmit={filterCategory}>
                        {/* {{!-- <label for="item-categories"><h4 id="browse-cat" className="browse-cat">Browse by Category</h4></label> --}} */}
                        <select id="item-categories" className="browse-cat" name="category_name" value={categoryState.category_name} onChange={categoryChange}>
                            <option value="" disabled selected>Choose a Category</option>
                            <option value="fruits" data-id="1">Fruits</option>
                            <option value="vegetables"data-id="2">Vegetables</option>
                            <option value="herbs" data-id="3">Herbs</option>
                            <option value="dairy" data-id="4">Dairy</option>
                            <option value="flowers" data-id="5">Flowers</option>
                        </select>
                        <button id="browse-cat-btn" type="submit" className="btn browse-cat">FILTER</button>
                    </form>
        
                {/* {{!-- Add in an IF statement to render a heading for the category when a category is selected?? --}} */}
        
                </div>
                <div className="browse-items">
                    <BrowseCard data = {allItems} />
                    {/* {{#each items as |item|}}
                        {{>browsecard}}
                    {{/each}} */}
                </div>
            </div>
        </div>
    
    )
}