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
const Miniooty = () => {
  return (
    <div>
    <div>
        <img width={"100%"} height={"600px"} src="https://i.ytimg.com/vi/8YnA4Fx1344/maxresdefault.jpg" alt="" />
    </div>
    <h1 style={{backgroundColor:"lightgreen"}}>About Arimbra Hills, Malappuram</h1>
    <p>Arimbra Hills or Mini Ooty is a tourist spot between Malappuram and Kondotty in Malappuram district, Kerala, India. It is at a height of 445 meters (1,460 ft) above sea level. The place attracts a large number of visitors for its rolling hills and scenic views. The location got the nickname "Mini Ooty" because it resembles Ooty, one of the famous hill stations in India. There are many stone crushers and plantations atop the hill. There is an old Scheduled Caste colony on the western side of the hill.[1]

Apart from the Western Ghats, Kerala has five major independent mountains. Of these, three are in Malappuram district, one in Palakkad and one in Kannur. The largest of these five mountains is the Cheriyam mountain at Mankada in Malappuram district. This Cheriyam mountain is also known as Panthalur Hill. Cheriyam mountain is located at an elevation of 613 meters (2,011 ft) above sea level. Mount Amminikkadan is the second highest mountain of this five mountains. The height of this Amminikkadan mountain is 540 meters. This Arimbra mountain in Kondotty in Malappuram district is the third highest mountain of this five mountains. The height of this Arimbra mountain is 445 meters.</p>
 
 <h3>How to reach</h3>
 <p>Arimbra Hills can be reached at a distance of 4 km (2.5 mi) from Aravankara near Pookkottoor located in Malappuram - Calicut stretch of NH966. The site is 11 km (6.8 mi) from Karathode, located along Malappuram-Parappanangadi road (SH 72). There are several other minor roads that connect to the region from Pookkottoor, Mongam, Morayur, Musliyarangadi, Kottukara, and Thottassery near Kondotty. An alternative route is available from Poolappis Junction near Oorakam on SH 72. Those who are coming from Calicut can access the hills from Colony Road near Kondotty.</p>
<h3>Hiking Spots</h3>
<p>Thiruvonamala, Poolappees, Muchikundu, Cheruppadi Mala, Kunnumpuram and Kakkad lare suitable for hiking and also have fine viewpoints. One can see the runway of Calicut International Airport in full action from these viewpoints</p>

<p> <h3>History</h3>
Arimbra was a separate Revenue Village called Amsom at the time of the British Raj. When the village head, or Adhikari, was suspended by British authorities due to some allegations[clarification needed] against him, the Morayur village head (Adhikari) Kodithodika Valiya Ahammed Kutty Haji was given charge then. Later, Arimbra merged with Morayur Revenue Village.[2]

<h3>Schools</h3>
Government Vocational Higher Secondary School, Arimbra is one of the oldest schools in the area. The football ground of the high school is set in the Arimbra Hills.

A UP School and a Sunni madrasa are also in the village.</p>
<p> <h3>What to See and Do in Mini Ooty</h3>
Mini Ooty offers a plethora of attractions and activities for all kinds of travelers. Whether you are looking for adventure, relaxation, or culture, you will find something to suit your taste and mood in Mini Ooty. Here are some of the things you can see and do in Mini Ooty:</p>

<p> <h3>Glass bridge</h3>
Another highlight of Mini Ooty is the glass bridge that is built over a valley. The bridge is 150 m long and 70 m high, and it offers a thrilling experience for the visitors. You can walk on the transparent glass and feel the adrenaline rush as you see the valley below your feet.</p>
<p> <h3>Hiking spots</h3>
If you are an adventure lover, then you will love the hiking spots in Mini Ooty. There are several hills and mountains that offer exciting trails for hiking and trekking. Some of the popular hiking spots are Thiruvonamala, Poolappees, Muchikundu, Cheruppadi Mala, Kunnumpuram, and Kakkadseemly. You can also enjoy the view of the Kozhikode International Airport runway from some of these spots.</p>
<p> <h3>Views of valleys and hills</h3>
The main attraction of Mini Ooty is its stunning views of valleys and hills that will take your breath away. You can witness the beauty of nature from various vantage points in Mini Ooty. You can see the lush greenery, misty clouds, colorful flowers, and sparkling waterfalls that adorn the landscape. You can also catch the sunrise and sunset from Mini Ooty and marvel at the changing colors of the sky.</p>



<h2 style={{backgroundColor:"lightgreen"}}>HOW TO REACH:</h2>
   <div style={{width:"100%",height:'300px',display:'flex',alignItems:"center",justifyContent:"space-around",flexWrap:"wrap"}}>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p><h3>By Air </h3>
    The nearest airport to Mini Ooty is Kozhikode International Airport, which is about 15 km away. You can take a taxi or a bus from the airport to reach Mini Ooty.</p> </div>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p><h3>By Train </h3>
    The nearest railway station to Mini Ooty is Kondotty Railway Station, which is about 10 km away. You can take a taxi or a bus from the station to reach Mini Ooty.</p> </div>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p> <h3>By Road</h3>
    Mini Ooty is well-connected by road to major cities and towns in Kerala and neighboring states. You can take a state-run or private bus to Malappuram or Kondotty, and then take another bus or taxi to Mini Ooty. Alternatively, you can drive your own vehicle or rent a car or bike to reach Mini Ooty.</p> </div>
   </div>

<div style={{fontSize:"30px",color:"red",marginBottom:"10px"}}>
<marquee behavior="scroll" width="100%" scrollamount="5" direction="right" >CHECK YOUR TICKET ONLINE(click here)</marquee>
</div>
<Link to={'/ticket'}> <button style={{backgroundColor:"green",marginLeft:"50px"}} >click here</button></Link>


<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<IMGBOX>
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIX4KjkZoquJ1WpXCosOfBvRDEWIg5x04UA&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn0N5PREswU-Qb8VSdkvTtEJ6aXe8OE0O0kw&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1687340059_mini_ooty.jpg.webp" alt="" />
<img  width={'200px'} height={'200px'} src="https://jyothik.com/wp-content/uploads/2024/09/Mini-Ooty-scaled-768x512.jpg" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm6DEGZqdxQVdqCjDr3tJy2Y0KfhkzKVt1sQ&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWAkGq7t83Vs_s-5AhPUptC-biFUA02WvEeA&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://i.ytimg.com/vi/nnhxi9ilCfo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCDoXzitmjMv0f-aD1UnYEL9DqHFA" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzbsPW-ykoblRICYuKai1tojdZZUwIUSYqcw&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqa8l-q3eZM_td3lIXN-GMCa1Wt6BJvSExmw&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-8OOmhitYJ5YkRZz3xPVuXfEJ5beL6N8NDQ&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://content3.jdmagicbox.com/comp/malappuram/w9/9999px483.x483.170607182105.r2w9/catalogue/mini-ooty-view-point-arimbra-malappuram-tourist-attraction-mqz6enyqm9.jpg" alt="" />
<img  width={'200px'} height={'200px'} src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/41/2c/6f/kottakunnu-park.jpg?w=300&h=300&s=1" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZ112lZkRExBBb-8ZiP_0XMOi_4BlSW86cQ&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://i.ytimg.com/vi/8YnA4Fx1344/maxresdefault.jpg" alt="" />
</IMGBOX>
<h1 style={{backgroundColor:"lightgreen"}}>ROUTE MAP</h1>

<IMG>IMAGE</IMG>
<a href="https://maps.app.goo.gl/d4KjmufEwWPUyPUW9">CLICK TO REVIEW MAP</a>


<h1 style={{backgroundColor:"lightgreen"}}>POPULAR RESORT NEARBY</h1>

<div  style={{width:"100%",height:"300px",backgroundColor:"red",display:'flex',alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",paddingLeft:"25px",}}>
<div><h3>Hotel Picnic</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/137170317.jpg?k=72821e833d2123ce524d601b3a4467a34527386a5f62d9f042e4b3abfd90fabc&o=&hp=1" alt="" />
</div>
<a href="https://www.vailankannihotels.com/">click to view</a>
</div>


   <div>
<h3>Hotel Cason International </h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtW7cbTMYfTniQsQXgO9cHHJnhP1Ek_TCx1w&s" alt="" />
</div>
<a href="https://www.booking.com/hotel/in/cason-international.en-gb.html?aid=356980&label=gog235jc-1FCAsobEITY2Fzb24taW50ZXJuYXRpb25hbEgzWANobIgBAZgBCbgBF8gBDNgBAegBAfgBDIgCAagCA7gCovm0uwbAAgHSAiQ0ZDUyYzliYy01MDI4LTQzZGItYTA1YS1mODg0NzRkODAxNTPYAgbgAgE&sid=4d1f5003b68185b5abb429c67ab5ab2f&all_sr_blocks=952946401_367855503_2_0_0&checkin=2024-12-27&checkout=2024-12-28&dest_id=-2101364&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=952946401_367855503_2_0_0&hpos=1&matching_block_id=952946401_367855503_2_0_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=952946401_367855503_2_0_0__179900&srepoch=1735212210&srpvid=483d501115ba00c5&type=total&ucfs=1&">click to view</a>
</div>


   <div><h3>
  
   Itsy Hotels Sapphire Residency
</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLWz99roBi7_3dPd9fnxms95yIne-yw_9M5w&s" alt="" />
</div>
<a href="https://www.treebo.com/hotels-in-manjeri/itsy-hotels-sapphire-residency-manjeri-3586/?checkin=2024-12-26&checkout=2024-12-27&hotel_id=3586&rateplan=EP&roomconfig=1-0&roomtype=oak&utm_campaign=gmblisting&utm_medium=gmb&utm_source=partnerships">click to view</a>
</div>


   <div><h3>Misty Green Hills Parks & Resorts</h3>
<div>
    <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUFqd8TOVL3Ql4b8z4M6r0CZ6YlfaZOFUaNw&s" alt="" />
</div>
<a href="https://mistygreenhills.com/">click to view</a>
</div>

</div>







<FOOT>
<h2>contact us for more info 9656756476</h2>
<h4>tourismkerala@gmail.com</h4>

</FOOT>

</div>
  )
}

export default Miniooty
