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
const Manachira = () => {
  return (
    <div>
    <div>
        <img width={"100%"} height={"600px"} src="https://tripinic.com/wp-content/uploads/2020/10/Mananchira-Square-1-scaled-jpg.webp" alt="" />
    </div>
    <h1 style={{backgroundColor:"lightgreen"}}>About Mananchira</h1>
    <p>mananchira square is a man-made freshwater pond park situated in the centre of the city of Kozhikode (Calicut) in Kerala, southern India. The pond is 3.49 acres (14,120 m2) in area, is rectangular in shape and is fed by a natural spring. It was donated by KunhiKoru Moopan, father of Kallingal Madathil Rarichan Moopan to the people of calicut for sports and leisure activity[1]

<h3>History</h3>
Mananchira was built as a bathing pool by the Zamorin Mana Vikrama, the feudal ruler of Kozhikode in around the 14th century. at the time of Tippu sultan Mysore ruler he made this as drinking water source as a gift For Sayed Jifri. The laterite obtained from excavating the pond was used to construct two palaces to the east and west.[2]

In the late 19th century, Calicut's municipal council decreed that the pond was to be reserved exclusively for drinking purposes, and prohibited its use for bathing, washing and recreational activities—a ruling that has remained in place ever since.[3] The pond is an important source of drinking water for Kozhikode, but is susceptible to pollution from municipal sewage, domestic waste, and pollutants from nearby textile factories. An analysis of the water in 2000 by scientists from the Central Water Analysis Laboratory and Pondicherry Central University found that the pond was particularly bacteriologically contaminated during the monsoon season, and was highly alkaline afterwards.[4]

<h3>New park</h3>
Mananchira Square, a park complex surrounding the lake was opened in 1994. Previously the Mananchira Square was known as Mananchira Maidanam (Playground) and was famous for football. Several football tournaments were conducted here. The Mananchira Maidanam was also famous for the religious activity called Mananchira Ayyappan Vilakku. The Mananchira Maidanam was transformed and named as Mananchira Square up on the leadership of then Kozhikode District Collector Mr Amitabh Kant, who was the administrator, by closing two roads in the vicinity. The place for conducting the Mananchira Ayyappan Vilakku (a religious function held every December) was shifted to Muthalakulam Maidanam (A ground near by to Mananchira Square / Maidanam, which was developed after filling a pond named Muthalakkulam).

<h3>Cultural events</h3>
The officials also kept a rule that Mananchira Square will not be used for any cultural or religious purpose, whereas nowadays its widely used for cultural purposes. There are many beautiful statues of Dhoti-clad Malayalam writers inside the park. The park opens after two pm and entrance is free. Other places of tourist attraction like the Pattala Pally and the Mittayi Theruvu are located near the park. The town hall and art gallery are also adjacent to the park. A hangout of non-Malayali residents called the Crown Theatre is on the western side of the park. The park has 250 beautiful lamp posts, an artificial rivulet and an open-air theater. The public library near the park has a huge collection of Malayalam and English books.


CSI Church, Mananchira, Kozhikode
<h3>Muthalakkulam</h3>
The northern side of Mananchira is called Muthalakkulam. Muthalakkulam is traditional cloth drying ground used even now by the professionals in the laundry field. Touring Bookstall (TBS) Women's Hospital and Ahmadiyya Mosque are located here. Palayam Juma Masjid and the old Palayam bus station are also located here. Palayam junction boasts of the historic imperial building which was the first concrete building of Calicut city.

<h3>Mananchira Square</h3>
Mananchira Square is a park in the centre of Kozhikode, Kerala state, southern India. The historic maithan, adjacent to Mananchira has been converted into an acadia with trees and plants, an artificial hill, shrubs, sculpture, an open-air theatre, and a musical fountain.

Mananchira Square is named after the man-made lake Mananchira around which it is situated in the centre of the city. It is named after Mahadevan Samoothiri, the erstwhile ruler of the Kozhikode Kingdom, known as Mana-vedan Chira (pond) and later transformed to Mana-an-Chira.

100 years ago Valiyangadi and the beach area was the centre of Kozhikode city. In the 1970s the downtown shifted to Mananchira area and again, in the 1980s, Mavoor Road became the centre of attraction. In 2010s, Thondayad Bypass area and Palazhi on the Airport road has emerged as the new city centre with a vibrant night life.


The mythical Pathumma's Goat at Mananchira
<h3>Oyitti Road</h3>
Oyitti Road connects Mananchira with the railway station.

<h3>Important landmarks</h3>
LIC Divisional Office
Mathrubhumi newspaper office
Court Road
Calicut Nursing Home
S.M Street
Paramount Tower
Crown Cinema
Income tax office
State Bank of India
Head Post Office
District Police Chief office
Vaikom Mohammed Basheer Road
Calicut Townhall
Pattala palli (mosque)
Public Library
comtrust (Now closed)
Regional Office of National Child Development Council[5]</p>
    


<div style={{fontSize:"30px",color:"red",marginBottom:"10px"}}>
<marquee behavior="scroll" width="100%" scrollamount="5" direction="right" >CHECK YOUR TICKET ONLINE(click here)</marquee>
</div>
<Link to={'/ticket'}> <button style={{backgroundColor:"green",marginLeft:"50px"}} >click here</button></Link>


<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<IMGBOX>
<img  width={'200px'} height={'200px'}  src="https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/15/1e273ee0432a442977c3c817b611b011_1000x1000.jpg" alt="" />
<img  width={'200px'} height={'200px'}  src="https://www.connectingtraveller.com/images/localtip/1659374309images%20(60).jpeg" alt="" />
<img  width={'200px'} height={'200px'}  src="https://cdn.tripuntold.com/media/photos/location/2020/12/08/640cff32-d84d-4358-830a-d2a0d193777f.jpg" alt="" />
<img  width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx_MAhLBADGqVtNZINqcANpyhh8Eb9Dr3bBg&s" alt="" />
<img  width={'200px'} height={'200px'}  src="https://i.ytimg.com/vi/WLFo4fcI8QE/sddefault.jpg" alt="" />
<img  width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-46pRYyz4lA74o6uGb8t0W98S5PfvBb0sQ&s" alt="" />
<img  width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlm5Fd_EodbdlrP9a2ztC5vr0Rfx_tw8ViOg&s" alt="" />
<img  width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOJbWW5LpmNclkyde8BDvc_C_OqjMuCmhBw&s" alt="" />
<img  width={'200px'} height={'200px'}  src="https://i.ytimg.com/vi/TD2_AIvjiuQ/maxresdefault.jpg" alt="" />
<img  width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjIKv9-ypyu3CMwvAdezRFy-WTMAbE-oXfXA&s" alt="" />
<img  width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMS58qDV8ThHb53u5T_CxDvWr-aqDIL0ec5Q&s" alt="" />
<img  width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxzdYJSWmY3iKSQxMMKfZa8TgvIYclQprHJg&s" alt="" />
<img  width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQu_gTIQ6wuHvaD4iFaUI_sRUrQbFi0BInQ&s" alt="" />
<img  width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxe-2gC-vN2fImrrJS0id4-E0mCqupv2ya6w&s" alt="" />
</IMGBOX>
<h1 style={{backgroundColor:"lightgreen"}}>ROUTE MAP</h1>

<IMG>IMAGE</IMG>
<a href="https://maps.app.goo.gl/J3NDY49vrLYJooxd7">CLICK TO REVIEW MAP</a>


<h1 style={{backgroundColor:"lightgreen"}}>POPULAR RESORT NEARBY</h1>

<div  style={{width:"100%",height:"300px",backgroundColor:"red",display:'flex',alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",paddingLeft:"25px",}}>

   <div><h3>The Zerai Resort</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKfjLxRrwmzefDKk2G0ObHgge_NDFSzK8dBw&s" alt="" />
</div>
<a href="https://www.tripadvisor.in/Hotel_Review-g16759531-d23343907-Reviews-The_Zerai_Resort-Thamarassery_Kozhikode_District_Kerala.html">click to view</a>
</div>


   <div>
<h3>Casita Greens </h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/469293567.jpg?k=5d7d61d85692dcab4b92ef04d7a21161fc73f3b5ef74b7b61b9b659523574408&o=&hp=1" alt="" />
</div>
<a href="https://www.makemytrip.com/hotels/casita_greens-details-calicut.html">click to view</a>
</div>


   <div><h3>
  
   Staydium Bungalow Resort</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://staydium.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-05-at-16.46.28_5aa0154e-scaled.jpg" alt="" />
</div>
<a href="https://staydium.in/">click to view</a>
</div>


   <div><h3>Emarald Hotel and Banquet hall Calicut</h3>
<div>
    <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://pix10.agoda.net/hotelImages/816/816933/816933_15050515210027254434.jpg?ca=4&ce=1&s=414x232&ar=16x9" alt="" />
</div>
<a href="https://www.emarald.in/hotel-in-calicut">click to view</a>
</div>

</div>







<FOOT>
<h2>contact us for more info 9656756476</h2>
<h4>tourismkerala@gmail.com</h4>

</FOOT>

</div>
  )
}

export default Manachira
