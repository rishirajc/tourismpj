import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import alp from '/src/pages/Subdistrict/alapuza/image/revi.png'

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

const Revimusum = () => {
  return (
    <div>
    <div>
        <img width={"100%"} height={"600px"} src="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Flarge-desktop%2Frevi-karunakaran-memorial-museum-1721154231_6545d70828a281a8a95d.webp&w=1920&q=75" alt="" />
    </div>
    <h1 style={{backgroundColor:"lightgreen"}}>About Revi Karunakaran Memorial Museum</h1>
    <p>Revi Karunakaran Memorial Museum is a privately owned museum located at Alappuzha, Kerala, India that displays decorative art and artifacts, including a large private collection of Swarovski crystals and ivory.

Revi Karunakaran was the architect of the modernized coir industry of Kerala. After Revi's death in 2003, his wife Betty Karan built this museum in his memory. The objects displayed at this museum were collected by his family over three generations and feature unique artistic pieces from across the world.</p>
    <p>The Revi Karunakaran Memorial Museum, situated in Alappuzha, Kerala, is a tribute to the legacy of Revi Karunakaran. Established in 2006 as a memorial to him by his wife Betty Karan, the museum is known for its unique artistic pieces collected by his family over three generations from across the world. The place is a must-visit destination in Kerala for enthusiasts of art, history, and culture.

<h3>The Museum’s Architecture</h3>
Designed by Lalichan Zachariah, the museum's architecture is noted for its classical elements like Greco-Roman columns. Spread across 28,000 square feet, it includes a Kerala Room that showcases the state's cultural heritage through terracotta-tiled floors and hand-carved teak wood ceilings. The museum’s artifacts represent four major religions of Buddhism, Christianity, Hinduism, and Islam, each represented prominently through murals, sculptures and other exhibits. The museum's design reflects Betty Karan's vision to create a lasting memorial to her late husband, reminiscent of the Taj Mahal in its symbolism.

<h3>A Repository of Exquisite Ar</h3>t
The museum boasts an impressive array of artifacts. ‘The Prodigal Son’ is a famous life-size bronze statue made by the Israeli sculpture artist Sam Philipe.

Among the pieces on display are one of the world's largest private collections of Swarovski crystals, including rare pieces like the 'Coffee Bean Grinding Mill' and 'Crane'. The ivory collection features five intricately carved shelves, sculptures such as Dasavatharam (the ten avatars of Lord Vishnu), Virgin Mary and various animals and birds. Additionally, porcelain treasures from renowned brands like Noritake and Armani adorn the museum with their delicate craftsmanship.</p>
   
<p><h3>The Museum</h3>
In 2003, Betty Karan built Revi Karuna Karan memorial museum at Alappuzha in memory of her husband.[1] This is now a renowned, privately owned museum holding one of the largest private collections of Swarovski crystals in the world along with porcelain, jade, ivory, Keralan artifacts, furniture, and Tanjore paintings.[2][3][4]

The family of Karunakarans have been avid collectors of fine art and artefacts since at least three generations.[5] The collection was originally maintained strictly within their private domain. However, after Revi's demise, Betty decided to open the collection to the public, as a befitting tribute to the memory of their most beloved husband and loving father. Lalichan Zachariah, an architect from Ernakulam, helped Betty design the museum. The museum was inaugurated on 22 November 2006 by the former governor of Meghalaya, Sri. M.M. Jacob.[1]

Built over a period of about three years, the RKK museum is noted for its architectural characteristics such as the frontal Greco-Roman columns and occupies an area of 28,000 sq ft.[2][1] A unique feature of the museum is that visitors can see and experience the four major religions of India — Hinduism, Islam, Buddhism and Christianity — that are represented with equal prominence across the murals, ivory collection, Kerala room and other items on display.[1] The 3rd phase of the museum was inaugurated on 22 November 2015 by Her Excellency Chandrika Bandaranaike Kumaratunga, the fifth President of Sri Lanka.[6][7][8] Most of the pieces displayed in the museum come with a certificate of authentication, personally certified by Betty.[9]

Many, including former Sri Lankan President Chandrika Kumaratunga, have figuratively compared this museum to the Taj Mahal, as both were built in the same spirit as a symbol and memorial of spousal love</p>





<div style={{fontSize:"30px",color:"red",marginBottom:"10px"}}>
<marquee behavior="scroll" width="100%" scrollamount="5" direction="right" >CHECK YOUR TICKET ONLINE(click here)</marquee>
</div>
<Link to={'/ticket'}> <button style={{backgroundColor:"green",marginLeft:"50px"}} >click here</button></Link>

<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<IMGBOX>

<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqGxO4-giSVrjQc3WmUSWVVllhiefN4n3LjA&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjDcTmCsAyw3J0_8uOaaExvcQzXQpACtVODg&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ2nc1TxK_k90019tnN5jiqtYhaXGCFo_DZQ&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvpU8TJPXGwkXZrtm1bsh9IrUlT_vM3ZQT1g&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz7Unhhf3MOiviHsiJpxlGYyt8BwTaKJaA1Q&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ad/7a/1e/outside-the-museum.jpg?w=1200&h=-1&s=1" alt="" />
<img width={'200px'} height={'200px'}   src="https://www.hlimg.com/images/things2do/738X538/1_1550133336-9204e.jpg?w=400&dpr=2.6" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYI-CI8XBNXNo-7J8XAm0e2T3maN37HtmlYg&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://cdn.tripuntold.com/media/photos/location/2021/01/04/70dded87-ab2e-47f3-b9ad-f6db83264814.jpg" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB04pzR1k9CoR5gxTVNHRzSvQHFO7_2tisRw&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://im.hunt.in/cg/Alappuzha/City-Guide/ala-revi.jpg" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxBPVxid9Wgqbcpoyl-M0e1geMEXJmq4L3fQ&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://i0.wp.com/planashleygo.com/wp-content/uploads/2024/05/Revi-Karunakaran-Museum.jpg?resize=1024%2C650&ssl=1" alt="" />
<img width={'200px'} height={'200px'}   src="https://i0.wp.com/planashleygo.com/wp-content/uploads/2024/05/Revi-Karunakaran-Memorial-Museum-cover.jpg?fit=1024%2C577&ssl=1" alt="" />

</IMGBOX>

<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<div>

</div>
<h1 style={{backgroundColor:"lightgreen"}}>ROUTE MAP</h1>

<IMG><img src={alp}  width={'400px'} height={'400px'} alt="" /></IMG>
<a href="https://maps.app.goo.gl/p3oyozenxoEyxVGt5">CLICK TO REVIEW MAP</a>





<h1 style={{backgroundColor:"lightgreen"}}>POPULAR RESORT NEARBY</h1>

<IMGG>

   <div><h3>
   Kottaram Heritage Resort</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpcMQHqXS-3-tj9uuy4uQLDcJQNck5sjRgwQ&s" alt="" />
</div>
<a href="https://kottaram-beach-way-garden-heritage-resort.tourismindiab2b.com/">click to view</a>
</div>


   <div>
<h3>Baywatch Beach Resort</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/83484100.jpg?k=8e917a1167cfe4c2ad3a1b50199e6e5aed5587b9a01462f1faa44f5404867916&o=&hp=1" alt="" />
</div>
<a href="https://baywatchbeachresortalleppey.com/alleppey-beach-resort-booking.html">click to view</a>
</div>


   <div><h3>
  
   Palm Beach Resort & Cafe by UTH</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/2a/45/51/bedroom.jpg?w=700&h=-1&s=1" alt="" />
</div>
<a href="https://alleppeypalmbeachresort.com/">click to view</a>
</div>


   <div><h3>Oceana Hills Residency</h3>
<div>
    <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/2d/f2/76/caption.jpg?w=700&h=-1&s=1" alt="" />
</div>
<a href="https://www.makemytrip.com/hotels/oceana_hills_residency-details-alleppey.html">click to view</a>
</div>

</IMGG>




<FOOT>
<h2>contact us for more info 9656756476</h2>
<h4>tourismkerala@gmail.com</h4>

</FOOT>

</div>
  )
}

export default Revimusum
