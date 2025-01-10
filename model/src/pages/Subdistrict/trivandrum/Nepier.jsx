import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tri from '/src/pages/Subdistrict/trivandrum/image/napier.png'

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
const Nepier = () => {
  return (
    <div>
    <div>
        <img width={"100%"} height={"600px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Napier_Museum_TVM.jpg/1280px-Napier_Museum_TVM.jpg" alt="" />
    </div>
    <h1 style={{backgroundColor:"lightgreen"}}>About Napier Museum
    </h1>
    <p>Thiruvananthapuram has, to its name, a ton of treasures in its midst, which may present one with the opportunity to sneak a peek into the rich culture as well as the history of God’s Own Country. Kerala is not just a place of tropical and exotic beauty. It is a place with exquisite traditions, a truly opulent culture and formidable art forms worth experiencing oneself. The Napier Museum of Thiruvananthapuram is a proof of this statement.

The Napier Museum is home to around 550 exhibits with a significant value in terms of history and archaeology. It exhibits a vast range of ivory carvings, royal collectibles, wooden sculptures and carvings, bronze images and sculptures, more than 5000 coins which were once in use in the past and much, much more.

<h3>History</h3>
The idea of having a museum to exhibit the beauties of the Travancore kingdom belonged to the king Uthram Thirunal, who started to slowly work towards turning this into a reality since 1855. A society was formed for the same including the king and some members of the British East India Company. In the year 1857, it was finally open to public.

However, this museum was not large enough to hold all the items of interest and thus, during the reign of Sri Ayilyam Thirunal, it was demolished and rebuilt from the ground up as the museum which we see today.

The museum is named after Lord Napier, the then Governor General of Madras, who was inspired by the architecture of Kerala and assigned Robert Fellowes Chisholm with the task of building the museum the second time. He designed the museum to represent an Indo-Saracenic style of architecture, basing it off of the tradition building style of the past Kerala and mixing it with a few Saracenic elements. After the successful completion of the museum, the king of Travancore, Sri Ayilyam Thirunal, opened it for the public in 1880.
<p>A building was constructed in 1857 during the reign of Uthram Thirunal Marthanda Varma,[3] and later demolished in 1874 to lay foundation for a new building, during the reign of Ayilyam Thirunal.[4]

The Governor of Madras in 1872 appointed Robert Chisholm, a consulting architect of the Madras Government to design a new museum. In 1880, construction finished and the museum opened to the public, bearing the namesake of its governor, Francis Napier, 10th Lord Napier.

The Indo-Saracenic structure lacks an air conditioning system. Although it has never been an issue due to suitable natural ventilation, an annex built in 2016 was noted for various problems such as mold, insects and corrosion owing to the lack of windows and openings. Since 2017, the annexed museum depot has been under review and is being rebuilt. Furthermore, the Napier Museum itself is being renovated.[5]</p>
<h3>Tourist Attractions</h3>
The Napier Museum has, on display, a vast variety of historically significant items. A large number of coins used during the rule of different dynasties can be seen here including coins from the prosperous kingdom of Vijayanagara, coins from the time of the Pandyas, the Cholas, Sivaganga coins as well Roman, Persian, Dutch, Chinese coins and many more. There is also a wide variety of musical instruments popular during the eras gone by. The different ivory, wooden and bronze carvings and sculptures show Hindu Gods in a majestic manner with excellent artistry and eye for detail. The museum’s most popular exhibit is that displaying the sword of Veluthampi Dalawa, one of the bravest of people and one of the first martyrs of the Indian Freedom Struggle.

It is definitely one of the places to visit if you’re interested in learning about the happenings of the past and having a chance at a glimpse of the times gone by. Each piece in this museum has its own story to tell, and it is simple easy to get lost in the echoes of the past, brought forth by each beautifully designed display.

Nearby attractions to the Napier Museum include the Sree Chitra Art Gallery, Raja Ravi Varma Art Gallery, the Trivandrum Zoo, and the Kanakakunnu Palace.</p>

<p><h3>Design</h3>
Some of the building features include a gothic roof and minarets. The Napier Museum, a landmark of the city, is noted for its unique ornamentation and architectural style, which is influenced by Indian, Chinese, Kerala and Mughal Schools of Architecture.[6]

The museum has a bandstand with concealed speakers and special acoustics. In the old days,[when?] the band of the Travancore Nair Brigade would play there every Friday. Later,[when?] the police band would play on Saturdays.[7]

The museum owns a garden which has many varieties of flowers and trees. It also shelters the oldest living rubber tree in Kerala. It was brought there in 1876 from Ceylon and planted in the museum grounds by Visakham Thirunal.[8][9]</p>




<h2 style={{backgroundColor:"lightgreen"}}>HOW TO REACH:</h2>
   <div style={{width:"100%",height:'300px',display:'flex',alignItems:"center",justifyContent:"space-around",flexWrap:"wrap"}}>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p><h3>By Air </h3>
    Thiruvananthapuram International Airport, about 5 km away</p> </div>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p><h3>By Train </h3>
    Thiruvananthapuram Central Railway Station, about 3 km away.</p> </div>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p> <h3>By Road</h3>
    Thampanoor Bus Stand, about 3 km away.</p> </div>
   </div>



<div style={{fontSize:"30px",color:"red",marginBottom:"10px"}}>
<marquee behavior="scroll" width="100%" scrollamount="5" direction="right" >CHECK YOUR TICKET ONLINE(click here)</marquee>
</div>
<Link to={'/ticket'}> <button style={{backgroundColor:"green",marginLeft:"50px"}} >click here</button></Link>

<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<IMGBOX>
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCGMnyLjxoRfCoioYvvfbNEWg15vTsO_heA&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://www.dtpcthiruvananthapuram.com/uploads/picture_gallery/gallery_images/napier-musieum-20230517090726974613.webp" alt="" />
<img  width={'200px'} height={'200px'} src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/f2/a6/34/museum-complex.jpg?w=1200&h=1200&s=1" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoK9tc-bG4e0MIOqB-uxx4XpxoEDqoLhCOhA&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdr3d31qp8evZ0EZIeHOLFE9T3Wh_uZZwU9Q&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtgH0XBsaXMjKJSguccoWxsh3nkje5OvCuQ&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://www.napiermuseum.org/images/museum-exterior.jpg" alt="" />
<img  width={'200px'} height={'200px'} src="https://static.toiimg.com/thumb/58027394/Napier-Museum.jpg?width=1200&height=900" alt="" />
<img  width={'200px'} height={'200px'} src="https://i.ytimg.com/vi/jwDQtI7HRkA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDs3cxXQ2--W3nz_Pug2NSy8QFsQQ" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPEgK-vnYRoWYVj4TG-NklWb-Yv-e7O9-QAA&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://i0.wp.com/www.re-thinkingthefuture.com/wp-content/uploads/2023/11/A11197-Napier-Museum-Thiruvananthapuram-Kerala-Image-5.jpg?w=999" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqIFhcdDg2pNhOO5T1pg-CVtvWX8HNQtgGjw&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW_PChxUAuwsahtPR0MYHEnYb8iHF5i4n0nw&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://www.napiermuseum.org/images/museum-Interior.jpg" alt="" />

</IMGBOX>

<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<div>

</div>
<h1 style={{backgroundColor:"lightgreen"}}>ROUTE MAP</h1>

<IMG><img src={tri}  width={'400px'} height={'400px'} alt="" /></IMG>
<a href="https://maps.app.goo.gl/p3oyozenxoEyxVGt5">CLICK TO REVIEW MAP</a>





<h1 style={{backgroundColor:"lightgreen"}}>POPULAR RESORT NEARBY</h1>

<IMGG>

   <div><h3>
   Ridges Hotel</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/5e/a1/b5/ridges-hotels-trivandrum.jpg?w=700&h=-1&s=1" alt="" />
</div>
<a href="https://hotelridges.com/">click to view</a>
</div>


   <div>
<h3> Nandanam Park
</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQax5vMHJfYsfLmV99XfTCEuYMosodF0Q68aQ&s" alt="" />
</div>
<a href="https://www.oyorooms.com/11125/">click to view</a>
</div>


   <div><h3>
  
   Casa In Luxury Suites</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaFF3NUz7L4zX8-FmZ8lakj6MywX8KnySrbg&s" alt="" />
</div>
<a href="https://www.makemytrip.com/hotels/casa_in_luxury_suites-details-thiruvananthapuram.html">click to view</a>
</div>


   <div><h3>Hotel Seven Hills</h3>
<div>
    <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPqCplExl4eQXscYrDGS9RMd5fU1gJPehwOg&s" alt="" />
</div>
<a href="https://thesevenhillshotel.in/">click to view</a>
</div>

</IMGG>




<FOOT>
<h2>contact us for more info 9656756476</h2>
<h4>tourismkerala@gmail.com</h4>

</FOOT>

</div>
  )
}

export default Nepier
