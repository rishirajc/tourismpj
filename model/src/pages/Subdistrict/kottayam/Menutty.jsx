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

const Menutty = () => {
  return (
    <div>
    <div>
        <img width={"100%"} height={"600px"} src="https://kerala.me/wp-content/uploads/2016/01/Kombaikani-Meenmutty-Waterfalls.jpg" alt="" />
    </div>
    <h1 style={{backgroundColor:"lightgreen"}}>About Meenmutty Falls</h1>
    <p>
    Meenmutty WaterFall is situated in Padinjarathara in Wayanad District, Kerala.[1] It is the largest waterfall in wayanad and it is a three-tiered waterfall with a height of 1000feet and it is on Banasura hills.[2] It can be accessed from Padinjarathara ;.[3] [4] Meenmutty waterfalls are dangerous during rainy seasons due to high inflow and many people have drowned since 1991.[5] Meenmutty falls is surrounded by Lush green tea plantations making the hike to the falls a memorable experience to the tourists.</p>
    <p>Tucked away deep in the verdant Western Ghats, approximately 45 km away from Thiruvananthapuram, the bustling capital of Kerala, lies the captivating Meenmutty Falls. This natural wonder cascades gracefully, offering a serene escape from the urban clamour. To reach this hidden gem, adventurers embark on an exhilarating journey through dense forests, where each step brings them closer to the unspoiled beauty of the waterfall.

The adventure begins with a scenic boat ride across the pristine Neyyar reservoir, meandering through its expansive catchment area. This tranquil voyage sets the stage for what lies ahead a trek that unfolds through the lush greenery and rugged terrain, guided by the murmurs of the Neyyar River. Along the way, trekkers pass by the KombaiKani tribal settlement, where a warm welcome awaits amidst the simplicity of tribal life.

The trek itself, approximately 5 km from KombaiKani, is a testament to Kerala's natural beauty, leading to the breathtaking Meenmutty Falls. Here, the cascading waters glisten under the sun, inviting visitors to pause and immerse themselves in the sights and sounds of untouched wilderness. Nearby, a forest camp house offers a welcoming refuge - a place to rejuvenate with a hearty meal, surrounded by the comforting embrace of nature.

Guided by knowledgeable forest guides, every step of the journey is enriched with insights into the region's rich biodiversity and cultural tapestry. Permission from the forest department ensures a responsible and respectful exploration of this ecologically sensitive area, preserving its natural allure for future generations.

Meenmutty Falls is not just a destination; it is a rendezvous with Kerala's soul-stirring landscapes, where adventure and tranquility converge seamlessly. Ideal for a day long expedition, the journey culminates as the sun begins its descent, with the boat gently ferrying visitors back from KombaiKani to Neyyar dam. It's an experience that leaves an indelible mark - a tale of exploration, discovery, and the untamed beauty of Kerala's Western Ghats.</p>





<div style={{fontSize:"30px",color:"red",marginBottom:"10px"}}>
<marquee behavior="scroll" width="100%" scrollamount="5" direction="right" >CHECK YOUR TICKET ONLINE(click here)</marquee>
</div>
<Link to={'/ticket'}> <button style={{backgroundColor:"green",marginLeft:"50px"}} >click here</button></Link>

<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<IMGBOX>

<img width={'200px'} height={'200px'}   src="https://media-cdn.tripadvisor.com/media/photo-s/09/6f/83/b9/meenmutty-waterfalls.jpg" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMmyTRRv4uF6rBj2_4iHfc5nCe_12CjU_PYw&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-KV0T239A9FQuO4rqbqMfMu6U17cOiZEeg&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://i.ytimg.com/vi/3v53zBy5UFs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA7cPZZOXbHxMp5YvJDChnsxvzXSg" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtNNiCEQZcsZQMHcvKCvA1_3eivAInWzZ3hA&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrPKG-HT-kkwhEzNbk9JC11Vi0_oQny8lHIQ&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27lmxxJZPx7IOYv8TzrcWvvHh_icZsj244g&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsHJI3CWnabuyTYGXw80d6VtyGQrBJhvwjEQ&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://www.keralatravels.com/userfiles/1476509279_meenmutty_waterfalls.jpg" alt="" />
<img width={'200px'} height={'200px'}   src="https://trip2kerala.com/wp-content/uploads/2022/01/1200px-Meenmutty_Falls_Wayanadsdvasdf-scaled-1.jpg" alt="" />
<img width={'200px'} height={'200px'}   src="https://wayanadtourism.co.in/images//tourist-places/meenmutty-waterfalls-wayanad/meenmutty-waterfalls-wayanad-india-tourism-photo-gallery.jpg" alt="" />
<img width={'200px'} height={'200px'}   src="https://kerala.me/wp-content/uploads/2016/01/Kombaikani-Meenmutty-Waterfalls.jpg" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7tvNhjPO2ac0g4ZHY6qXZltHIwTB4pDgSvw&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeMbAtNOfvK5AdeHuLJvQlHqReU6hMKC55Lg&s" alt="" />

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
  
  Rain Forest Ayur County Resort</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://r1imghtlak.mmtcdn.com/bb90ceae0ea911eb99b80242ac110002.jpg" alt="" />
</div>
<a href="https://rainforestayur.com/lander">click to view</a>
</div>


   <div>
<h3>Backwater Heritage Homestay</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://pix10.agoda.net/hotelImages/409/409346/409346_14100913320022644768.jpg?ca=3&ce=1&s=1024x768" alt="" />
</div>
<a href="https://www.backwaterheritage.com/">click to view</a>
</div>


   <div><h3>
  
   The Meenmutty Heights</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIHKaRKlsb0qe99YQb_OCcwiDLygnubykT2A&s" alt="" />
</div>
<a href="https://www.meenmutty.com/">click to view</a>
</div>


   <div><h3>MindFreeStation Home stay
   </h3>
<div>
    <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKIpcd4DgRcWlprMp6zLkuAJTzj_cq7m5D-A&s" alt="" />
</div>
<a href="https://mindfreestation.com/">click to view</a>
</div>

</IMGG>




<FOOT>
<h2>contact us for more info 9656756476</h2>
<h4>tourismkerala@gmail.com</h4>

</FOOT>

</div>
  )
}

export default Menutty
