import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories,setCategories] = useState([]);
    useEffect(() => {
    
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(er => console.log(er))
      

    },[])
    return (
        <div>
            <h1>All Categories</h1>
           <div className='ps-5'>

           {
                categories.map(category => <p key={category.id}>
                   <Link to={`/category/${category.id}`} className='text-secondary text-decoration-none' >{category.name}</Link>
                </p>)
            }
           </div>
        </div>
    );
};

export default LeftNav;