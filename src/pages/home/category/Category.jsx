import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../newsCard/NewsCard';

const Category = () => {

    const categroyNews = useLoaderData();
    const {id} = useParams();
    


    return (
        <div>
            { id && <h1>This category has  {categroyNews.length} news</h1>}
            {
                categroyNews.map(( news, index) => <NewsCard
                key={index+1}
                news={news}
                >
                </NewsCard>)
            }
        </div>
    );
};

export default Category;