import React, { useEffect } from 'react'
import { useState } from 'react'
import NewsItems from '../newsItems/NewsItems';

function NewsBoard({category}) {
  const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true); 


  useEffect(()=>{

     setLoading(true);

    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`

      fetch(url)
    .then(response => response.json())
    .then(data => {
      setArticles(data.articles);
      setLoading(false); 
    })
    .catch(error => {
      console.error('Error fetching news:', error);
      setLoading(false); 
    });
  },[category])

   

  return (


  <>
    <h2 className='my-3 fw-bold'>Latest <span className='badge  bg-danger text-white'>News</span></h2>

    {loading?(

      <div className="d-flex justify-content-center align-items-center " style={{ height: "70vh" }}>
          <div className="spinner-border text-primary " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (

    
      articles.map((news,index)=>(
        <NewsItems key={index} title={news.title} description={news.description} imageUrl={news.urlToImage} content={news.content} author={news.author} url={news.url} />
      ))
    

  )}
  </>
  );
}

export default NewsBoard
