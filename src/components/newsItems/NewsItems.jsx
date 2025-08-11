    import React from 'react'
    import image from "../../assets/images.png"

    function NewsItems({title, description, imageUrl, content, author, url}) {
    return (
        <>  
        <div className="card bg-dark text-align mb-3 text-white d-inline-block p-2 mx-3 my-3 " style={{maxWidth:"345px"}}>
    <img src={imageUrl?imageUrl:image} className="card-img-top" alt={title} style={{height:"180px", width:"320px"}}/>
    <div className="card-body">
        <h5 className="card-title">{title?title.slice(0,15):"No Title Available"} ...</h5>
        <p className="card-text">{description?description.slice(0,30):"No description is available  "} ...</p>
        <a href={url} className="btn btn-primary">Read More..</a>
    </div>
    </div>
        </>
    )
    }

    export default NewsItems
