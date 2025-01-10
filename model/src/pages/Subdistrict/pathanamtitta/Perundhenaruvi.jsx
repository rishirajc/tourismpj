import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import pat from '/src/pages/Subdistrict/pathanamtitta/image/perundh.png'

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
const IMGG=styled.div`
    width: 100%;
   height:300px;
    background-color: #eb8d13;
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
  
`

const Perundhenaruvi = () => {
  return (
    <div>
    <div>
        <img width={"100%"} height={"600px"} src="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Flarge-desktop%2Fperunthenaruvi-1724652450_1a3a53cf90edffd5662f.webp&w=1920&q=75" alt="" />
    </div>
    <h1 style={{backgroundColor:"lightgreen"}}>About Perunthenaruvi Falls</h1>
    <p>Perunthenaruvi Waterfalls (Malayalam: പെരുന്തേനരുവി) are waterfalls 36 km (22 mi) from Pathanamthitta in Pathanamthitta District, Central Travancore region, Kerala State, India. It is a popular tourist destination situated in Vechoochira Panchayat of Ranni taluk. The one shore of this waterfall is Kudamurutty and Vechoochira is the other. The main route to this waterfall starts from Ranni - Athikkayam - Kudamurutty - Perunthenaruvi.</p>
    <p><h3>Etymology</h3>
    The name Perunthenaruvi derived from the two Malayalam words Perunthen (great honey) and aruvi (stream).</p>
<p>Perunthenaruvi, a hidden treasure in the enchanting forests of Sabarimala in Pathanamthitta district, is a captivating destination brimming with natural wonders. This lesser-known gem is renowned for its mystical woods, meandering streams, and stunning waterfalls, making it a perfect retreat for those seeking solace and adventure amidst nature.

Located in a region celebrated as one of South India's major pilgrimage centers, Perunthenaruvi enchants visitors with its picturesque waterfalls and the shimmering stream that gracefully merges with the sacred Pamba River. The area is aptly named "River of Honey" due to the abundance of beehives that adorn its surroundings, adding to the area's charm and allure.

The serenity of Perunthenaruvi offers a unique opportunity to connect deeply with nature, providing a peaceful sanctuary where you can rejuvenate your spirit. Visitors can opt for a short 5-minute walk or a more immersive 20-minute trek through lush tea plantations to reach the mesmerizing waterfalls. From a distance, the melodious sound of cascading water invites you to experience its beauty up close.

The trek culminates at a magnificent waterfall that spills into a lush swimming hole, inviting you to dive into its cool, crystal-clear waters. Beyond the falls, the stream continues its journey over a rocky bed before converging with the sacred Pamba River, revered for its divine significance due to its proximity to the famed Sabarimala pilgrimage site.

Perunthenaruvi, perched on the majestic Western Ghats, is embraced by dense, verdant forests that enhance its serene beauty. The waterfall itself is divided into two stunning cascades: the impressive 300-foot Panamkudantha and the graceful 200-foot Padivathil, both originating from the rich woods of Sabarimala.

With its breathtaking natural scenery and tranquil environment, Perunthenaruvi is the ultimate destination to unwind and recharge. Whether you're drawn by the allure of its majestic waterfalls, the peaceful ambiance of its lush surroundings, or the chance to reconnect with nature, this enchanting locale offers an unforgettable experience that promises to soothe and inspire.</p>


<h2 style={{backgroundColor:"lightgreen"}}>HOW TO REACH:</h2>
   <div style={{width:"100%",height:'300px',display:'flex',alignItems:"center",justifyContent:"space-around",flexWrap:"wrap"}}>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p><h3>By Air </h3>
    Trivandrum International Airport, about 138 km</p> </div>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p><h3>By Train </h3>
    Thiruvalla Railway Station, about 44 km</p> </div>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p> <h3>By Road</h3>
    Ranni, about 12 km away</p> </div>
   </div>



<div style={{fontSize:"30px",color:"red",marginBottom:"10px"}}>
<marquee behavior="scroll" width="100%" scrollamount="5" direction="right" >CHECK YOUR TICKET ONLINE(click here)</marquee>
</div>
<Link to={'/ticket'}> <button style={{backgroundColor:"green",marginLeft:"50px"}} >click here</button></Link>

<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<IMGBOX>
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9YSNNNQh_t4aj7XUSJ3NNfAPQpS-X8AWiyQ&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://c8.alamy.com/comp/H06X0P/morning-hues-at-perunthenaruvi-waterfalls-on-the-banks-of-the-pamba-H06X0P.jpg" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZhd63W5C9N-zPELaFVHLUuI0x17kaibsSA&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fmobile%2Fperunthenaruvi-1724652477_a8a2e6f7da77f2ad49ef.webp&w=3840&q=75" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB7aeS6Tku7jUsaoXY2Uja8EZS9imBz_dnUQ&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjTJcb4AzC6rzBLyTp2JzAMPCbIkgvXe8wQ&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://i.ytimg.com/vi/Vgae641NOWw/maxresdefault.jpg" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmtdMXycW7Uhx9pYShWBFTNtHgI0VuB7_q3Q&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf1WKKdj9AlODyTTqUBT-ZP5VRjgoWCUKIpw&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmcj-y73A7N4b3W8DazDOfccwDq4r1hq_Jaw&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://3.imimg.com/data3/WR/SD/MY-16546359/perunthenaruvi-falls.jpg" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJWXwfq9ZntH4J12XumtfUCzfRFVmx5COeNw&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2B4qRWw2LGJCZf47IYMMMuVbH9nxCWP3Z1g&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://cdn.tripuntold.com/media/photos/location/2018/07/28/37fff4fa-121c-4480-8112-37c36eadfc4f.jpg" alt="" />

</IMGBOX>

<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<div>

</div>
<h1 style={{backgroundColor:"lightgreen"}}>ROUTE MAP</h1>

<IMG><img src={pat}  width={'400px'} height={'400px'} alt="" /></IMG>
<a href="https://maps.app.goo.gl/p3oyozenxoEyxVGt5">CLICK TO REVIEW MAP</a>





<h1 style={{backgroundColor:"lightgreen"}}>POPULAR RESORT NEARBY</h1>

<IMGG>

   <div><h3>
   Mountain Mist Resort </h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202303261246423005-c2451aa4cba611edbc6e0a58a9feac02.jpg" alt="" />
</div>
<a href="http://mountainmistresort.com/cgi-sys/defaultwebpage.cgi">click to view</a>
</div>


<div><h3>Noah's Nest Tree Houses </h3>
<div>
    <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaa1IkabNpl18fPPuVYs1BOH9Kten_F_w-9g&s" alt="" />
</div>
<a href="https://morleysplace.com/">click to view</a>
</div>


   <div><h3>
  
   Green Veil Cottages</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/6f/24/5d/green-veil-cottages.jpg?w=700&h=-1&s=1" alt="" />
</div>
<a href="https://serviettehotels.com/property/green-veil-cottages-parunthumpara/">click to view</a>
</div>


   <div><h3>Gairah Resort </h3>
<div>
    <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/521778740.jpg?k=060a81fdd28e76c3ecefff10e8ae45d6b949b5a18b9d9f08545860917b4d8dd1&o=&hp=1" alt="" />
</div>
<a href="https://gairahresorts.com/">click to view</a>
</div>

</IMGG>




<FOOT>
<h2>contact us for more info 9656756476</h2>
<h4>tourismkerala@gmail.com</h4>

</FOOT>

</div>
  )
}

export default Perundhenaruvi
