import React,{useEffect,useState} from 'react'
import Newsitem from './Newsitem';
import Spinner from './spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


const News=(props)=> {
  const [articales,setarticales]=useState([])
  const [loading,setloading]=useState(true)
  const [page,setpage]=useState(1)
  const [totalResults,settotalResults]=useState(0)


  

 const capitalizeFirstLetter = (str)=> {

  // converting first letter to uppercase
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

  return capitalized;
}
  
 const updatenew = async()=>{
  props.setProgress(10);
  console.log("pre");
  const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.Apikey}&page=${page}&pagesize=${props.pagesize}`
 
  setloading(true)

  let data= await fetch(url);
  props.setProgress(30);
  let parsedData=await data.json()
  props.setProgress(70);
  console.log(parsedData); 

  setarticales(parsedData.articles)
  settotalResults(parsedData.totalResults)
  setloading(false)
 
props.setProgress(100);
 }

 useEffect(()=>{
  document.title=`${capitalizeFirstLetter(props.category)}-OBNews`
updatenew();
//eslint-disable-next-line
 },[])

//  async componentDidMount(){
//   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9e310f44e5c745eeb55f9266cfc99f41&page=1&pagesize=${props.pagesize}`
//   this.setState({loading:true})
//   let data= await fetch(url);
//   let parsedData=await data.json()
  
//  this.setState({articales:parsedData.articles,
//   totalResults:parsedData.totalResults,
//   loading:false})
// this.updatenew()
//  }

 const fetchMoreData = async () => {
  
  
   const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.Apikey}&page=${page+1}&pagesize=${props.pagesize}`
   setpage(page+1)
  // this.setState({loading:true})
  setloading(true)
  let data= await fetch(url);
  let parsedData=await data.json()
  console.log(parsedData); 
  setarticales(articales.concat(parsedData.articles))
  settotalResults(0)
  setloading(false)

}; 
//  handelpreviuos=async ()=>{
// console.log("pre");
  // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9e310f44e5c745eeb55f9266cfc99f41&page=${this.state.page-1}&pagesize=${props.pagesize}`
  // this.setState({loading:true})
  // let data= await fetch(url);
  // let parsedData=await data.json()
  // console.log(parsedData); 
  // this.setState({
  //   page:this.state.page-1,
  //   articales:parsedData.articles,
  //   loading:false

  // })

//   this.setState({page:this.state.page-1})
//   this.updatenew()
// }

//  handelnext=async ()=>{
  // if(!(this.state.page+1 > Math.ceil(this.state.totalResults/props.pagesize))){
  // console.log("next");
  //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9e310f44e5c745eeb55f9266cfc99f41&page=${this.state.page+1}&pagesize=${props.pagesize}`
  //   this.setState({loading:true})
  // let data= await fetch(url);
  // let parsedData=await data.json()
  // console.log(parsedData); 
  // this.setState({
  //   page:this.state.page+1,
  //   articales:parsedData.articles,
  //   loading:false
  // })
//   this.setState({page:this.state.page+1})
//   this.updatenew()
// }
 
  
    return (
      <>
       
       <h2 className="text-center" style={{margin:'70px'}}>OBNews-Top  {capitalizeFirstLetter(props.category)} Headlines </h2>
       {loading&&<Spinner/>}
       <InfiniteScroll
    dataLength={articales.length}
    
    hasMore={articales.length !== totalResults}
    loader={<Spinner/>}
    next={fetchMoreData}
    
  >
       <div className="container">

        <div className="row">
         {/* {!this.state.loading && this.state.articales.map((element)=>{
           return ( <div className="col-md-4" key={element.url}>
           <Newsitem key={element.url} title={element.title?element.title:""} description={element.description?element.description:""} imageurl={element.urlToImage}author={element.author} date={element.publishedAt} source={element.source.name} newsUrl={element.url}/>
           </div>)
          })} */}
         

         {articales.map((element)=>{
           return ( <div className="col-md-4" key={element.url}>
              <Newsitem key={element.url} title={element.title?element.title:""} description={element.description?element.description:""} imageurl={element.urlToImage}author={element.author} date={element.publishedAt} source={element.source.name} newsUrl={element.url}/>
                 </div>)
         })}
         </div>
         

         </div>
        </InfiniteScroll>
        <div className="contained  d-flex justify-content-between">
          
        {/* <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handelpreviuos}>&larr;Previous</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/props.pagesize) }type="button" className="btn btn-primary"onClick={this.handelnext}>Next&rarr;</button> */}
        
        </div>
        
    
        </>
    )
  

}
 News.defaultProps={
    country:'in',
    pagesize:8,
    category:'general'
  }
  News.propTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string
  }

export default News
