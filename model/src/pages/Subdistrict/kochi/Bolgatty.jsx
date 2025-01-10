import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import bol from '/src/pages/Subdistrict/kochi/image/bolgaty.png'

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
const Bolgatty = () => {
  return (
    <div>
    <div>https
        <img width={"100%"} height={"600px"} src="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Flarge-desktop%2Fbolgatty-island-1721743796_1760f1fd9fd987f48ab3.webp&w=1920&q=75" alt="" />
    </div>
    <h1 style={{backgroundColor:"lightgreen"}}>About Bolgatty Palace</h1>
    <p> <h3>Kochi - a gateway for travelers to Kerala</h3>
Kochi, the prominent travel destination of Kerala, India, has always been an exotic location in a traveler's not-to-be-missed list. The sea, backwaters, monuments, heritage; Kochi has all that would keep a traveler engrossed. With many architectural, cultural and natural splendors, Kochi, which is also the commercial hub of Kerala will never cease to enthrall you. Just off the Kochi Marine Drive is the Bolgatty Island. It is an island of calm right in the midst of the bustling City of Kochi. Located in this fascinating island is the stunning property of KTDC - Bolgatty Palace and Island Resort. The other centre of attraction in this property is Kochi International Marina and Bolgatty Event Centre.

Bolgatty Palace and Island Resort - a well-preserved legacy
Amid this picturesque island of Bolgatty is the beautiful Bolgatty Palace, the exclusive mansion with four palatial rooms, provides the travelers with world class amenities and wonderful holidaying options. Originally built by Dutch traders in 1744, it is the oldest of its kind that exists outside Holland.

The resort combines leisure with business and it is popularly known as the honeymooners' paradise. The resort is neatly tucked among giant umbrellas of refreshing green and is sure to give an exotic island experience in Bolgatty.

The resort has a main block, a mansion block, which houses the palace rooms and a marina block which faces the marina.

The Marina block has marina on the one side and the golf course on the other side. There are six lake view cottages also in the resort. The resort is encircled by a 9 hole golf course established in 1925.

 
 <p>One of the most famous landmarks in Fort Kochi area is the Bolgatty Island. This picturesque island is renowned as a cosmopolitan hotspot in the area as well as for the Bolgatty Palace. Built by a Dutch trader in 1744, the palace that overlooks Lake Vembanad is believed to be one among the oldest Dutch palaces outside of the Netherlands.  

Situated in an 8 acre property, the Palace is an ideal example of the charm and elegance of Dutch architecture. With aesthetically manicured lawns, magnificent trees, large halls, tiled roofs, beautiful wood framed windows and strong pillars, the Palace is set against an idyllic setting. Another highlight of the palace is that the palace is the nine hole golf course set up in 1923 that encircles the palace. Near the property, a sprawling lush green park is also located. 

After its construction, the building was eventually taken over by the British and used as lodging for British governors till India gained independence. Today the palace is a well renowned hotel and resort of the Kerala Tourism Department Corporation (KTDC) that offers luxurious suites, a swimming pool, a multi cuisine restaurant, a golf course and an ayurvedic spa facility. Horse riding and boat cruises are arranged on request and so are Kathakali and other cultural performances. 

The Kochi International Marina located on Bolgatty Island is the only such marina in India that can host upto 34 yachts. It is fully equipped with water, electricity and sewage pump-out facilities. The Bolgatty Event Centre locates on the Island regularly hosts conventions, exhibitions, international conferences, and wedding ceremonies. With easy accessibility to the backwaters, Vallarpadam Container Terminal, Cochin seaport and a resplendent view of the Arabian Sea, it is no wonder that the Bolgatty Island is a much sought after destination. </p><h3>Bolgatty Event Centre</h3>
Overlooking the backwater, Cochin seaport, Vallarpadam container terminal and the Arabian Sea is the Bolgatty Event Centre. The venue, with its greenery and romantic ambience, can be easily accessed from the heart of Kochi city. The venue is ideal for conducting International conferences, Conventions, Exhibitions, Meetings, Wedding receptions and Theme dinners.

The centre is regarded as one of the exotic locations in Kochi/Ernakulam.

<h3>Kochi International Marina</h3>
Located on the eastern coast of Bolgatty Island is the "Kochi International Marina" - the first full-fledged marina of international standards in India. The marina provides berthing facility for 34 yachts and also offers services like water, electricity and sewage pump-outs etc. The Marina House, built in the traditional Kerala architectural style, serves as a station for vessels to refuel and to replenish their stores.</p>
    <p> <h3>History</h3>
The palace was built in 1744 by Dutch traders[1] and later extended and gardens were landscaped around it. The building was then the Governor's palace for the commander of Dutch Malabar, and in 1909, was leased to the British. It served as the home of the British governors, being the seat of the British Resident of Kochi during the British Raj.[citation needed]

In 1947, when India attained independence, the palace became the property of the state and was converted into a heritage hotel resort</p>




<h2 style={{backgroundColor:"lightgreen"}}>HOW TO REACH:</h2>
   <div style={{width:"100%",height:'300px',display:'flex',alignItems:"center",justifyContent:"space-around",flexWrap:"wrap"}}>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p><h3>By Air </h3>
    Cochin International Airport, about 33 km away.</p> </div>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p><h3>By Train </h3>
    Ernakulam South Railway Station, about 6 km away.</p> </div>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p> <h3>By Road</h3>
    Ernakulam Bus Stand, about 5 km away.</p> </div>
   </div>



<div style={{fontSize:"30px",color:"red",marginBottom:"10px"}}>
<marquee behavior="scroll" width="100%" scrollamount="5" direction="right" >CHECK YOUR TICKET ONLINE(click here)</marquee>
</div>
<Link to={'/ticket'}> <button style={{backgroundColor:"green",marginLeft:"50px"}} >click here</button></Link>

<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<IMGBOX>

<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIE-lT4JZ9bjxQylqmS9Hw53gGAu83XZj9ww&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDvThYgin2MZtIMZZruFBwKRvlteNCTFakhA&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://www.keralatourism.org/images/service-providers/photos/property-2319-profile-677-20171219143900.jpg" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGmKytm0vY4UW19sy-haTSLU_DhWB2EnFp4w&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEclMDaRILyiXuRCwLp0u83GWGhmKNbQIP1g&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://l450v.alamy.com/450v/2pgbb4d/bolgatty-palace-island-resort-in-kochi-cochin-kerala-south-india-india-asia-2pgbb4d.jpg" alt="" />
<img width={'200px'} height={'200px'}   src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/85238631.jpg?k=eef55ae5a6a3be60a942df4a048db1829599319e573039c871bc6551e07bbb3f&o=&hp=1" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVF_lYBNQVkfX4Y0JNADNP0Ajd3T82FrPgPg&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlwE7YTfUxMowVl1GHu6K_kVAtulO5B9K7GQ&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXj5WffbRz2HekazLP0Mdt2Sito8BzG_yTNw&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThtGxXYtmX2J3YwrtLy7f8qSlnIDCWWuXk5w&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://www.transindiatravels.com/wp-content/uploads/bolgatty-palace-2.jpg" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrrYLjXkzwDXysaY0B59CB_AfVo1mMm9_6ag&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpZPm2b6STmM642pw40O5fsrHyhh1IOhkwGw&s" alt="" />

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
   Ginger Kochi</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/40/71/e3/one-bedroom-suite.jpg?w=700&h=-1&s=1" alt="" />
</div>
<a href="https://www.gingerhotels.com/ginger-kochi-mg-road?utm_source=google&utm_medium=hotelgmb&utm_campaign=kochimgroad_gmb">click to view</a>
</div>


   <div>
<h3>The Luminara Tourist Home</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://q-xx.bstatic.com/xdata/images/hotel/max500/185223118.jpg?k=ca0ebd7f62e88065cfef31d37eba3b0b9f5c07db8c5a2e5a6f27f967114abaf2&o=" alt="" />
</div>
<a href="https://hotelluminara.com/">click to view</a>
</div>


   <div><h3>
  
   Illam Heritage</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQAbVNET9Hk8xeMSUwYTe7XjTU_haMMDW4sg&s" alt="" />
</div>
<a href="https://illamheritage.com/">click to view</a>
</div>


   <div><h3>Bolgatty  Island Resort</h3>
<div>
    <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDxSzTSIovL3QbZJJqV7Gr6tnvddAGjQYxFw&s" alt="" />
</div>
<a href="https://www.ktdc.com/bolgatty-palace">click to view</a>
</div>

</IMGG>




<FOOT>
<h2>contact us for more info 9656756476</h2>
<h4>tourismkerala@gmail.com</h4>

</FOOT>

</div>
  )
}

export default Bolgatty
