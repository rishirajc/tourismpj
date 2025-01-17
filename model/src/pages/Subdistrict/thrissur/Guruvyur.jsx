import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import thr from '/src/pages/Subdistrict/thrissur/image/guru.png'

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
const Guruvyur = () => {
    useEffect(()=>{
    
        window.scrollTo(0, 0);
      },[])
  return (
    <div>
    <div>
        <img width={"100%"} height={"600px"} src="https://blog.yatradham.org/wp-content/uploads/2020/01/Guruvayur-Temple-Timings.jpg" alt="" />
    </div>
    <h1 style={{backgroundColor:"lightgreen"}}>About Guruvayur Temple</h1>
    <p>Guruvayur Temple is a Hindu temple dedicated to Guruvayurappan (four-armed form of the Vishnu), located in the town of Guruvayur in Kerala, India. Administrated by the Guruvayur Devaswom Board, it is one of the most important places of worship for Hindus in Kerala and Tamil Nadu and is often referred to as Bhuloka Vaikunta (Holy Abode of Vishnu on Earth).[2] The temple is classified among the 108 Abhimana Kshethram of Vaishnavate tradition.

The central icon is a four-armed standing Vishnu carrying the conch Panchajanya, the discus Sudarshana, the mace Kaumodaki, and a lotus with a tulasi garland. This image represents the form of Vishnu as revealed to Krishna's parents Vasudeva and Devaki around the time of his birth. Worship proceeds according to routines laid down by Adi Shankara and later written formally in the Tantric way, the inter-religious spiritual movement that arose in medieval India, by Chennas Ravinarayanan Nambudiri (1427-1527), whose descendants are the hereditary tantris (high priests) of the Guruvayur Temple.[3]

The temple is managed by a special administrative authority under the control of the Government of Kerala. The main festivals of this temple are the 10-day festival in the Malayalam month of Kumbham starting with flag hoisting on Pooyam star,[4] Krishna Janmashtami (Birthday of Krishna) in the month of Chingam,[5] Ekadasi (11th day) in the shukla paksha (bright fortnight) in the month of Vrischikam, popularly called as the Guruvayur Ekadasi[6] and Vishu on the first day of the month of Medam, once a harvest festival.[5]

The temple's sub-deities are Ganapathi, Ayyappan, and Bhagavathi (Who is given more importance), and there are two sub-temples, one for Ganapati and the other for Nagadevathas Snake deities nearby the temple. All non-Hindus are prohibited from entry within the Guruvayur Temple.</p>
    <p>Considered to be one of the oldest and most revered temples in India Guruvayur Temple in Kerala is also widely renowned as the Dwaraka of the South (Dwaraka is Lord Krishna’s place of birth). Located in the cultural capital of the state, Thrissur, the main deity here is Lord Krishna. 

Constructed in the traditional Kerala style of architecture, the temple is in itself a sight to behold. The walls of the sanctum sanctorum adorned with ancient murals from the 17th century evoke much awe amid visitors as do the structures like the Balikkal (sacrificial stone), Deepastambam (pillar of lights) and most importantly, the Nalambalam (temple structure surrounding sanctum sanctorum). One of the most popular pilgrimage destinations in the entire nation, it is believed that the central shrine of the temple was reconstructed in the year 1638 C.E. The history of the place is beautifully and artistically depicted in the architectural style and every individual element inside the temple. 

The temple stands facing the East with a Gopuram (tower) each on the East and the West. While the one on the East is called the Kizhakkenada, the one on the west is called the Padinjarenada. The pillars of light called the ‘Deepasthambam’ are located in the front and East side of the Nalambalam, a square shaped column. The Deeepasthambam on the eastern side stands 24 feet high and has thirteen circular receptacles. When completely lit up, it is a magnificent sight to behold. The Dwajasthamba, a 70ft tall flag staff which is fully covered in gold is yet another famous sight at the temple. The idol of Lord Krishna is placed inside the Garbhagriha which is located inside the inside the square shaped Sreeekovil. The Sreekovil also has two stairs and three other rooms as well. Inside the temple, one can also see the images of Lord Ayyappa, Edathedathu Kavil Bhagavathy and Ganapathy. 

The Thulabharam is one of the most popular offerings at Guruvayur Temple. In this ritual, devotees are weighed against jaggery, coconuts, sugar or bananas on a giant set of scales. This quantity is then given to the Lord as an offering. The temple is also one among the most popular wedding destinations in the state. 

The annual festival of the temple falls during Feb-March and is celebrated with much pomp and frolic but this is not the only prominent festival here. Other celebrations like the Guruvayur Ekadasi, Ashtamirohini, Vaishakam etc. are amid the other popular festivals at this temple. 

The one festival that evokes curiosity though is the Guruvayur Aanayottam (elephant race). The festival is just as incredible as it sounds. The largest land mammal on earth is put up against each other in a race. 

The practice is said to have started back in the times of the ancient Zamorin and King of Cochin. To this day, every year, these massive animals race head to head. It is this Aanayottam ritual that marks the start of the annual Guruvayur festival. The winner of the elephant race is the one that gets chosen to carry the Thidambu (the replica of the idol of Guruvayoorappan) for the rest of the festivals and special occasions of the year. 

The Guruvayur Ekadasi festival is yet another auspicious time at the temple that draws people from far and wide. Ekadasi or the 11th day of the lunar fortnight is considered important for Hindus. The month long Ekadasi festival at the temple has several important rituals that are conducted. The most important among them is the udayastamana pooja (dawn-to-dusk pooja) and the Carnatic music festival conducted over 11 days. This festival is conducted as a tribute to the legendary Carnatic musician- Chembai Vaidyanatha Bhagavatar. 
</p>
    <h3>Legend</h3>
    <p><h4>Guruvayur Mahatmyam – early legend</h4>

Guruvayur temple entrance
According to legend, the king Janamejaya conducted a sacrifice to destroy all the snakes of the world including Takshaka, who was the cause of his father Parikshit's death. Hundreds of thousands of snakes fell into the sacrificial fire and were killed, but the sacrifice was stopped by a Brahmin called Astika, before Takshaka was killed.[7]

Since Janamejaya was responsible for the death of millions of snakes, he was afflicted with leprosy. He lost all hope of a cure. One day Sage Atreya (son of Atri) came before Janamejaya and told him to take refuge under the feet of Krishna at Guruvayur. Atreya told him that in the temple at Guruvayur the effulgence of Hari is at its best and Vishnu showers his blessings on all devotees. He immediately rushed there and spent the next ten months worshipping the god of Guruvayur. At the end of ten months, he returned home healthy and took the astrologer to task for making a false prediction. The astrologer told him that he would find the mark of a snakebite on his left leg. He had escaped death only because he was at that time in a temple where Ananta (the king of serpents) was present and Ananta was the brother to the deity at Guruvayur where he had finished worshipping.[7]

The king then decided to build a full-fledged temple at Guruvayur. In time, this temple came to be downgraded and reduced to poverty during the days when Kerala was ruled by the Perumals. The Perumal rulers were mostly Shaivites and did not extend their patronage to Vaishnavite shrines. The Shiva temple at Mammiyur received their patronage and with the shift of royal patronage, the worshippers also moved to the Shiva temple. The Guruvayur temple was thus reduced to utmost poverty. However, one day, a holy man went to the Mammiyur temple for food and hospitality for the night. Though the temple was affluent, the temple authorities pretended they had nothing and scornfully directed him to the neighbouring Guruvayur temple. When the holy man entered the precincts of that temple, he was courteously received by a Brahmin boy and sumptuously fed. The holy man was very much pleased and he pronounced a blessing. According to the legend, Mammiyur Siva temple began to decline, and the fortunes of Guruvayur Vishnu temple progressed from strength to strength.[8]</p>
    <h2>History</h2>
    <p> <h3>Pre-colonial age</h3>
In the 14th century, the Tamil literature "Kokasandesam" refers to a place named "Kuruvayur" and in the 16th century (fifty years after Narayaniyam was composed) there are also multiple references to Kuruvayur[by what?]. In Old Tamil, "kuruvai" means "sea", hence the village on the Malabar Coast may be called Kuruvayur.[9]

The earliest temple records date back to the 17th century. The earliest mention of the many important Vishnu temples of Kerala are found in the songs of Alvars, the Tamil poet-saints, whose time-line is not exactly fixed.[10] However, by the end of 16th century, Guruvayur had become the most popular pilgrimage centre in Kerala.

<h3>Colonial age</h3>
See also: Guruvayur Satyagraha
In 1716, the Dutch raided Guruvayur. They looted treasures and set fire to the Western Gopuram (later rebuilt in 1747). In 1755, the Dutch destroyed the Trikkunavay temple and the Brahmins fled from there.

In 1766, Hyder Ali of Mysore captured Kozhikkode (Calicut) and then Guruvayur. He demanded 10,000 fanams in ransom to spare the temple. The ransom was paid but due to insecurity pilgrims receded. On the request of the Malabar Governor, Shrnivasa Rao, Hyder Ali granted a Devadaya to save the temple. Later, in 1789 CE, Tipu Sultan invaded the province. Tipu destroyed the smaller shrines and set fire to the Temple, but it was saved due to timely rain. Tipu lost to the Travancore and the English in 1792. The idol, which had been hidden underground in anticipation of the Tippu's takeover, was re-installed on 17 September 1792.[11]

Ullanat Panikkars rescued and looked after the temple from 1825 to 1900. From 1859 to 1892, the Chuttambalam, the Vilakkumatam, the Koottambalam and Sasta shrine were renovated and roofed with copper sheeting. In 1900, the administrator Konti Menon fixed the hours of worship and led the drive to keep the temple premises clean. He set up the big bell and reconstructed Pathayappura (granary). In 1928, Kozhikode once again became the administrator of Guruvayur.[12][clarification needed]</p>
<p> <h3>Post-colonial age
</h3>
The Vilakkumatham
On 30 November 1970, a massive fire broke out in the temple, gutting the whole chuttambalam and the entire Vilakkumatam on the west, south and north sides</p>
<p> <h3>Rudratheertham
</h3>
Guruvayur Temple tank (pond)
The temple tank (pond) on the northern side of the temple is called Rudratheertham. According to legend, for thousands of years, Lord Shiva used to bathe on the southern bank of this pond. Since Shiva is also known by the name 'Rudra', the pond came to be known as Rudratheertham.</p>
<p> <h3>Popular devotees</h3>

Garuda statue in Guruvayur Temple
Kururamma Old woman Devotee of Lord Sri Guruvayurappan is among list of prominent devotees of Guruvayoorappan. For her immense devotion in the form of Motherhood, Lord himself had decided to live with her as a foster son. She is regarded as a Re-incarnation of Mother Yashodha in Kaliyuga.
Melpathur Narayana Bhattathiri (1560-1646/1666): A Sanskrit scholar and a devotee of Lord Guruvayurappan, known for his magnum opus Narayaneeyam.
Poonthanam Namboothiri (1547-1640): A contemporary of Melpathur. Wrote poems in pure Malayalam, unlike Melpathur. There is a story that he was not that much fluent in Sanskrit, and was shunned by Sanskrit scholars when he wrongly chanted Vishnu Sahasranama, and the Lord himself corrected it. He is a well-known figure in the stories related to Guruvayur Temple. Well known for his work Jnanappana, known as the Bhagavad Gita of Malayalis.
Vilwamangalam Swamiyar a Brahmin saint, a contemporary of Melpathur, Poonthanam and Kurooramma.
Manjula
Chembai Vaidyanatha Bhagavathar
Sengalipuram Anantarama Dikshitar</p>
<p> <h3>Dress code for entering the temple</h3>

Devotees at Guruvayur Temple
Strict dress code exists for people who wish to enter the Guruvayur Temple. Men are to wear mundu around their waist, without any dress covering their chest. It is allowed to cover the chest region with a small piece of cloth (veshthi). Boys are allowed to wear shorts, but they are also prohibited from wearing a shirt. Girls and women are not allowed to wear any trouser like dresses or short skirts. Women are allowed to wear sari and girls are to wear long skirt and blouses. Presently the dress code for women have been relaxed with shalwar kameez (churidar pyjamas) being allowed</p>
<p> <h3>Temple elephants</h3>

Statue of Guruvayur Kesavan at Guruvayur
The Punnathur kotta, also known as the Anakotta (Elephant Yard in English), houses the 38 elephants belonging to the temple. This place is the home to the largest population of captive male Asian elephants in the world. These elephants are donated by devotees to the temple, and due to the preference of donating tusked male elephants, the ratio of male and female elephants living at the Anakotta is skewed.[16] The elephants were initially kept at a compound close to the temple when the numbers were low. However, as more and more devotees donated elephants, the space became insufficient and hence they were moved to a larger property three kilometres away from the temple. Because of their association with the temple, devotees consider several of these elephants as living forms of Lord Guruvayurappa himself.[17] Guruvayur Keshavan was the most famous among those.[18] The other notable elephant was Guruvayur Padmanabhan, who was the chief of Guruvayur elephants.

The capture, treatment, and living conditions of the elephants in Guruvayur has been subject to criticism.[19] In a study, the Animal Welfare Board of India found several violations</p>



<h2 style={{backgroundColor:"lightgreen"}}>HOW TO REACH:</h2>
   <div style={{width:"100%",height:'300px',display:'flex',alignItems:"center",justifyContent:"space-around",flexWrap:"wrap"}}>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p><h3>By Air </h3>
    Cochin International Airport, about 79.4 km away | Calicut International Airport, about 87 km away</p> </div>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p><h3>By Train </h3>
    Guruvayur Railway Station, about 1 km away.</p> </div>
    <div style={{width:"380px",height:"250px",backgroundColor:"lightgreen",paddingLeft:"26px"}}> <p> <h3>By Road</h3>
    Guruvayur KSRTC Bus Station, about 500 m away | Guruvayur Municipal Bus Stand, about 350 m away</p> </div>
   </div>



<div style={{fontSize:"30px",color:"red",marginBottom:"10px"}}>
<marquee behavior="scroll" width="100%" scrollamount="5" direction="right" >CHECK YOUR TICKET ONLINE(click here)</marquee>
</div>
<Link to={'/ticket'}> <button style={{backgroundColor:"green",marginLeft:"50px"}} >click here</button></Link>

<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<IMGBOX>

<img width={'200px'} height={'200px'}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Guruvayoor_Temple_1.jpg/640px-Guruvayoor_Temple_1.jpg" alt="" />
<img width={'200px'} height={'200px'}  src="https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/01/Dress-Code-for-Guruvayur-Temple-Kerala.jpg?resize=1200%2C800&ssl=1" alt="" />
<img width={'200px'} height={'200px'}  src="https://www.stayvista.com/blog/wp-content/uploads/2024/12/Guruvayur_temple_Kerala.jpg" alt="" />
<img width={'200px'} height={'200px'}  src="https://thetempleguru.com/wp-content/uploads/2024/08/Guruvayur-Temple-Gurvayur-kerela-6.jpg" alt="" />
<img width={'200px'} height={'200px'}  src="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fmobile%2Fguruvayur-temple-1728478786_7c841bdac1f804b52702.webp&w=3840&q=75" alt="" />
<img width={'200px'} height={'200px'}  src="https://i0.wp.com/blog.templesofindia.org/wp-content/uploads/2021/10/Ei0sB0aUwAEVQwE.jpg?fit=1080%2C810&ssl=1" alt="" />
<img width={'200px'} height={'200px'}  src="https://blog.yatradham.org/wp-content/uploads/2020/01/Guruvayur-Temple.jpg" alt="" />
<img width={'200px'} height={'200px'}  src="https://thetempleguru.com/wp-content/uploads/2024/08/Guruvayur-Temple-Gurvayur-kerela-8.jpg" alt="" />
<img width={'200px'} height={'200px'}  src="https://guruvayoorlive.in/wp-content/uploads/2018/02/GuruvayoorLive-V2-133-1200x640.jpg" alt="" />
<img width={'200px'} height={'200px'}  src="https://keralatourismmart.com/wp-content/uploads/2019/12/guruvayur-temple.jpg" alt="" />
<img width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Qc4Y9XlvlonVxn0M6ERNFB48iP72ibCL1w&s" alt="" />
<img width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxCYePNegWTWUXxjvSZKligDHlpcCvxWQSWA&s" alt="" />
<img width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCAswhKRhNnWLPN7rBIotxqJ2t0jySr6K0A&s" alt="" />
<img width={'200px'} height={'200px'}  src="https://www.shutterstock.com/shutterstock/photos/2268172081/display_1500/stock-photo-guruvayur-kerala-india-february-exterior-view-of-the-krshna-hindu-temple-located-at-2268172081.jpg" alt="" />
</IMGBOX>

<h1 style={{backgroundColor:"lightgreen"}}>PHOTOS</h1>
<div>

</div>
<h1 style={{backgroundColor:"lightgreen"}}>ROUTE MAP</h1>

<IMG><img src={thr}  width={'400px'} height={'400px'} alt="" /></IMG>
<a href="https://maps.app.goo.gl/p3oyozenxoEyxVGt5">CLICK TO REVIEW MAP</a>





<h1 style={{backgroundColor:"lightgreen"}}>POPULAR RESORT NEARBY</h1>

<IMGG>

   <div><h3>
   Guruvayoor Resorts</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/97729429.jpg?k=8d3d8dfb6b03e5eea56fcc8afe8889ccef51ad9f1a909c70ca52ddf5ebf7565b&o=&hp=1" alt="" />
</div>
<a href="https://www.guruvayoorresort.com/">click to view</a>
</div>


   <div>
<h3>Memmsta Hotels Guruvayoor</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRood3UDmXtFibmxVSoXEmJjHxt8X5a9-OoQ&s" alt="" />
</div>
<a href="https://www.memmstahotels.com/">click to view</a>
</div>


   <div><h3>
  
   Kovilakam Achutham</h3>
<div>
<img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMPYRqGbIS48gb1bArU7_PuTAYPKB8Vszx1A&s" alt="" />
</div>
<a href="https://www.kovilakamachutham.com/">click to view</a>
</div>


   <div><h3>Geetha Govindham</h3>
<div>
    <img  style={{borderRadius:'18px'}} width={"180px"} height={"180px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ZDu59nN2aA8OGt5uiJobt62TDGzZQBmm9w&s" alt="" />
</div>
<a href="https://www.makemytrip.com/hotels/geetha_govindham-details-guruvayoor.html">click to view</a>
</div>

</IMGG>




<FOOT>
<h2>contact us for more info 9656756476</h2>
<h4>tourismkerala@gmail.com</h4>

</FOOT>

</div>
  )
}

export default Guruvyur
