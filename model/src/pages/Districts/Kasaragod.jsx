import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import img1 from '../images/kasaragod.png'
import fot from "/src/image/footok.png"

const IMG=styled.div`
display: flex;
align-items: center;
justify-content:space-around;
flex-wrap: wrap;
height: 1300px;
cursor: pointer;
    transition: transform 20s ease;
  :hover {
    transform: scale(0.9);
  }

`
const FIN=styled.div`
margin-top:-20px;
height: 250px;
background-color: #0087fd;

`
const LAST1=styled.div`
    height: 518px;
    background-color: #78a9d4;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: -33px;

  
`

const Kasaragod = () => {

useEffect(()=>{

  window.scrollTo(0, 0);
},[])

  return (
    <div>
      <div style={{width:"100%",height:"600px"}}>
      <iframe  width="100%" height="600px" src="https://www.youtube.com/embed/A2wFykGahN4?si=zZBjPacZNQNPOjCU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>      </div>
     <div style={{backgroundColor:"#78a9d4",paddingTop:"86px"}}>

   
      <h1  style={{marginLeft:"37%",paddingTop:"5px",fontFamily:'math'}} >ABOUT KASARAGOD</h1>
      <p>Kasaragod (Malayalam: [kaːsɐrɐɡoːɖɨ̆]) is a municipal town and administrative headquarters of Kasaragod district in the state of Kerala, India. Established in 1966, Kasaragod was the first municipal town in the district. It is the northernmost district of Kerala and is also known as Sapta Bhasha Sangama Bhumi ('The Land of seven Languages').[1]

Situated in the rich biodiversity of Western Ghats, it is known for the Chandragiri and Bekal Fort,[5] Chandragiri River, historic Kolathiri Rajas, natural environment of Ranipuram and Kottancheri Hills, historical and religious sites like the Madiyan Kulom temple, Madhur Temple, Ananthapuram Lake Temple and Malik Deenar Mosque. The historic hill of Ezhimala is located on the southern portion of Kavvayi Backwaters of Nileshwaram.

Kasaragod is located 90 km north of Kannur city corporation and 50 km south of the Mangalore. Kasaragod district has the maximum number of rivers in Kerala - 12.[6] The town is located on the estuary where the Chandragiri River, which is also the longest river in the district, empties into the Arabian Sea. Kasaragod is home to several forts, including Arikady fort, Bekal Fort, Chandragiri Fort, and Hosdurg Fort. Bekal Fort is the largest fort in Kerala. Talakaveri, which is home to Talakaveri Wildlife Sanctuary where the 805 km long Kaveri river originates, is located closer to Ranipuram on the Kerala-Karnataka border.

Robert Caldwell describes the extent of Malayalam in the 19th century as extending from Chandragiri (fort and river) in the north to Neyyar river beyond Thiruvananthapuram in the south and from Malabar Coast in the west to Western Ghats in the east besides the inhabited islands of Lakshadweep in the Arabian Sea.[7][note 1]</p>
      
       <h2   style={{width:"350px",marginLeft:"45%",paddingTop:"5px",fontFamily:'math'}}>HISTORY</h2>
       <p>Ancient era

Ananthapadmanabhaswamy temple at Ananthapura, Kumbla
The ancient Tamil works of the Sangam Age record that the area covering the district was part of Puzhinadu which consists of the coastal belt from Kozhikode to Mangalore. Politically the area was part of the Ezhimala Kingdom with its capital at Ezhimala in present-day Kannur district. The most famous king of Ezhimala was Nannan whose kingdom extended up to Gudalur and northern parts of Coimbatore. Poozhinad, along with Karkanad which included the eastern regions of Ezhimala dynasty (Wayanad-Gudalur region with some portions of Kodagu), had its capital at Ezhimala. The Mooshaka kings were considered descendants of Nannan. By the 14th century, Mooshaka Kingdom was known as Kolathirinad and the rulers as Kolathiris. The Kolathunad Kingdom at the peak of its power reportedly extended from Netravati River (Mangalore) in the north[16] to Korapuzha (Kozhikode) in the south with Arabian Sea on the west and Kodagu hills on the eastern boundary, also including the isolated islands of Lakshadweep in Arabian Sea.[17]

 <h4  style={{width:"350px",marginLeft:"45%",paddingTop:"5px",fontFamily:'math'}} >Medieval era</h4>
 <p>
 Malik Dinar Mosque, Thalangara, Kasaragod, is one of the oldest mosques in India.

Maipady palace
Kasaragod, about 50 km south of Mangalore city, was an important centre of trade in earlier times. Ramacharitam, probably the oldest literary work written in Old Malayalam, which dates back to the 12th century CE, is thought to have written in Kasaragod district as its manuscripts were discovered from Nileshwaram and the poem mentions about Ananthapura Lake Temple in Kumbla in detail.[18] Kasaragod was known to the Arabs by the name Harkwillia.[12] The Malik Dinar Mosque in Kasaragod town is one of the oldest Masjids in the Indian subcontinent.[19] According to Qissat Shakarwati Farmad, the Masjids at Kodungallur, Kollam, Madayi, Barkur, Mangalore, Kasaragod, Kannur, Dharmadam, Panthalayini, and Chaliyam, were built during the era of Malik Dinar, and they are among the oldest Masjids in the Indian subcontinent.[20] It is believed that Malik Dinar died at Thalangara in Kasaragod town.[19] Many Arab travelers visiting Kerala between the 9th and the 14th centuries visited Kasaragod, being an important trade centre then. Duarte Barbosa, a Portuguese traveler who visited Kumbla, near Kasaragod Town in 1514 recorded that rice being exported for coir to Maldives.[12] According to Barbosa, the people in the southwestern Malabar coast of India from Chandragiri in the north to Kanyakumari in the south spoke a unique language, which they called as "Maliama" (Malayalam).[21][22]

Until the 16th century CE, Kasaragod town was known by the name Kanhirakode (may be by the meaning, 'the land of Kanhira trees') in Malayalam.[9] The Kumbla dynasty, who swayed over the land of southern Tulu Nadu wedged between Chandragiri River and Netravati River (including present-day taluks of Manjeshwar and Kasaragod) from Maipady Palace at Kumbla, had also been vassals to the Kolathunadu kingdom of North Malabar, before the Carnatic conquests of Vijayanagara Empire.[23] The Kumbla dynasty had a mixed lineage of Malayali Nairs and Tuluva Brahmins.[11] They also claimed their origin from Cheraman Perumals of Kerala.[11] Francis Buchanan-Hamilton states that the customs of Kumbla dynasty were similar to those of the contemporary Malayali kings.[11]

The Kolathiri Dominion emerged into ten independent principalities, i.e. Kadathanadu (Vadakara), Randathara or Poyanad (Dharmadom), Kottayam (Thalassery), Nileshwaram, Iruvazhinadu (Panoor), Kurumbranad etc., under separate royal chieftains due to the outcome of internal dissensions.[24] Many portions of the present-day Hosdurg taluk (Kanhangad) and Vellarikundu were parts of the Nileshwaram dynasty, who were relatives to both Kolathunadu as well as Zamorin of Calicut, in the early medieval period.[25] The areas north to the Chandragiri river (present-day Taluks of Manjeshwaram and Kasaragod) were ruled by the Kumbala dynasty.[11]

The Chandragiri Fort is built on the southern bank of the estuary of Chandragiri River, just opposite to Kasaragod town. The Bekal Fort at Bekal, Pallikkara, which is situated midway between Kasaragod and Kanhangad, and which is largest fort in Kerala, was built in 1650 by Shivappa Nayaka of Keladi.[26]
 </p>





 <h4  style={{width:"350px",marginLeft:"45%",paddingTop:"5px",fontFamily:'math'}} >Colonial era</h4>
<p>A map of Malabar District (Malayalam district) drawn by Francis Buchanan-Hamilton in 1807. A portion of Kasaragod taluk of erstwhile British South Canara district to the south of Payaswini/Chandragiri river was also included in Malayalam region (just above the blue shaded region).
Francis Buchanan, the family doctor of Arthur Wellesley, visited Kasaragod in 1800.[12] In his travelogue, he recorded information on places like Athiraparambu, Kavvayi, Nileshwaram, Bekal, Chandragiri and Manjeshwar.[12]

Hosdurg and Vellarikundu was part of Kolathunadu (south of Chandragiri river) and Kasaragod and Manjeshwaram was in the Tulu Nadu region (north of Chandragiri river).[27][28]

In 1763, Hyder Ali raided Bedanoor (Bidnur), the capital of the Ikkery Naiks. His son Tippu Sultan raided much of Malabar region in Kerala. As per the Treaty of Seringapatam of 1792, Tippu surrendered Malabar, except Kanara to the British. The British occupied Kanara only after the death of Tippu Sultan.[12] it is said that Kinavoor Molom (Sree Dharma Shashtha Temple) is belonging to Karinthalam (one of 64 Brahmin villages in old Kerala). Initially South Canara was placed under the Bombay presidency.[29] Later on 16 April 1862, South Canara was transferred to Madras Presidency and Kasaragod taluk was formed by replacing the erstwhile Bekal taluk.[29] Kasaragod was the second-most populated Taluk in South Canara only after to Mangalore taluk, and also the second-largest Taluk.[30]</p>


</p>
<p>
 <h4  style={{width:"350px",marginLeft:"44%",paddingTop:"5px",fontFamily:'math'}}>Post-Independence</h4>

Road sign in Kasaragod town
Before the formation of Kerala, Kasaragod was a part of South Canara district of erstwhile Madras Presidency. However, in the 19th century CE, Kasaragod Taluk witnessed many struggles to separate the region from South Canara and to merge it with the Malabar District as it was the only Malayalam-majority region in South Canara. Kasaragod became a part of Kannur district of Kerala following the reorganization of states and the formation of Kerala on 1 November 1956.[31] Later Kasaragod was divided into two taluks for the ease of administration - Kasaragod and Hosdurg. Kasaragod was declared a district in 1984. The inclusion of Kasaragod with Kerala has been a contentious issue as there is a sizeable population that speaks Tulu and Kannada. At the time of 1951 Census of India, only 72.0% of the district's population chose their mother tongue as Malayalam.[32] 14.2% chose Tulu and 6.3% chose Kannada.[32] But it is noted that as per the 2011 census report only 8.8% and 4.2% of the total population in the district speak Tulu and Kannada respectively as their mother tongue. In 2012, the Second Oommen Chandy ministry appointed a commission under the leadership the former Chief Secretary P. Prabhakaran to study about the backwardness and issues faced by this northernmost district of Kerala and to draw up special package for the district.[33] In 2013, two more Taluks, namely Manjeshwaram and Vellarikundu were formed in the district.[34]
</p>
</div>

<h1  style={{width:"350px",marginLeft:"45%",paddingTop:"5px",fontFamily:'math',textDecoration:"underline"}} >ROUTE MAP</h1>
<div style={{width:'400px',height:'400px',backgroundColor:'ActiveBorder',marginLeft:"35%"}}>
 <img  style={{width:'500px',height:'400px',boxShadow:"1px 1px 20px rgb(202,189,189)"}} src={img1} alt="" />
</div>
<div width={'100%'} height={'100px'} style={{marginLeft:"47%"}}>
<a href="https://maps.app.goo.gl/jcHaaeBSvbJpqyTVA">click to open map</a>

</div>


<h1   style={{marginLeft:"39%",fontFamily:'math',textDecoration:"underline"}}>MAJOR ATTRACTIONS</h1>

<IMG>
  <Link to={'/rani'}>  <img  height={"450px"} width={"400px"}style={{marginTop:"80px",borderRadius:'18px'}}src="https://decodemalayalam.com/wp-content/uploads/2024/05/Add-a-subheading.jpg" alt="" /></Link> 
  <Link to={'/bakelfort'}> <img  height={"450px"} width={"400px"}style={{marginTop:"80px",borderRadius:'18px'}} src="https://static.toiimg.com/photo/53095543.cms" alt="" /></Link>
  <Link to={'/anandhapuram'}><img  height={"450px"} width={"400px"}style={{marginTop:"80px",borderRadius:'18px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs0m0tQ3tc2RmyWqBKm_J3fjcE4ZVXblKR0g&s" alt="" /></Link>
  <Link to={'/kappil'}><img  height={"450px"}  width={"400px"}style={{marginTop:"80px",borderRadius:'18px'}} src="https://i.ytimg.com/vi/IG2U0Umqbk0/maxresdefault.jpg" alt="" /></Link>
  <Link to={'/chandragiri'}><img  height={"450px"} width={"400px"}style={{marginTop:"80px",borderRadius:'18px'}} src="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Flarge-desktop%2Fchandragiri-fort-and-river-1721744708_e2d7a6dc88ebe3588070.webp&w=1920&q=75" alt="" /></Link>
  <Link to={'/maliq'}><img height={"450px"} width={"400px"}style={{marginTop:"80px",borderRadius:'18px'}} src="https://i.ytimg.com/vi/C_4LuIQcVos/maxresdefault.jpg" alt="" /></Link>
 </IMG>
  <p className="headt">Follow us on :</p>
        <LAST1>
            <div className='box' >  <img  style={{borderRadius:"18px"}}  width={"100%"} height={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBLj1PbSrMAbL2in3vFChhGTJxdWAqtBrHOw&s" alt=""  />  <p className="font">BRDC</p> </div>
            <div className='box' ><img style={{borderRadius:"18px"}}  width={"100%"} height={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIH5lcnZwinn-A222bxlFt9NMcivr9kMTGdQ&s" alt="" /> <p className="font">DTPC</p> </div>
            <div className='box'  ><img  style={{borderRadius:"18px"}}  width={"100%"} height={"100%"} src="https://www.jellyfishwatersports.com/wp-content/uploads/2018/11/KATPS.png" alt="" /> <p className="font">KATPS</p> </div>
            <div className='box'   ><img style={{borderRadius:"18px"}}  width={"100%"} height={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJf2JkDIgB2ZCxdggw9vk7SsA02mhlSKvc6A&s" alt="" /> <p className="font">KITTS</p> </div>
            <div className='box'  ><img  style={{borderRadius:"18px"}}  width={"100%"} height={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCU06kY8ubBkEQoQh4UhGt8O3uGzaJmnsziA&s" alt="" /> <p className="font">KTDC</p> </div>
      

        </LAST1>
        <FIN>

       <img className="imgfot" src={fot} alt="" />
           </FIN>

    </div>
  )
}

export default Kasaragod
