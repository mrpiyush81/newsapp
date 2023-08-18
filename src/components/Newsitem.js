import React from 'react'


const Newsitem=(props)=>  {
  
  
    let {title,description,imageurl, newsUrl,author,date,source}=props;
  
    return (
      <div className='my-3'>
        <div className="card" >
  <img src={!imageurl?"https://techcrunch.com/wp-content/uploads/2023/02/psvr2-header.jpg?resize=1200,706":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <div style={{display:'flex',
    justifyContent:'flex-start',
  position:'absolute',top:'0',right:'0',margin:'2px'}}>

    <span className=" badge rounded-pill bg-danger" >
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
    </div>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">by{!author?"Unknow":author} on {new Date (date).toGMTString()}</small></p>
    <a  rel="noreferrer"  href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  
}

export default Newsitem
