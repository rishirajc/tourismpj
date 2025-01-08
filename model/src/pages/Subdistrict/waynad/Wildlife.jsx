import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import wil from '/src/pages/Subdistrict/waynad/image/wild.png'

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
const Wildlife = () => {
  return (
    <div>
    <div>
        <img width={"100%"} height={"600px"} src="https://wayanadtourism.co.in/images/places-to-visit/headers/wayanad-wildlife-sanctuary-tourism-entry-fee-timings-holidays-reviews-header.jpg" alt="" />
    </div>
    <h1 style={{backgroundColor:"lightgreen"}}>About Wayanad Wildlife Sanctuary</h1>
    <p>Wayanad Wildlife Sanctuary is a wildlife sanctuary in Wayanad, Kerala, India with an extent of 344.44 km2 (132.99 sq mi) and four hill ranges namely Sulthan Bathery, Muthanga, Kurichiat and Tholpetty. A variety of large wild animals such as gaur, Indian elephant, deer and Bengal tiger are found there. There are also quite a few unusual birds in the sanctuary. In particular, Indian peafowl tend to be very common in the area. Wayanad Wildlife Sanctuary is the second largest wildlife sanctuary in Kerala. It is bestowed with lush green forests and rich wildlife. This wildlife area houses some of the rare and endangered species of both flora and fauna.

Established in 1973, the sanctuary is now an integral part of the Nilgiri Biosphere Reserve. It is bounded by protected area network of Nagarhole National Park and Bandipur National Park in Karnataka in the northeast, and on the southeast by Mudumalai National Park in Tamil Nadu. The Western Ghats, Nilgiri Sub-Cluster (6,000+ km2), including all of the sanctuary, is under consideration by the World Heritage Committee for selection as a World Heritage Site.[2]

It is part of the Deccan Plateau and the vegetation is predominantly of the south Indian moist deciduous teak forests. Also, the sanctuary has pastures of the west-coast semi-evergreen trees. The wildlife sanctuary comes under Project Elephant and one can spot herd of elephants roaming in the area. Elephant rides are arranged by the Kerala Forest Department.

Wayanad district has the largest population of Adivasi in Kerala. Scheduled tribes here include Paniyas, Kurubas, Adiyans, Kurichiyas, Ooralis and Kattunaikkans. Comprising an area of 2126 km2, Wayanad has a powerful history. Relicts and edicts found in various parts of Wayanad speak of an important prehistoric era. Historians are of the view that organised human life existed in these parts, at least ten centuries before Christ.

A monitoring programme of the Forest Department for 2017-18 has found that the Wayanad Wildlife Sanctuary (WWS), holds the largest tiger population in the State. Of the total 176 Bengal tigers in the State, 75 were identified from the WWS, which is part of a large forest complex holding the single largest population of tigers in India.[</p>
   <h3>History</h3>
   <p>Wayanad Wildlife Sanctuary was formed in 1973 and was brought under the Project Elephant in 1991–92. This sanctuary occupies an area of 345 km2. It is the second largest one in the state of Kerala. The sanctuary is separated into two disconnected parts known as the North Wayanad Wildlife Sanctuary and South Wayanad Wildlife Sanctuary. The area in between the two parts was originally a forest region, though it is now occupied majorly by plantations.[citation needed]

In 2012, a tiger was shot dead by the Kerala Forest Department on a coffee plantation on the fringes of the Wayanad Wildlife Sanctuary. Many local political leaders applauded the killing of the tiger. Chief Wildlife Warden of Kerala ordered the hunt for the animal after mass protests erupted as the tiger had been carrying away domestic animals.[</p>
<h3>Climate</h3>
<p>Wayanad climate is salubrious. Average rain fall in this district is 2322 m.m. Annual rain fall in these high rain fall areas ranges from 3,000 to 4,000 mm. High velocity winds are common during the south west monsoon and dry winds blow in March–April. High altitude regions experience severe cold. This place experiences a high relative humidity which goes even up to 95% during the south west monsoon period. Generally, the year is classified into four seasons, namely, cold weather, hot weather, south west monsoon and north east monsoon. The dale, 'Lakkidi', nestled among the hills of Vythiri taluk has the highest average rainfall in Kerala.[citation needed]</p>
<h3>Threatened status of vultures</h3>
<p>Wayanad Wildlife Sanctuary harbours different species of vultures like the white-rumped vulture and the red-headed vulture. The collective population of these vultures numbered around 150 in February 2016, and 17 vulture nests were counted. In March 2016, only about 11 vulture nests were seen. The banned drug Diclofenac is believed to be the reason for this fall in the vulture count.[</p>


<div style={{fontSize:"30px",color:"red",marginBottom:"10px"}}>
<marquee behavior="scroll" width="100%" scrollamount="5" direction="right" >CHECK YOUR TICKET ONLINE(click here)</marquee>
</div>
<Link to={'/ticket'}> <button style={{backgroundColor:"green",marginLeft:"50px"}} >click here</button></Link>


<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<IMGBOX>
<img width={'200px'} height={'200px'} src="https://upload.wikimedia.org/wikipedia/commons/1/11/Wayanad_Wild_Life_Sanctuary.JPG" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGTP0MjK8qNSPI8YzTfIBcqbw-Nqxrw_H8w&s" alt="" />
<img width={'200px'} height={'200px'} src="https://wayanadtourism.co.in/images//tourist-places/wayanad-wildlife-sanctuary/wayanad-wildlife-sanctuary-tourism-entry-ticket-price.jpg" alt="" />
<img width={'200px'} height={'200px'} src="https://thewoodsresorts.com/uploads/media/jungle-safari-in-wayanad626a75c03edcf.jpg" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOK74YYCkELjyh_leGm_a_yRpUYNyxypaG4w&s" alt="" />
<img width={'200px'} height={'200px'} src="https://wayanadtourism.co.in/images/places-to-visit/headers/wayanad-wildlife-sanctuary-tourism-entry-fee-timings-holidays-reviews-header.jpg" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJW47KOhNFcQ0bEJKdAGmkLGf50_cOr1at-A&s" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyaFLxE6DfbVWnIcazHh8rQlWPJbh54bI0A&s" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaav5_k6tcGpqote-RpWB291cR7k2HBDkmoQ&s" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOHfL8rYlP1nyrvqevj3bSEm_3J_pRJA5wHw&s" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSah4sTT2bRVPPs4FoX_c5Xkogl_ShmNxFrKg&s" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Mz0MTLTmguHM4NObAKHAyI16z_Rh1vKPNQ&s" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNvM0siK7j55vYuNZPuGnFOCQSXT5XDRKzUA&s" alt="" />
<img width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKZBMNVTppxXtzC6_eIiM3bHQtibh6hFblyw&s" alt="" />
</IMGBOX>
<h1 style={{backgroundColor:"lightgreen"}}>ROUTE MAP</h1>

<IMG><img src={wil}  width={'400px'} height={'400px'} alt="" /></IMG>
<a href="https://maps.app.goo.gl/J3NDY49vrLYJooxd7">CLICK TO REVIEW MAP</a>


<h1 style={{backgroundColor:"lightgreen"}}>POPULAR RESORT NEARBY</h1>

<div  style={{width:"100%",height:"300px",backgroundColor:"red",display:'flex',alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",paddingLeft:"25px",}}>

   <div><h3>Wayanad HillTop Holiday Home</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0YpS3ZvXhdfaRoMUpy4skBh6PvSC5K5tYig&s" alt="" />
</div>
<a href="https://www.makemytrip.com/hotels/wayanad_hill_top_holiday_home_rooms_pool-details-wayanad.html">click to view</a>
</div>


   <div>
<h3>Wild View Residency Muthanga </h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQDrvVvzRl7-_p6O-t4qxAi18fRzrMUXmolg&s" alt="" />
</div>
<a href="https://www.makemytrip.com/hotels/wildview_residency-details-wayanad.html">click to view</a>
</div>


   <div><h3>
  
   Emarald Wild West, Wayanad</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://r1imghtlak.mmtcdn.com/4547881a-8798-40fe-ab98-4a728754f3ce.jpeg" alt="" />
</div>
<a href="https://www.emarald.in/wild-west-resort-muthanga">click to view</a>
</div>


   <div><h3>Wildside Wayanad Resort</h3>
<div>
    <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/578687699.jpg?k=9fd592fc78ab15b5814215ecee9d18a0b243de8898f7ec3408bbcd76c5d3cca9&o=&hp=1" alt="" />
</div>
<a href="https://www.secure-booking-engine.com/accounts/BIKFgoABI8wuSsP90HZRyw/properties/55jn3wXJ5d72mRQTs36fcw/booking-engine/web/source/C9r-of0ph4a1cfdLZahwhQ/cart/-3ZZOcYEtej4JQPD_ANpKw/#!/rooms">click to view</a>
</div>

</div>







<FOOT>
<h2>contact us for more info 9656756476</h2>
<h4>tourismkerala@gmail.com</h4>

</FOOT>

</div>
  )
}

export default Wildlife
