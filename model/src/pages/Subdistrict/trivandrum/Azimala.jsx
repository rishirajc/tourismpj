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
const Azimala = () => {
  return (
    <div>
    <div>
        <img width={"100%"} height={"600px"} src="https://backpackrkl.wordpress.com/wp-content/uploads/2023/05/dsc_3277.jpg?w=1400" alt="" />
    </div>
    <h1 style={{backgroundColor:"lightgreen"}}>About Aazhimala Shiva Temple</h1>
    <p>The Aazhimala Shiva Temple is a Hindu temple located on the coast of the Arabian Sea near Vizhinjam in the Thiruvananthapuram district of Kerala, India. Dedicated to Shiva, the temple is known for the 18 m (58 ft) tall Gangadhareshwara sculpture, which is the tallest Shiva sculpture in Kerala.[1] The temple is built in a style resembling the architecture of Tamil Nadu. It is governed by the Aazhimala Shiva Temple Devaswom Trust.[2]

<h3>Location</h3>
The temple is located in Pulinkudi in the panchayat of Kottukal in Thiruvananthapuram district, Kerala. It is situated 0.8 km (0.50 mi) off Vizhinjam–Poovar road near a cliff adjacent to the beach.[3][4]

<h3>Administration</h3>
The temple is governed by the Aazhimala Shiva Temple Devaswom Trust. The trust organizes the annual festival and makes important decisions regarding temple affairs.[2]

<h3>Architecture</h3>

The outer wall of the temple decorated with sculptures of Hindu deities
The architectural style of the temple is similar to the temples of Tamil Nadu. The outer wall and gopuram are decorated and adorned by colorful sculptures of different Hindu deities like Ganesha, Ayyappan, Vishnu, Kartikeya and Hanuman. The shrines of the principal deity and other subordinate deities are also vibrant, with carvings, murals and decorations.[5]

<h3>Gangadhareshwara sculpture</h3>

Sculpture of Shiva in the form of Gangadhareshwara against the backdrop of the Arabian Sea
Inside the temple, there is an 18 m (58 ft) tall concrete sculpture of Shiva in Gangadhareshwara figure.[6] It was sculpted by P. S. Devadathan a native of Aazhimala.[7] Construction of the sculpture started on 2 April 2014 and was completed and opened to the public on 31 December 2020.[8] It is currently the tallest Gangadhareshwara sculpture in India and the tallest Shiva sculpture in Kerala.[9]

The sculpture depicts a four-armed Shiva in a seated posture. The back right hand holds a damaru, the front right hand rests in the right thigh, the back left hand holds a trishula and the front left hand is in a raised position within the jaṭā (dreadlocks), which holds Ganga.[1] The sculpture is mounted on a rock at a height of 6.1 m (20 ft).[7]

<h3>Deities</h3>
The principal deity of the temple is Shiva. Ganesha and Parvati are the subordinate deities.[10] There is also a small shrine for Yogeshvara.

<h3>Festivals</h3>
Utsavam, the annual festival, is conducted during the Malayalam month of Makaram (January–February). Shivaratri is another special occasion.[11] Tuesdays are usually the busiest day with many devotees coming from faraway places.[12]</p>
   




<div style={{fontSize:"30px",color:"red",marginBottom:"10px"}}>
<marquee behavior="scroll" width="100%" scrollamount="5" direction="right" >CHECK YOUR TICKET ONLINE(click here)</marquee>
</div>
<Link to={'/ticket'}> <button style={{backgroundColor:"green",marginLeft:"50px"}} >click here</button></Link>

<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<IMGBOX>
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74qWNVckEq88xfRO72sKaxxeZYlSVN61TfA&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy2mORaQuZanRf43w0-lC0BV9lF9uMg8scAg&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Kylgfv1lhjPCyXW7qHtnvcNuEa0ptAQAxQ&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPHMVqgRgXpSH37fQWfy4rpONP40BuxgyfIg&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7dI83-Lk9_zmCD3buzmcKxmv-iA24LsBUXg&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://backpackrkl.wordpress.com/wp-content/uploads/2023/05/dsc_3064.jpg?w=736" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ99LaziN7C3AWevlwQHfaV919hliyONBgxxA&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://i.ytimg.com/vi/EuMH2ZLYJ3Q/maxresdefault.jpg" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU5pKc2c2tg8XActRsrW-vEoJb4FmgnqQaSQ&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://i.ytimg.com/vi/ONUMTzP3BRw/sddefault.jpg" alt="" />
<img  width={'200px'} height={'200px'} src="https://www.holidify.com/images/cmsuploads/compressed/j3UaJBbK_4x_20230521195009.jpg" alt="" />
<img  width={'200px'} height={'200px'} src="https://surojitpalmal.com/wp-content/uploads/2023/12/Azhimala-Shiva-temple-1-684x1024.webp" alt="" />
<img  width={'200px'} height={'200px'} src="https://th-i.thgim.com/public/news/national/kerala/1hemrm/article36558682.ece/alternates/FREE_1200/AZHIMALA2" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRj-kJqH4ylNfQCn6Qxo5JjLeKf1NkHxI53w&s" alt="" />

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
   Karma Beach Resort</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://i.ytimg.com/vi/1M7mAtAPTqo/maxresdefault.jpg" alt="" />
</div>
<a href="https://www.booking.com/searchresults.en-gb.html?aid=356980&label=gog235jc-1BCAsobEIca2FybWEtYXl1cnZlZGljLWJlYWNoLXJlc29ydEgzWANobIgBAZgBCbgBF8gBDNgBAegBAYgCAagCA7gCpo7VuwbAAgHSAiQxYmI2YTYyNi1mM2I2LTQ1ZjYtYjEzNC05NmZlYjI4ODU3Y2XYAgXgAgE&highlighted_hotels=5831618&redirected=1&city=-2101668&hlrd=user_sh&group_adults=2&source=hotel&expand_sb=1&keep_landing=1&sid=4d1f5003b68185b5abb429c67ab5ab2f">click to view</a>
</div>


   <div>
<h3>Suntara Beach Resort</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAtcUt2rDrkA5sZMvGJj_7SAVP_ZSBaL8n0A&s" alt="" />
</div>
<a href="https://www.suntarabeachresort.com/">click to view</a>
</div>


   <div><h3>
  
   Agasthya Ayurveda Garden</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI4Nib0zXwth-7Spd5R8sGgcHjT3Zud295tw&s" alt="" />
</div>
<a href="https://www.ayurveda-india.com/">click to view</a>
</div>


   <div><h3>THE OCEAN PARK BEACH RESORT </h3>
<div>
    <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbyR5M_7ngoohfNJ6uYfJ0zel5QJhhbMDqaA&s" alt="" />
</div>
<a href="http://www.oceanparkkovalam.com/">click to view</a>
</div>

</IMGG>




<FOOT>
<h2>contact us for more info 9656756476</h2>
<h4>tourismkerala@gmail.com</h4>

</FOOT>

</div>
  )
}

export default Azimala
