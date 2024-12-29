import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const IMGBOX=styled.div`
width: 100%;
height: 600px;
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;

`

const IMG=styled.div`
width: 600px;
height: 600px;
background-color: antiquewhite;

`
const FOOT=styled.div`
    width: 100%;
    height: 117px;
    background-color: antiquewhite;
    padding-top: 254px;
`
const Smstreet = () => {
  return (
    <div>
    <div>
        <img width={"100%"} height={"600px"} src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/72/96/b5/img-20180903-151209-largejpg.jpg?w=1200&h=-1&s=1" alt="" />
    </div>
    <h1 style={{backgroundColor:"lightgreen"}}>About S. M. Street</h1>
  <p>S.M. Street, abbreviation for Sweetmeat Street, also known as Mittai Theruvu, is a shopping street located in Kozhikode, Kerala, India. The street is a pedestrian zone. It also has a 160 year old fire temple amidst shopping places.

<h3>History</h3>
The history of S. M. Street dates back to time of the Zamorin when the ruler invited Gujarati sweetmeat makers to set up shop in the city and accommodated their shops just outside the palace walls.[1]

<h3>About the name</h3>
S. M. Street Street derives its name from the time it was lined with sweetmeat and halvah stalls. Its Malayalam name is Mittai Theruvu.

<h3>Renovation of S. M. Street</h3>
In May 2017, as part of the first phase of the S. M. Street beautification project, an amount of Rs. 3.64 crore was allocated. As part of the renovation, overhead power supply lines were removed and lamp posts were placed across the sides of the street.[2] Chief Minister Pinarayi Vijayan formally opened the renovated S. M. Street on 23 December 2017.[3]

<h3>In popular culture</h3>
S. M. Street is the subject of the Kerala Sahitya Akademi Award-winning book Oru Theruvinte Katha by S. K. Pottekkatt. The statue of S. K. Pottekkatt, stands facing the street.</p>


<div style={{fontSize:"30px",color:"red",marginBottom:"10px"}}>
<marquee behavior="scroll" width="100%" scrollamount="5" direction="right" >CHECK YOUR TICKET ONLINE(click here)</marquee>
</div>
<Link to={'/ticket'}> <button style={{backgroundColor:"green",marginLeft:"50px"}} >click here</button></Link>


<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<IMGBOX>
<img width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9AbjWk5f9Ap34FFjKiTFitc7i_-RhJLWtWg&s" alt="" />
<img width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIh04PJ_bA7HE8LP9EDcYO3f88VjOUhUWmyg&s" alt="" />
<img width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpzAeizSmhkcg_zAJSc3SIs66P-OLVzvlioQ&s" alt="" />
<img width={'200px'} height={'200px'}  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/72/96/b5/img-20180903-151209-largejpg.jpg?w=1200&h=-1&s=1" alt="" />
<img width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnzEhS4m08hM4bbfHt0zUyur2bPB_HkhA4SA&s" alt="" />
<img width={'200px'} height={'200px'}  src="https://i.ytimg.com/vi/9GMLZAqgtCU/maxresdefault.jpg" alt="" />
<img width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS36LQ644t-D1DoYrh9JY2ytVjgFeiysthcGQ&s" alt="" />
<img width={'200px'} height={'200px'}  src="https://th-i.thgim.com/public/news/cities/kozhikode/8vtrgx/article26657896.ece/alternates/FREE_1200/28-KI-SMSTREET" alt="" />
<img width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq0IQ1YdpsxsT4-oRSmUS9wiSnVW6m2wlQSQ&s" alt="" />
<img width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMrSLLTf_Amm7fPX-4pJVoxa_PwfPTkRcZnQ&s" alt="" />
<img width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTbfLeYzn7j9oNzx5NDUUIsxxGa55UAqFulZUQ2ezeUx_VG5i7fFbpsFtbuA10DNApQg&usqp=CAU" alt="" />
<img width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6r8kT8FckEeJQFuVRPg_rPgkStlwOWCX8Iw&s" alt="" />
<img width={'200px'} height={'200px'}  src="https://pbs.twimg.com/media/D3OTm3nWkAEu5yj.jpg" alt="" />
<img width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkJyKFNHrwjFeaZa22cWR6hBIJ3nRRqNqjlA&s" alt="" />
</IMGBOX>
<h1 style={{backgroundColor:"lightgreen"}}>ROUTE MAP</h1>

<IMG>IMAGE</IMG>
<a href="https://maps.app.goo.gl/BGxMZW2uMdRs98PE8">CLICK TO REVIEW MAP</a>


<h1 style={{backgroundColor:"lightgreen"}}>POPULAR RESORT NEARBY</h1>

<div  style={{width:"100%",height:"300px",backgroundColor:"red",display:'flex',alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",paddingLeft:"25px",}}>

   <div><h3>Nexstay Treats Inn</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/285405621.jpg?k=c12327138455a2120e72f018f6b08da94d3e6b78904a7badf0b5d78ef3f2418b&o=&hp=1" alt="" />
</div>
<a href="https://www.makemytrip.com/hotels/nexstay_treats_inn-details-calicut.html">click to view</a>
</div>


   <div>
<h3>Vasco Da Gama Beach Resort and Spa</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpTG1VscRBoIqL1tgx5OWnCv7w0jZ6kI2BYA&s" alt="" />
</div>
<a href="https://www.vascodagamabeachresort.com/">click to view</a>
</div>


   <div><h3>
  
   Staydium Bungalow Resort</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ39eUhej5DbGhmt7s9T-IfFDqjR75pvDs0Zg&s" alt="" />
</div>
<a href="https://staydium.in/">click to view</a>
</div>


   <div><h3>Miracle Hotel & Resorts</h3>
<div>
    <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://i.ytimg.com/vi/o4dVGkYekfw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAhqDvFYjXDFsPgbggYO2iIDZLGDQ" alt="" />
</div>
<a href="https://miraclehotelandresorts.com/">click to view</a>
</div>

</div>







<FOOT>
<h2>contact us for more info 9656756476</h2>
<h4>tourismkerala@gmail.com</h4>

</FOOT>

</div>
  )
}

export default Smstreet
