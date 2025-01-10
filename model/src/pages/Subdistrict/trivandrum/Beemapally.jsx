import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tri from '/src/pages/Subdistrict/trivandrum/image/beema.png'

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
const Beemapally = () => {
  return (
    <div>
    <div>
        <img width={"100%"} height={"600px"} src="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Flarge-desktop%2Fbeemapally-uroos-1733148626_33e3dbe768883c7b9fde.webp&w=1920&q=75" alt="" />
    </div>
    <h1 style={{backgroundColor:"lightgreen"}}>About Beemapally</h1>
    <p>The Beemapally Dargah Shareef hosts what is by far one of the most important and vibrant cultural festivals of the capital city of Kerala - the Chandanakudam Festival or Beemapally Urus. Located in Thiruvananthapuram, this important place of worship is dedicated to Sayyidhathunissa Beema Beevi, a pious Muslim. It is said that she had immense spiritual powers and healing powers. The 11 day festival is celebrated to commemorate her death anniversary and that of her son Ashaikhu Sayidushaheed Maheen Aboobaker. They were both laid to rest at the Dargah Shereef. It is widely believed that they belonged to the family of the Prophet Mohammad. 

According to legends passed down through generations, the mother-son duo had travelled to India from Arabia to spread the teachings of Islam. Being descendants of ‘hakims’ or traditional physicians, they quickly gained popularity owing to their healing capabilities and generous nature. Over time the number of believers increased and they all chose to settle down in the surrounding areas. In fact, it is believed that ever since they were buried on the premises of the mosque, miracles have happened. On of the most commonly known occurrences is that the two wells in the vicinity, both of which are said to have been around in Beevi’s time, have healing powers.

The bright pink mosque attracts visitors from far and near irrespective of religious beliefs. The mosque is said to have been constructed in the 15th-16th century but the mausoleum of Beema Beevi and her son is believed to have existed much before the mosque. 

Every year, the celebrations of the Beemapally Roos start with the hoisting of the festival flag at the beginning of Jama dul Akbar of the Hijra calendar. A colourful festival, the highlight of the Chandanakudam Mahotsavam is that earthen pots (kudams) filled with coins are brought by devotees from far and wide as offerings. These pots are covered with Chandana, the local parlance for sandal wood paste. Hence the name ‘Chandanakudam’. The festival also offers the perfect opportunity to witness indigenous art forms like the Daharamuttu (a performance done with a sword) that is performed within the mosque.

The Beemapally Urus or Chandanakudam Mahotsavam is much more than just a religious festival. It is a celebration of community, culture and faith that has withstood the test of time and transcends the boundaries of caste and creed. </p>
    <p>Beemapally is a region within the city of Thiruvananthapuram in the state of Kerala, India. Beemapally is famous for its mosque, Beemapally Dargah Shareef, which houses the tomb of Syedunnisa Beema Beevi, a woman believed to have divine powers, and her son Syedu Shuhada Maheen Abubacker. Every year, Uroos is held in the name of Maheen (RA), the son of Beema Beevi(RA).which attracts thousands of pilgrims from all faiths and castes. The tomb of Beema Beevi, the lady with miraculous powers who is believed to belong to the Prophet Mohammed’s family, is located at the mosque.</p>
    <p><h3>Inauguration</h3>
    Quaid-E-Millat M. Muhammad Ismail, the first president of Indian Union Muslim League, laid the foundation stone of Beemapally Mosque. The design and construction of the mosque were executed by G. Gopalakrishnan, a famous architect who designed over 100 mosques in the state of Kerala.</p>
<p> <h3>Annual Urus</h3>
Beemapally Mosque is famous for its annual urus, which attracts scores of pilgrims from all walks of life. The festival, which marks the death anniversary of Syedunnisa Beema Beevi, starts on the first day of Islamic month Jumada al-Akhir (Arabic:  جُمَادَىٰ ٱلْآخِر, romanized: Jumādā al-ʾĀkhir) and continues for the next ten days.[3] The celebration begins with the hoisting of the customary flag of the mosque in front of the elders and other devotees. The devotees carry money in pots adorned with flowers and incense sticks. The pot’s opening is swathed in white cloth, and a garland is fastened around the neck. The pots are daubed with sandal paste, which is why the festival is called Chandanakudam (sandal pot). Many religious discussions are held in the mosque, art forms like duffmuttu are performed, and Islamic devotional songs are performed outside the mosque. On the final day of Chandanakudam Mahotsavam, a flag from Beema Bibi’s grave is taken; there is a grand procession with caparisoned elephants and the music of the panchavadyam (five instruments).</p>


<h2 style={{backgroundColor:"lightgreen"}}>HOW TO REACH:</h2>
   <div style={{width:"100%",height:'300px',display:'flex',alignItems:"center",justifyContent:"space-around",flexWrap:"wrap"}}>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p><h3>By Air </h3>
    Thiruvananthapuram International Airport, about 7 km away.</p> </div>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p><h3>By Train </h3>
    Thampanoor Railway Station, about 7 km away</p> </div>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p> <h3>By Road</h3>
    East Fort Bus Stand, about 7 km away.</p> </div>
   </div>



<div style={{fontSize:"30px",color:"red",marginBottom:"10px"}}>
<marquee behavior="scroll" width="100%" scrollamount="5" direction="right" >CHECK YOUR TICKET ONLINE(click here)</marquee>
</div>
<Link to={'/ticket'}> <button style={{backgroundColor:"green",marginLeft:"50px"}} >click here</button></Link>

<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<IMGBOX>
<img  width={'200px'} height={'200px'} src="https://i0.wp.com/beemapally.org/wp-content/uploads/2021/08/beemapally000.jpg?w=800&ssl=1" alt="" />
<img  width={'200px'} height={'200px'} src="https://i0.wp.com/beemapally.org/wp-content/uploads/2021/08/beemapally001.jpg?w=800&ssl=1" alt="" />
<img  width={'200px'} height={'200px'} src="https://i0.wp.com/beemapally.org/wp-content/uploads/2021/08/beemapally006.jpg?w=800&ssl=1" alt="" />
<img  width={'200px'} height={'200px'} src="https://i0.wp.com/beemapally.org/wp-content/uploads/2021/08/beemapally003.jpg?w=800&ssl=1" alt="" />
<img  width={'200px'} height={'200px'} src="https://i0.wp.com/beemapally.org/wp-content/uploads/2021/08/beemapally002.jpg?w=800&ssl=1" alt="" />
<img  width={'200px'} height={'200px'} src="https://i0.wp.com/beemapally.org/wp-content/uploads/2021/08/beemapally005.jpg?w=800&ssl=1" alt="" />
<img  width={'200px'} height={'200px'} src="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fmobile%2Fbeemapally-uroos-1733148642_4baffc3843b15a3db507.webp&w=3840&q=75" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlRMmmnGDVYxZraetPl6PXzJkP8DQcVzmMDA&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThwo9PfVo0_LXXPutosBvq8MQq-ytW-4k1AQ&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9cHpEr8FbIgBMEDsCS2p6gHSwo0KvldQ_A&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrYAlOX0Lwqbln1ypeOyGLols9vVB7AtL-ZQ&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc5G8SNsVLQ0JcJ-cnVJEPZO61d2hxCsOTw&s" alt="" />
<img  width={'200px'} height={'200px'} src="https://i0.wp.com/beemapally.org/wp-content/uploads/2021/08/beemapally001.jpg?ssl=1" alt="" />
<img  width={'200px'} height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtzG49Gbc5vhwWuRjXipJyMN5d4w8T64QUw&s" alt="" />
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
   Travancore Island Resort</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIRkzq2X0U6ssVNxnWhzfomwwCQUeSAm3F-w&s" alt="" />
</div>
<a href="https://travancoreislandresorts.com/">click to view</a>
</div>


   <div>
<h3>Maram Resort</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://kondodyhotels.com/images/resorts/maram/maram-banner-01.jpg" alt="" />
</div>
<a href="https://kondodyhotels.com/maram-resort-mamalakandam.html">click to view</a>
</div>


   <div><h3>
   Lagoona Beach Resort</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5oGn5EBXXCdDiDc5eMZHu05HZsWf6lKOGpA&s" alt="" />
</div>
<a href="https://lagoonabeachresort.com/">click to view</a>
</div>


   <div><h3>Beach & Lake Ayurvedic Resort
   </h3>
<div>
    <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://www.beachandlakeresort.com/uploads/4/1/0/4/41049699/building-in-the-island-side.jpg" alt="" />
</div>
<a href="https://www.beachandlakeresort.com/">click to view</a>
</div>

</IMGG>




<FOOT>
<h2>contact us for more info 9656756476</h2>
<h4>tourismkerala@gmail.com</h4>

</FOOT>

</div>
  )
}

export default Beemapally
