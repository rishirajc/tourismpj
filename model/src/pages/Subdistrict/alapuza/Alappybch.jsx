import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import alp from '/src/pages/Subdistrict/alapuza/image/alappy.png'

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

const Alappybch = () => {
  return (
    <div>
    <div>
        <img width={"100%"} height={"600px"} src="https://www.thesanchari.com/wp-content/uploads/2023/09/alleppey-beach-800x600.jpg" alt="" />
    </div>
    <h1 style={{backgroundColor:"lightgreen"}}>About Alappuzha Beach</h1>
    <p>Alappuzha, often referred to as Alleppey, is a picturesque city in the state of Kerala, known for its intricate network of canals, backwaters, beaches, and lagoons. Often dubbed the 'Venice of the East,' Alappuzha is a popular tourist destination, especially famed for its houseboat cruises that offer an immersive experience of Kerala's enchanting backwaters. This coastal city provides a perfect blend of natural beauty, cultural heritage, and serene water-based activities.

<h3>Backwaters and Houseboat Cruises</h3>
The backwaters of Alappuzha are a labyrinthine network of interconnected canals, rivers, lakes, and inlets, stretching over 900 kilometers. These tranquil waterways are fringed with lush greenery, coconut palms, paddy fields, and quaint villages, creating a charming landscape. Exploring these backwaters on a traditional houseboat, known as a 'kettuvallam,' is a quintessential Kerala experience.

Houseboats in Alappuzha are well-equipped with modern amenities, offering comfortable and luxurious accommodations on the water. These floating marvels are traditionally crafted using eco-friendly materials like bamboo, coir, and wood, maintaining an authentic charm while providing a unique travel experience. As you glide through the serene backwaters, you can enjoy breathtaking views of the lush landscape, mirror-like waters, and vibrant village life. The tranquil environment is perfect for relaxation and unwinding.

Houseboat cruises often include delicious meals prepared on board, featuring traditional Kerala cuisine. Fresh seafood, spicy curries, and tropical fruits add to the culinary delight, offering an authentic taste of the region. During the cruise, you may have the opportunity to experience local culture and traditions. Interacting with villagers, witnessing traditional fishing methods, and enjoying local music and dance performances are some of the highlights. One of the most captivating experiences on a houseboat cruise is watching the sunset and sunrise over the backwaters. The changing hues of the sky reflecting on the calm waters create a magical and unforgettable scene.

<h3>Activities and Experiences</h3>
Alappuzha offers a range of activities that allow visitors to immerse themselves in the local culture and natural beauty:

Boat Races: Alappuzha is famous for its snake boat races, particularly the Nehru Trophy Boat Race. Held annually in August, this event features long, sleek boats rowed by teams of oarsmen in a thrilling competition that attracts visitors from all over the world.

Canoeing and Kayaking: For a more intimate experience of the backwaters, visitors can opt for canoeing or kayaking. These smaller vessels allow you to navigate the narrower canals and explore the hidden gems of the backwaters up close.

Village Tours: Guided village tours offer insights into the traditional lifestyle and culture of the local communities. Visitors can observe coir making, toddy tapping, and paddy cultivation, and interact with the friendly villagers.

Ayurvedic Treatments: Alappuzha is known for its Ayurvedic wellness centers, offering various treatments and therapies based on ancient healing practices. Visitors can indulge in rejuvenating massages, herbal baths, and wellness programs to relax and revitalize.

Accessibility and Accommodation
Alappuzha is well-connected by road, rail, and water. The nearest railway station is Alappuzha Railway Station, located within the city. The nearest airport is Cochin International Airport. Alappuzha is also accessible by bus and private vehicles, with good road connectivity to major cities in Kerala.

Accommodation options in Alappuzha range from luxury resorts and houseboats to budget hotels and homestays. Many of these establishments offer beautiful views of the backwaters and provide easy access to the city's attractions. Staying on a houseboat is a unique and memorable experience, allowing visitors to fully immerse themselves in the beauty of the backwaters.

<h3>Best Time to Visit</h3>
The best time to visit Alappuzha is from October to March, when the weather is cool and pleasant, making it ideal for houseboat cruises and outdoor activities. The monsoon season (June to September) brings heavy rainfall, enhancing the lush greenery but may limit some activities. However, the monsoon period is also a beautiful time to experience the backwaters in their full splendor.

Alappuzha, with its enchanting backwaters, vibrant culture, and delightful landscapes, offers a unique and unforgettable travel experience. Whether you are cruising through the tranquil waters on a houseboat, exploring the picturesque canals, or immersing yourself in the local culture, Alappuzha provides a perfect blend of relaxation, adventure, and natural beauty.</p>
    <p>Alappuzha Beach is a beach in Alappuzha town and a tourist attraction in Kerala, India.[1] Beach has an old pier which extend to sea is over 150 years old.[2] Alappuzha beach host many events annually like Alappuzha beach festival,[3] Sand art festival[4] and many more.

<h3>Overview</h3>
Alappuzha beach is one of the major tourist spot in Alappuzha town. Alappuzha Lighthouse situated near to the beach.[5] Beach is accessible through various town roads and an elevated highway will passing by the beach as part of Alappuzha bypass in order to preserve the beauty of the area.[6] Camel safaris was another attraction in beach which introduced a couple of years ago but it got banned by authorities.[7]
<h3>
Events in Alappuzha beach</h3>
Alappuzha beach festival is a famous event organised as part of new year celebration. It's organised as an annual event in every year. Thousands of people gathers in the event includes from other district.[3] Kerala's first international sand art festival and competition held on April 26-2015 in Alappuzha beach. Many national and international sand artists participated in event. The state tourism department and the Alleppey Foundation has jointly organised the event.[8]

<h3>Local Attractions</h3>
Alappuzha Lighthouse
Vijay Park
Sea View Park[9]
Alappuzha Bypass
Jain Temple</p>
    









<div style={{fontSize:"30px",color:"red",marginBottom:"10px"}}>
<marquee behavior="scroll" width="100%" scrollamount="5" direction="right" >CHECK YOUR TICKET ONLINE(click here)</marquee>
</div>
<Link to={'/ticket'}> <button style={{backgroundColor:"green",marginLeft:"50px"}} >click here</button></Link>

<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<IMGBOX>

<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfpewNM2I70OsTjd33gMT9ajJCs-FCWw3wkQ&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://i.ytimg.com/vi/VSGXAc1cMBQ/maxresdefault.jpg" alt="" />
<img width={'200px'} height={'200px'}   src="https://i.ytimg.com/vi/WRVRDzaQodg/sddefault.jpg" alt="" />
<img width={'200px'} height={'200px'}   src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/f4/b0/b7/alappuzha-beach.jpg?w=600&h=-1&s=1" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkLbnA4M1FY-GJ4aw14cf-JvDjYCvN2tgFFQ&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_f1MH6mAMB3kA1oVduTjUWgTPRIPwZPOYkg&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRriHE_fQSyvlwRYGKyMG9T_zvxM-tjuN14uQ&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbH31HoiaZNmASaJ32eLBetC8xeg33bbFHkQ&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1XzL9TYJQK89enX-en_0UrtywwUnVKbMjg&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://thetravelingca.com/wp-content/uploads/2020/08/IMG_20191121_180428-01-1024x634.jpeg" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_sWHGYIJHijqlhkMfGuu615TRQhq5eMww9g&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVHdw0ThQzzD2ql8SGbS50lOYdpBz4Kf95Q&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYWnOzCp-gyy2eE_Ct2ykyasxMpnk6Y6vfwA&s" alt="" />
<img width={'200px'} height={'200px'}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLMj1VZNmPEjLHcBAjV22eiWqMz8W2BswWw&s" alt="" />

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
   Baywatch Beach Resort</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR37-Kbop8Sw-1UNuQet3_4vEmkroX4d5YvOA&s" alt="" />
</div>
<a href="https://baywatchbeachresortalleppey.com/alleppey-beach-resort-booking.html">click to view</a>
</div>


   <div>
<h3>Alleppey Beach Resorts</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXB7hdtQfDeLkk9YyJ60UA6-LjgZnHEqo6Qg&s" alt="" />
</div>
<a href="https://www.thealleppeybeachresorts.com/">click to view</a>
</div>


   <div><h3>
  
   Palm Beach Resort & Cafe by UTH</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/3a/ba/ff/palm-beach-homestay.jpg?w=300&h=-1&s=1" alt="" />
</div>
<a href="https://alleppeypalmbeachresort.com/">click to view</a>
</div>


   <div><h3>Haven Alleppey Beach Villa</h3>
<div>
    <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbQ1eauzXDe2iXNhGkGTcUJI7XI2yZeO_sNw&s" alt="" />
</div>
<a href="https://www.havenbeachvilla.com/">click to view</a>
</div>

</IMGG>




<FOOT>
<h2>contact us for more info 9656756476</h2>
<h4>tourismkerala@gmail.com</h4>

</FOOT>

</div>
  )
}

export default Alappybch
