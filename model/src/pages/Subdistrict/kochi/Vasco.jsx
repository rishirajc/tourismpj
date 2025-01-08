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
const Vasco = () => {
  return (
    <div>
    <div>
        <img width={"100%"} height={"600px"} src="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Flarge-desktop%2Fvasco-da-gama-square-1724143095_7eb541fe927d8404028d.webp&w=1920&q=75" alt="" />
    </div>
    <h1 style={{backgroundColor:"lightgreen"}}>AboutVasco da Gama Square</h1>
    <p>Vasco da Gama Square, located in Fort Kochi, Ernakulam, is a historic and picturesque promenade along the beach, offering visitors a glimpse into Kerala's rich past. Named after the legendary Portuguese explorer Vasco da Gama, the square is an ideal spot to watch fishermen operate the iconic Chinese fishing nets, a legacy of the region's ancient trade connections. These large cantilevered nets, set up on teak and bamboo poles, were introduced by traders from the court of Kublai Khan, making them a fascinating remnant of Kochi's historical ties with China.

Vasco da Gama Square is not just a place of historical significance; it is also a vibrant hub for locals and tourists alike. The area is lined with numerous stalls offering fresh seafood, tender coconut, and other local delicacies, making it a perfect spot for a relaxed evening by the sea. The square also features an open stage for cultural performances, adding to the lively atmosphere.

The square's significance is further enriched by its connection to Vasco da Gama, the first European to reach the Indian subcontinent by sea. Gama's arrival in 1498 at Kappad near Calicut marked the beginning of a new era in global exploration and trade. His voyages led to the establishment of Portuguese influence in Kerala, starting with the signing of a treaty with the King of Kochi and the construction of Fort Emmanuel, the first European fort in India.

Gama visited India three times, with his final voyage in 1524 ending in Kochi, where he died of malaria on Christmas Eve. He was initially buried at St. Francis Church in Fort Kochi, but his remains were later returned to Portugal in 1539.

Vasco da Gama Square stands as a tribute to this explorer's enduring legacy and serves as a reminder of Kochi's pivotal role in the age of global exploration. The square, with its stunning views of the sea, bustling local market, and rich history, continues to be a must-visit destination for those exploring the cultural and historical landscape of Kerala.</p>

<p>Vasco da Gama Square in Fort Kochi, near the sea shore, is an ideal place to spend the evenings. One can see stalls that sell nuts, tender coconut, spices, and other local delicacies. Fishermen lower the Chinese fishing nets into the sea and fresh catch is brought to the nearby fish market. Owned by the Municipal Corporation of Kochi, Vasco da Gama has an open stage for cultural performances. This place received its name three decades ago. This place is named after the legendary Portuguese sailor Vasco da Gama who was the first European to reach the Indian subcontinent by sea. The mission of his voyage was to search for the details of the spice market of and trade routes to the Malabar region on the Indian coast. His fleet of ships reached Kappad near Calicut in 1498. Gama’s discovery of the sea route to India was significant and opened the way for an age of global imperialism. Pedro Álvares Cabral, another Portuguese sailor, followed Gama, reaching Calicut and travelling from there to Kochi. A treaty was signed between the Portuguese and the King of Kochi which followed the construction of Fort Emmanuel in 1503 at Kochi, the first European fort in India. The city in the Portuguese fort area was called Santa Cruz, the first European 'city' in India. Gama travelled to India thrice. Gama’s first voyage left Lisbon on 7th July 1497. There were four ships in the fleet and 170 men in the crew. After reaching Calicut Gama went back on 29th August 1498. His second voyage was in 1502 with 15 ships in the fleet which reached Kochi in October 1502. He returned to Lisbon in 1503. The third voyage started from Lisbon in April 1524 with 14 ships in the fleet and it reached Kochi in 1524. Within less than three months of his arrival at Kochi, he died of malaria in Kochi on Christmas Eve of 1524. He was initially buried at St. Francis Church in Fort Kochi, but his remains were eventually taken to Portugal in 1539. - by Kerala Tourism</p>

<h2 style={{backgroundColor:"lightgreen"}}>HOW TO REACH:</h2>
   <div style={{width:"100%",height:'300px',display:'flex',alignItems:"center",justifyContent:"space-around",flexWrap:"wrap"}}>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p><h3>By Air </h3>
    Cochin International Ariport, about 35 km away</p> </div>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p><h3>By Train </h3>
    Ernakulam Railway Station, about 15 km away.</p> </div>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p> <h3>By Road</h3>
    mattancheri, about 21 km</p> </div>
   </div>



<div style={{fontSize:"30px",color:"red",marginBottom:"10px"}}>
<marquee behavior="scroll" width="100%" scrollamount="5" direction="right" >CHECK YOUR TICKET ONLINE(click here)</marquee>
</div>
<Link to={'/ticket'}> <button style={{backgroundColor:"green",marginLeft:"50px"}} >click here</button></Link>

<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<IMGBOX>

<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyrafQZ6j3CFuYlU3ZRHQxzUmqv12XyPR_Pg&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMZniF8fvGjc5qooGM-XFp911dlib6cYvB9Q&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://map.sahapedia.org/admin//assets/images/20210530120653-35888719451_Vasco_da_Gama_Square_01__1__banner.jpg?__imr__=bannerArticle" alt="" />
<img width={'200px'} height={'200px'}   src="https://www.casarioresorts.com/blog/wp-content/uploads/2023/08/Vasco-Da-Gama-Square.jpg" alt="" />
<img width={'200px'} height={'200px'}   src="https://i.ytimg.com/vi/9CBkcWgzkRA/maxresdefault.jpg" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyBH-0BPfDAts-p8KNv0TCWtkI-LAn-8_XA&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyBH-0BPfDAts-p8KNv0TCWtkI-LAn-8_XA&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://www.keralatourism.org/images/destination/thumb/koder_house_at_fort_kochi20131114164106_25_1.jpg" alt="" />
<img width={'200px'} height={'200px'}   src="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fvertical%2Fkoder-house-1723536657_41fb2061220c2141f292.webp&w=1080&q=75" alt="" />
<img width={'200px'} height={'200px'}   src="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fimages%2Fservice-providers%2Fphotos%2Fthumb%2Fproperty-3957-profile-19337-20181220085926.jpg&w=1080&q=75" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvuN4Jul7tUJmsAjLKrqCWaYOPHZayEl3Ip44ROmZSe-aFtE0v0clckaWJxSEFDY2qJTk&usqp=CAU" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHGhzxJpgRurN2UJMM0NSBr7GDiLLadki64Q&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0vpoeF21kQOCVC4j6lnJVUnzH-q_hdufWgCtldKnA4rj4RDN56gaZu0UBqeLJZxcKALc&usqp=CAU" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOO0Gt0u9wVFHG4C62tj06XLR7i54oL92QrGu3R34347vmaPV0KBx64zZHRnEWa3CHeE&usqp=CAU" alt="" />

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
   The Spencer Home</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcUcGwwA9BT1I5Zx79Jhm5JhLsR_fz_9G7zA&s" alt="" />
</div>
<a href="https://www.makemytrip.com/hotels/the_spencer_home_rooms_in_a_homestay-details-cochin.html">click to view</a>
</div>


   <div>
<h3>Vasco Da Gama Beach Resort and Spa</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/b1/d5/f0/vasco-da-gama-beach-resort.jpg?w=700&h=-1&s=1" alt="" />
</div>
<a href="https://www.vascodagamabeachresort.com/">click to view</a>
</div>


   <div><h3>
  
   Tom's Old Mansion</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kkzEqzVEF6pV5WHPyiV4ta_NAPE9ynZDqA&s" alt="" />
</div>
<a href="https://www.tripadvisor.in/Hotel_Review-g297633-d2386719-Reviews-Tom_s_Old_Mansion-Kochi_Cochin_Ernakulam_District_Kerala.html">click to view</a>
</div>


   <div><h3>Hotel Bright Heritage- Fort Kochi</h3>
<div>
    <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/375486961.jpg?k=5a9f5511d8ce07411ec75cee23966330d159cf070eb101fb9b3d1254fe055c9d&o=&hp=1" alt="" />
</div>
<a href="http://hotelbrightheritage.com/ssl-not-enabled/?return=/">click to view</a>
</div>

</IMGG>




<FOOT>
<h2>contact us for more info 9656756476</h2>
<h4>tourismkerala@gmail.com</h4>

</FOOT>

</div>
  )
}

export default Vasco
