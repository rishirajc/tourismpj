import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import paz from '/src/pages/Subdistrict/kozikode/image/pazassim.png'

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
const Pazassi = () => {
   useEffect(()=>{
   
       window.scrollTo(0, 0);
     },[])
  return (
    <div>
    <div>
        <img width={"100%"} height={"600px"} src="https://www.archaeology.kerala.gov.in/uploads/monuments/large/Archaeological%20Museum,%20Kozhikode_11062019052950.jpg" alt="" />
    </div>
    <h1 style={{backgroundColor:"lightgreen"}}>About Pazhassi Raja Archaeological Museum</h1>
    <p>Located in Kozhikode, Kerala, the Pazhassi Raja Museum and Art Gallery is a treasure trove of historical artifacts and artworks, offering an insightful journey through the region’s cultural and historical legacy. Named in honor of Pazhassi Raja, the celebrated freedom fighter who resisted British rule, this museum is a must-visit for history enthusiasts, scholars, and art lovers.

The museum commemorates Pazhassi Raja, known as the "Lion of Kerala," who led early uprisings against British colonial forces. His use of guerrilla warfare and alliances with local tribal communities marked a significant chapter in India’s fight for independence. Dedicated to his memory, the museum preserves and narrates the story of this iconic figure and the history of his era.

Visitors can explore a diverse collection of artifacts, including ancient coins, pottery, and bronzes that date back to Kerala’s early civilizations. The museum also houses stone sculptures, inscriptions, and traditional Kerala murals depicting religious themes and historical events. Displays of weaponry, tribal art, and Pazhassi Raja's personal memorabilia add depth to the museum’s exhibits, providing a vivid picture of the region’s martial, artistic, and tribal traditions.

The museum is housed in a charming colonial-era building that blends traditional Kerala and British architectural styles. Surrounded by lush gardens, it offers a serene environment for reflection and learning. Regular workshops, exhibitions, and educational programs further enrich the visitor experience, making the Pazhassi Raja Museum a hub for cultural exploration and historical understanding.</p>
   <p>Pazhassi Raja Archaeological Museum is a museum and art gallery in Kozhikode, Kerala, India. The museum has a rich collection of historical artifacts from 1000 BC to 200 AD.[1]

<h3>History</h3>
The building that houses the museum was constructed in the year 1812[2] and was then known as East Hill Bungalow. The bungalow was converted to an archaeological museum in 1976. In the year 1980, the building was renamed as the Pazhassi Raja Archaeological Museum.[2]

<h3>Collection</h3>
The museum has exhibits from the megalithic age and the Indus Valley civilization. The exhibits include ancient pottery, toys, stone and other metal sculptures. Coins, Models of temples, Burial urns and umbrella stones (tomb stones of rulers) are part of the museums's collection. The museum also has a collection of war weapons used by British soldiers and the official caps of British and French soldiers.

The special collections of the museum include the Panchaloha idols and stone statues described as ‘War heroes'.

<h3>Governance</h3>
The museum is managed by the Kerala State Archaeology Department.[2][3] The Kerala State government had spent Rs.76 lakh for the renovation of the building with further improvements planned.</p>

<div style={{fontSize:"30px",color:"red",marginBottom:"10px"}}>
<marquee behavior="scroll" width="100%" scrollamount="5" direction="right" >CHECK YOUR TICKET ONLINE(click here)</marquee>
</div>
<Link to={'/ticket'}> <button style={{backgroundColor:"green",marginLeft:"50px"}} >click here</button></Link>


<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<IMGBOX>
<img width={'200px'} height={'200px'} src="https://www.keralatourism.org/images/malabar/static-banner/large/Pazhassi_Raja_Museum_and_Art_Gallery-16112019180713.jpg" alt="" />
<img width={'200px'} height={'200px'} src="https://upload.wikimedia.org/wikipedia/commons/8/82/Pazhassi_Raja_Museum.jpg" alt="" />
<img width={'200px'} height={'200px'} src="https://www.archaeology.kerala.gov.in/uploads/monuments/large/Archaeological%20Museum,%20Kozhikode_11062019052950.jpg" alt="" />
<img width={'200px'} height={'200px'} src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/82/2e/4f/entrance-to-the-pazhassiraja.jpg?w=1200&h=1200&s=1" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkZff3AfPL6ry7iamKJbskN_nw-XaEh6nOtw&s" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQtujXGs7fPbYCp4XoV_aTOQVxFiMNphLD3g&s" alt="" />
<img width={'200px'} height={'200px'} src="https://cdn2.advanceinfotech.org/kozhikode.directory/1200x675/business/268/925739901s-1630748657.webp" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPHxMDzgcLHUVECub6mHn3d62NxRPw1ILlPw&s" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsDafXWZdQuRUhbHDmdWkNxVTiTMNbIf-gDQ&s" alt="" />
<img width={'200px'} height={'200px'} src="https://i.ytimg.com/vi/vy5-XwYWeSw/hqdefault.jpg" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbI2SU5xbGuRld1k59hccJKMtNUw23tNStIw&s" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7vsDYjW9unjJ-turqSsGSkBZbVaHSj6Gnxw&s" alt="" />
<img width={'200px'} height={'200px'} src="https://cdn2.advanceinfotech.org/kozhikode.directory/1200x675/business/1032/pazhassiraja-archaeological-museum2-1641018729.webp" alt="" />
<img width={'200px'} height={'200px'} src="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fvertical%2Fkrishna-menon-museum-in-kozhikode-1714029066_cfe4abb7d4d5ed31de0f.webp&w=1080&q=75" alt="" />
</IMGBOX>
<h1 style={{backgroundColor:"lightgreen"}}>ROUTE MAP</h1>

<IMG><img src={paz} width={"400px"} height={"400px"} alt="" /></IMG>
<a href="https://maps.app.goo.gl/J3NDY49vrLYJooxd7">CLICK TO REVIEW MAP</a>


<h1 style={{backgroundColor:"lightgreen"}}>POPULAR RESORT NEARBY</h1>

<div  style={{width:"100%",height:"300px",backgroundColor:"red",display:'flex',alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",paddingLeft:"25px",}}>

   <div><h3>
   Staydium Bungalow Resort</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ39eUhej5DbGhmt7s9T-IfFDqjR75pvDs0Zg&s" alt="" />
</div>
<a href="https://staydium.in/">click to view</a>
</div>


   <div>
<h3>Harivihar Wellness Retreat</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://harivihar.com/wp-content/uploads/2019/06/hariviharbanner7.jpg" alt="" />
</div>
<a href="https://harivihar.com/">click to view</a>
</div>


   <div><h3>
  
   Beachway Inn</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAYkV-XC9chzV3eiOowPhbiYDse1ZEv7_5g&s" alt="" />
</div>
<a href="https://beachwayinn.com/">click to view</a>
</div>


   <div><h3>HOTEL ALAKAPURI KOZHIKODE</h3>
<div>
    <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/c9/f5/9b/alakapuri-hotel.jpg?w=700&h=-1&s=1" alt="" />
</div>
<a href="https://www.hotelalakapuri.com/">click to view</a>
</div>

</div>







<FOOT>
<h2>contact us for more info 9656756476</h2>
<h4>tourismkerala@gmail.com</h4>

</FOOT>

</div>
  )
}

export default Pazassi
