import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import bol from '/src/pages/Subdistrict/kochi/image/cherai.png'

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
const Cheraibeach = () => {
    useEffect(()=>{
    
        window.scrollTo(0, 0);
      },[])
  return (
    <div>
    <div>
        <img width={"100%"} height={"600px"} src="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Flarge-desktop%2Fcherai-beach-1721745007_1d8a58d8591d264926a7.webp&w=1920&q=75" alt="" />
    </div>
    <h1 style={{backgroundColor:"lightgreen"}}>About Cherai Beach</h1>
    <p>Around 26 kms from the city, towards the north of the Vypeen islands lies Cherai Beach, a true swimmer’s paradise. A pristine canvas where nature weaves its magic through golden sands, azure waters and lush greenery, Cherai Beach is widely considered to be a gem in the crown of Kerala’s coastal treasures. 

The road to the beach is flanked by low lying paddy fields on both sides which makes it a delightful drive. Pristine white sands, waters ideal for a relaxing swim and a vivacious ambiance are the hallmarks of this destination. Dolphin sightings are common here, so the beach is a haunt for nature lovers.  The seashells found here are different and much sought after by visitors. Another highlight of the area is the Chinese fishing nets that are a common sight here. Also called China Vala, these fishing nets and their mechanism have intrigued visitors for years. The areas surrounding the beach are filled with street vendors who sell the best of local trinkets as well as the local street food. The plethora of homestays and resorts in the area ensures that you have enough and more options to choose from when it comes to accommodation needs. 

While on a visit to Cherai, to experience the best of the destination be sure to sample the local cuisine. The flavours of Kerala’s coastal cuisine are a tantalising blend of aromatic spices, fresh local seafood and tropical fruits. Be it the succulent tiger prawns grilled to perfection and drizzled with zesty lime and fragrant coconut or the mouthwatering fish curries that simmer in rich, creamy coconut milk that has been infused with the fiery heat of local spices, every bit of Kerala cuisine is a trip of a lifetime for food lovers. Every culinary creation is made with passion and the best ingredients that are all sourced locally. </p>
    <p>Cherai Beach is located in Cherai in the northern side of Vypin Island, a suburb of the city Kochi in the state of Kerala, India. One of the most visited beaches in the state, it is situated at around 25 km (15 mi) from downtown Kochi and 20 km (12 mi) from Cochin International Airport.[</p>
    
<p> <h3>Tourism</h3>
The beach is around 10 km long and is ideal for swimming as the tide is mostly low and the waves are gentle. It is known for frequent dolphin sightings. It is one of the few places where the backwaters and the sea can be seen in a single frame.[2] Cherai Beach offers a less busier and cleaner option accessible from Kochi and always attract the tourists from all over the world.</p>




<h2 style={{backgroundColor:"lightgreen"}}>HOW TO REACH:</h2>
   <div style={{width:"100%",height:'300px',display:'flex',alignItems:"center",justifyContent:"space-around",flexWrap:"wrap"}}>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p><h3>By Air </h3>
    Cochin International Airport, about 27 km away.</p> </div>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p><h3>By Train </h3>
    Aluva Railway Station, about 23 km away | Ernakulam South Railway Station, about 29 km away.</p> </div>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p> <h3>By Road</h3>
    Cherai Junction Bus Stop, about 2 km away</p> </div>
   </div>



<div style={{fontSize:"30px",color:"red",marginBottom:"10px"}}>
<marquee behavior="scroll" width="100%" scrollamount="5" direction="right" >CHECK YOUR TICKET ONLINE(click here)</marquee>
</div>
<Link to={'/ticket'}> <button style={{backgroundColor:"green",marginLeft:"50px"}} >click here</button></Link>

<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<IMGBOX>

<img width={'200px'} height={'200px'}   src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/20/44/7f/cherai-beach.jpg?w=900&h=500&s=1" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzqM5YT_QFfqgEWP1fDeZHfTGZR2kFFWn1Bw&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://i.ytimg.com/vi/54_Dbpy49vs/hqdefault.jpg" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpZRMGHixA9zHPcCFZzPH8SRjmIYn8TrRw0A&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4iRRUp0Gx-W1QelQ5HC6UaQJ5beaiQoCkpQ&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2F1720862666515_Cherai%20Beach%201.jpg&w=3840&q=75" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1KoImLaasE0ItBUpmGVZQdX-_FHbCdWKobg&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8rr2UqKhNet_SjQnyl_LUJE5VKeT2r7kA0g&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN-Xwk-I8aTsQwALfry5v4O8zBO2cQq-rBtw&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpRNTOBTbWBSIFgnu8h8GfpX6eNS8ipx_onQ&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY7LT57zGl9RXd6d1xwhUQ-3OhsuNLA2z47g&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpXZIJVz0XAj0S8RPuh4yQcHN4syK4RagpDw&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKCcI-ily6TbuuakM4cvRkB5wAJy-AvH5-w&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQH_V847ItEl4zyghs8ox1GXzvCN6NMoB8kw&s" alt="" />

</IMGBOX>

<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<div>

</div>
<h1 style={{backgroundColor:"lightgreen"}}>ROUTE MAP</h1>

<IMG><img src={bol} width={'400px'} height={'400px'} alt="" /></IMG>
<a href="https://maps.app.goo.gl/p3oyozenxoEyxVGt5">CLICK TO REVIEW MAP</a>





<h1 style={{backgroundColor:"lightgreen"}}>POPULAR RESORT NEARBY</h1>

<IMGG>

   <div><h3>
   Cherai Beach Resorts</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2LZiSuzUzSBZc1WViKL2C3BcTNjFwgAScjw&s" alt="" />
</div>
<a href="https://www.cheraibeachresorts.com/">click to view</a>
</div>


   <div>
<h3>SEALAGOON HEALTH RESORT</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaHHPE8bq4bV8iOsGyrldrRXLCDnf72OYu9Q&s" alt="" />
</div>
<a href="https://sealagoonhealthresort.com/">click to view</a>
</div>


   <div><h3>
  
   Cherai Blue Lagoon Beach Resort</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvgOZOg0323XwofGOdRcpVpjFfJIPlbJOg7g&s" alt="" />
</div>
<a href="https://www.tripadvisor.in/Hotel_Review-g12445148-d20251171-Reviews-Cherai_Blue_Lagoon-Pallipuram_Alappuzha_District_Kerala.html">click to view</a>
</div>


   <div><h3>Cherai Ocean View Home</h3>
<div>
    <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78Kko2_w2I68z25bPIHNddEpgK9UHlsTdhA&s" alt="" />
</div>
<a href="https://www.bluepillow.com/search?p_id=589e00de7c00cb10c8dafb07&dest=bkng&cat=House&accomodationids=594387517c00cb0e6433f760">click to view</a>
</div>

</IMGG>




<FOOT>
<h2>contact us for more info 9656756476</h2>
<h4>tourismkerala@gmail.com</h4>

</FOOT>

</div>
  )
}

export default Cheraibeach
