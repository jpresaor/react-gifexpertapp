import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// Functional component  - rafcp
const GifExpertApp = () => {

    //const categories = ['One Punch', 'Saurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Dragon Ball']);

    // const handleAdd = () => {
    //     setCategories( [...categories, 'HunterXHunter'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                {
                    categories.map( category => {
                        return <GifGrid 
                                    key= {category}
                                    category = {category} 
                                />
                    })
                }
            </ol>
        </>
    );
}

export default GifExpertApp;
