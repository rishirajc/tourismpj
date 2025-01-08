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
const IMGG=styled.div`
    width: 100%;
   height:300px;
    background-color: #eb8d13;
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
  
`

const Koirmusem= () => {
  return (
    <div>
    <div>
        <img width={"100%"} height={"600px"} src="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Flarge-desktop%2Finternational-coir-museum-alappuzha-1727449388_d03a473144ccb41da171.webp&w=1920&q=75" alt="" />
    </div>
    <h1 style={{backgroundColor:"lightgreen"}}>About International Coir Museum</h1>
    <p>Extracted from the fibrous outer cover of the fruit of the Coconut palm, coir has for been centuries an integral part of every Kerala home.
Coir is twined closely with the social, cultural and economic scenes of Kerala. Extracted from the fibrous outer cover of the fruit of the Coconut palm, coir has for been centuries an integral part of every Kerala home. Alappuzha can rightly be called the coir hub of Kerala, due to the large volume of coir and coir products’ business in the district. Hence it is only natural that the International Coir Museum in Kerala is situated in Kalavoor, in the Alappuzha district. Located right in the highway that connects Alappuzha to the rest of Kerala, the museum is a spot of great fascination. 

An initiative of the Coir Board of India, the International Coir Museum was inaugurated in 2014. It’s a tribute to the history of coir trade in the region. The museum showcases the journey of coir from its initial uses as a daily utility product to the diversified uses that it has today. The museum works on the theme 'coir beautiful' and exhibits various details about the process and extraction of coir fibre to the mechanization of the sector. The museum also houses a souvenir shop where visitors can have a glimpse of various products like handicrafts, doormats, ornaments etc. made using coir and buy them.</p>
   





<h2 style={{backgroundColor:"lightgreen"}}>HOW TO REACH:</h2>
   <div style={{width:"100%",height:'300px',display:'flex',alignItems:"center",justifyContent:"space-around",flexWrap:"wrap"}}>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p><h3>By Air </h3>
    Cochin International Airport, about 74.4 km</p> </div>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p><h3>By Train </h3>
    Alappuzha Railway Station, about 10 km</p> </div>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p> <h3>By Road</h3>
    Alappuzha Bus Stand, about 8.2 km</p> </div>
   </div>



<div style={{fontSize:"30px",color:"red",marginBottom:"10px"}}>
<marquee behavior="scroll" width="100%" scrollamount="5" direction="right" >CHECK YOUR TICKET ONLINE(click here)</marquee>
</div>
<Link to={'/ticket'}> <button style={{backgroundColor:"green",marginLeft:"50px"}} >click here</button></Link>

<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<IMGBOX>

<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF_GTajvgs_hB_Qwr_ilRzDa__dVXu4X1KOg&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt3otK89b7HH03h5UKmXeE9F56kvO0G12syw&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-miY86bKtBA_UlnaB_nzpI3lWU73hcopJQ&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReRIdpaCZcowRDBdsnF7uuFrgKJ6l_7N5yqw&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXOi87u52oIm9VpaG0bIH052JNlgSGKJaHBA&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7I9vjfU7hqxGNj0zp01wxAv0VWNWAcSftmw&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZhlfSjzuWTTYAUL4h7bmy8ZRnUb6VDMJUAA&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfCNSEs867R6b5j-NuW79JD2UemCPWwb2obQ&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUG1khRqlJV7UAHbs3DWjwDHxkSAWrBf-aLw&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm10ilM3OeBPq0vxw1XAj2trjLRWWXLMivVg&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbDc6C8iAJl-C0HP2vTSbOwPWP_k7T7HL5lA&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtc-TCju5DUoydBwRnVot_Ej0xJZzRx8MpJQ&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBqR3rFnnokSRv02uaWpvmoBgltJ3g6CNrZw&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGkrsDHy8rD0N2DYEy--rQP8sLfjRMk9Uegw&s" alt="" />

</IMGBOX>

<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<div>

</div>
<h1 style={{backgroundColor:"lightgreen"}}>ROUTE MAP</h1>

<IMG>IMAGE</IMG>
<a href="https://maps.app.goo.gl/p3oyozenxoEyxVGt5">CLICK TO REVIEW MAP</a>





<h1 style={{backgroundColor:"lightgreen"}}>POPULAR RESORT NEARBY</h1>

<IMGG>

   <div><h3>
   Jansons Orchard Inn</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1YhvVw55okiKTN0OqcAzjQsIBIGkC1tq5IQ&s" alt="" />
</div>
<a href="https://www.makemytrip.com/hotels/orchard_inn-details-alleppey.html">click to view</a>
</div>


   <div>
<h3>Marari lotus beach villa</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbiLBlWuinkvwCUrwuiwR0JJtJJKfhgWrzeA&s" alt="" />
</div>
<a href="https://www.makemytrip.com/hotels/marari_lotus_beach_villa-details-alleppey.html">click to view</a>
</div>


   <div><h3>
  
   Canoe Ville</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://www.canoeville.com/assets/resort-side-1600-6a848699.webp" alt="" />
</div>
<a href="https://www.canoeville.com/">click to view</a>
</div>


   <div><h3>Marari Azhiyakathu Homestay</h3>
<div>
    <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdvIgxtKTDov93ukjZl3Xrf5JdUmgMTpKH2w&s" alt="" />
</div>
<a href="https://www.makemytrip.com/hotels/marari_azhiyakathu_homestay-details-alleppey.html">click to view</a>
</div>

</IMGG>




<FOOT>
<h2>contact us for more info 9656756476</h2>
<h4>tourismkerala@gmail.com</h4>

</FOOT>

</div>
  )
}

export default Koirmusem
