import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ada from '/src/pages/Subdistrict/malappuram/image/adayan.png'

const IMGBOX=styled.div`
width: 100%;
height: 600px;
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;

`
const IMG=styled.div`
width: 400px;
height: 400px;
background-color: antiquewhite;
border-radius: 14px;
box-shadow: 1px 1px 20px rgb(202, 189, 189);

`
const FOOT=styled.div`
    width: 100%;
    height: 117px;
    background-color: antiquewhite;
    padding-top: 254px;
`
const Adayan= () => {
  return (
    <div>
    <div>
        <img width={"100%"} height={"600px"} src="https://www.keralatourism.org/_next/image/?url=https%3A%2F%2Fik.imagekit.io%2Fxsnlqng4k%2FYoutubeImages%2Ftr%3Aw-1920%2Ch-1080%2Fvi%2FnHSqbTt5_cw%2Fmaxresdefault.jpg&w=1920&q=75" alt="" />
    </div>
    <h1 style={{backgroundColor:"lightgreen"}}>About Adyanpara Falls</h1>
    <p>Adyanpara Falls is a cascading waterfall in the Kurmbalangodu village of Nilambur taluk in Kerala, India. It is 14 kilometres (8.7 mi) from Nilambur town, and attracts tourists from various parts of Kerala.[citation needed] This is a seasonal waterfall. During Summer, water flow is low.[1] This waterfall is of a natural cascading style as the waterfall descends over the rock.[2] Adyanpara Weir is situated near to this falls.</p>
    <p>Adyanpara Falls, atop high cliffs and surrounded by lush, green forests, is a beautiful cascading waterfall in Kurumbalangodu, a small village located near Nilambur in the northern district of Malappuram in Kerala. The falls are seasonal, with the water flow relatively low during the sweltering summer months, revealing the rocks beneath. During the monsoons, they come alive with thunderous water descending in a cascade, creating a mesmerising spectacle. 

For travellers exploring Malappuram district, Adyanpara, easily accessible by road, is a perfect picnic spot.

<h3>Swimming and bird-watching </h3>
The waters at the bottom of the falls are clean and pure, and are considered to have medicinal properties. One only needs to be a little cautious of the slippery rocks of the river bed, if taking a refreshing swim. The lovely forests rich in flora and fauna attract a wide variety of exotic and migratory birds, making the falls a draw for Nature lovers and bird watchers. 

<h3>Adyanpara Weir </h3>
Near the falls, you will find the Adyanpara Weir. The weir (low dam built across a river to raise the level of water upstream or regulate its flow) is constructed across the Kanjirapuzha stream, a tributary of River Chaliyar, also known as Nilambur River or Beypore puzha. The Chaliyar river is the fourth longest river in Kerala. 

The 3.5-megawatt power plant set up here is part of the Adyanpara Small Hydro Electric Project (SHEP) of the State. The Kerala State Electricity Board arranges conducted tours here for tourists to have a ringside view of the process of electricity generation at the plant. The lush, natural surroundings of the weir make for an added delight for tourists.

Close to the Adyanpara Falls are a number of interesting tourist spots. The Nilambur Teak Museum, the world’s first teak museum, is four kilometres away from town, along the Gudalur Highway. Other nearby attractions include the Conolly Plot, where the oldest manmade teak plantation is located, the Kadalundi Bird Sanctuary, the Nedumkayam rainforest, the Thirumandhamkunnu Temple as well as the Elembalai Hills and the Banglavu Kunnu, two beautiful hilly spots</p>
 
 
<h2 style={{backgroundColor:"lightgreen"}}>HOW TO REACH:</h2>
   <div style={{width:"100%",height:'300px',display:'flex',alignItems:"center",justifyContent:"space-around",flexWrap:"wrap"}}>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p><h3>By Air </h3>
    Calicut International Airport, around 60 km away.</p> </div>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p><h3>By Train </h3>
    Nilambur Railway Station, around 16 km away</p> </div>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p> <h3>By Road</h3>
    Nilambur Bus Stand, about 15 km away.</p> </div>
   </div>


<div style={{fontSize:"30px",color:"red",marginBottom:"10px"}}>
<marquee behavior="scroll" width="100%" scrollamount="5" direction="right" >CHECK YOUR TICKET ONLINE(click here)</marquee>
</div>
<Link to={'/ticket'}> <button style={{backgroundColor:"green",marginLeft:"50px"}} >click here</button></Link>


<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<IMGBOX>
<img  width={'200px'} height={'200px'}  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/4b/9f/07/adyanpara-waterfalls.jpg?w=1200&h=-1&s=1" alt="" />
<img  width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAPX13C8L6KJI_htWOt0VmahsEYNOQ7vN0qw&s" alt="" />
<img  width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ41Kz1WUfJv3EtjvTX65e_V8xktKD9DIEKHA&s" alt="" />
<img  width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg2jvSdNc5CBKZ5hFKnTEskjMIZDRE1GN-CQ&s" alt="" />
<img  width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGTJRKKjNJ5C6MlpjIipVLNfdzJLXGiJUVow&s" alt="" />
<img  width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsdNFRYR01H5k-ADEysSM5Dfh4zVOBldMYRA&s" alt="" />
<img  width={'200px'} height={'200px'}  src="https://www.trodly.com/image/attraction/size-400x400/mode-crop/2242.jpg" alt="" />
<img  width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-nb5MEVOyUPRhOLMvwBYPHl68BJNmzJIHw&s" alt="" />
<img  width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhJBoOz3Lx_50N-OEWC7c9iS6UyRqUG6vtdw&s" alt="" />
<img  width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNfXR3JQtuiT6JIwXmF4CboovWgbEp6JoKaQ&s" alt="" />
<img  width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZLD3Lh4yKTkLsLgbtM-1eYW86jn_u09NRMw&s" alt="" />
<img  width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnbflDpFOlFXBXIfbliESLkksSCh9B0c-d5Ipb0yp78A5Abgz6BqLke6Y3sICP1e3yNEA&usqp=CAU" alt="" />
<img  width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw1rZQF3sngI-yckHF4Mh5a6GPydsxFArgYy1K9LAjh5IwG3Obmz5I7wekVM5MIPX0uNA&usqp=CAU" alt="" />
<img  width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVTrd3msRf_bAVkmimsM_s2GDzwXZkGi27BQ&s" alt="" />
</IMGBOX>
<h1 style={{backgroundColor:"lightgreen"}}>ROUTE MAP</h1>

<IMG><img src={ada} width={"400px"} height={"400px"} alt="" /></IMG>
<a href="https://maps.app.goo.gl/xkApB5mYBxcXLf4FA">CLICK TO REVIEW MAP</a>


<h1 style={{backgroundColor:"lightgreen"}}>POPULAR RESORT NEARBY</h1>

<div  style={{width:"100%",height:"300px",backgroundColor:"red",display:'flex',alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",paddingLeft:"25px",}}>
<div><h3>Kairali Resort </h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/37/7b/ab/we-are-located-at-kakkadampoyi.jpg?w=700&h=-1&s=1" alt="" />
</div>
<a href="https://kairaliresort.com/">click to view</a>
</div>


   <div>
<h3>Rockdale Resort </h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/504959501.jpg?k=53794e5e559a73f004274bb15923ce10dadb192f39a75debaece87a6541bc2d8&o=&hp=1" alt="" />
</div>
<a href="https://www.makemytrip.com/hotels/rockdale_resort-details-nilambur.html">click to view</a>
</div>


   <div><h3>
  
   Clouds End Resort 
</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/375489798.jpg?k=8f2d5d29846fd83906333d578c81ef2efb93e54b46c31ae873ee6f51977bf6b7&o=&hp=1" alt="" />
</div>
<a href="https://cloudsendresort.com/">click to view</a>
</div>


   <div><h3>Hill Ranches Resorts </h3>
<div>
    <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYO5jQLr4oZ6aY0Q20IlEM_m91LW3_fT6oA&s" alt="" />
</div>
<a href="https://www.thehillranches.com/">click to view</a>
</div>

</div>







<FOOT>
<h2>contact us for more info 9656756476</h2>
<h4>tourismkerala@gmail.com</h4>

</FOOT>

</div>
  )
}

export default Adayan
