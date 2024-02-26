import Image from 'next/image'
import React from 'react'


const destinations = [
  {
      title: "Mount Olympus",
      img: "/assets/mount-olympus.jpg",
      details: "Nestled near Paralia Katerini, Mount Olympus beckons with its legendary beauty and rich mythology. As Greece's highest peak, it offers myriad activities for adventurers and nature lovers alike. Hiking trails wind through lush forests and ascend to lofty summits, providing breathtaking views of the surrounding landscape. For the more daring, climbing and mountaineering expeditions present exhilarating challenges and opportunities to conquer the peaks. Guided nature walks offer insight into the mountain's diverse ecosystems, allowing visitors to observe native wildlife and learn about its ecological significance. Additionally, cultural excursions to nearby archaeological sites reveal the region's history and mythological significance, adding depth to the Mount Olympus experience. Whether seeking outdoor adventure or cultural exploration, Mount Olympus promises an unforgettable journey. Embark on a voyage from your hotel in Paralia Katerini and immerse yourself in the magic of Greece's iconic landscape.",
      id: 1,
  },
  {
      title: "Meteora",
      img: "/assets/meteora.jpg",
      details: "Set in the heart of Greece, the awe-inspiring rock formations of Meteora rise majestically above the town of Kalambaka, offering visitors a glimpse into the sublime beauty of nature and the spiritual heritage of the region. Meteora, which means suspended in the air, is renowned for its monasteries perched precariously atop towering rock pillars, creating a breathtaking landscape that has captivated travelers for centuries.Exploring Meteora is a journey into both the natural and cultural wonders of Greece. Hiking trails wind through the rocky terrain, leading adventurers to panoramic viewpoints where they can marvel at the stunning vistas and rock formations. Guided tours of the monasteries provide insight into the history and significance of these ancient religious sites, offering a glimpse into the lives of the monks who once inhabited them.Photographers and nature enthusiasts will find endless opportunities to capture the dramatic scenery, as the changing light casts shadows and highlights on the rugged landscape. Whether exploring the hiking trails, visiting the monasteries, or simply soaking in the natural beauty, a journey to Meteora is sure to leave a lasting impression on all who venture to this remarkable destination.",
      id: 2,
  },
  {
      title: "Skiathos",
      img: "/assets/skiathos.jpg",
      details: "In the azure waters of the Aegean Sea, Skiathos Island invites with its pristine beaches, lush landscapes, and vibrant atmosphere. Renowned as the Emerald Isle of Greece, Skiathos is a paradise for sun-seekers and nature lovers alike.Exploring Skiathos reveals a tapestry of natural beauty and cultural heritage. From the golden sands of Koukounaries Beach to the rugged cliffs of Lalaria, the island offers a diverse array of landscapes to discover. Outdoor enthusiasts can hike along scenic trails, kayak through crystal-clear waters, or embark on boat excursions to hidden coves and sea caves.The island's charming villages exude a traditional Greek charm, with whitewashed buildings, cobblestone streets, and quaint tavernas serving fresh seafood and local delicacies. Explore historic sites such as the medieval fortress of Skiathos Town or the monasteries tucked away in the island's interior.For those seeking relaxation, Skiathos' tranquil beaches provide the perfect escape. Bask in the sun on the shores of Banana Beach, snorkel in the turquoise waters of Lalaria, or unwind with a cocktail at a beachfront taverna.Whether seeking adventure or tranquility, Skiathos offers an unforgettable island experience that captures the essence of Greek hospitality and natural beauty.",
      id: 3,
  },
  {
      title: "Skopelos",
      img: "/assets/skopelos.jpg",
      details: "In the heart of the Aegean Sea lies Skopelos Island, a hidden gem known for its unspoiled beauty, charming villages, and rich cultural heritage. Renowned as the Greenest Island in Greece, Skopelos captivates visitors with its lush landscapes, crystal-clear waters, and traditional way of life.Exploring Skopelos is a journey into a world of natural wonders and timeless charm. From the picturesque harbor of Skopelos Town to the tranquil beaches of Stafylos and Panormos, the island offers endless opportunities for relaxation and adventure. Hike through fragrant pine forests, swim in secluded coves, or explore ancient ruins and Byzantine churches nestled among the olive groves.The island's vibrant villages are steeped in history and tradition, with whitewashed houses, narrow cobblestone streets, and welcoming tavernas serving authentic Greek cuisine. Discover hidden gems like the medieval castle of Glossa or the panoramic views from the Church of Agios Ioannis, made famous by the movie Mamma Mia!For those seeking serenity, Skopelos' pristine beaches provide the perfect escape. Relax on the sun-drenched shores of Kastani, snorkel in the azure waters of Milia, or simply soak up the laid-back atmosphere of island life.Whether exploring its natural wonders, immersing yourself in its rich culture, or simply relaxing on its idyllic beaches, Skopelos offers an unforgettable island experience that will leave you enchanted and inspired.",
      id: 4,
  },
  {
      title: "Thessaloniki",
      img: "/assets/thessaloniki.jpg",
      details: "Thessaloniki, Greece's second-largest city, is a vibrant metropolis steeped in history, culture, and culinary delights. Located on the shores of the Thermaic Gulf, this cosmopolitan hub offers a captivating blend of ancient landmarks, bustling markets, and modern amenities.Exploring Thessaloniki is a journey through the ages, with a wealth of historical and cultural treasures to discover. From the imposing White Tower and ancient Roman Agora to the Byzantine walls and Ottoman monuments, the city's rich heritage is on full display. Wander through the narrow streets of the UNESCO-listed Old Town, where traditional tavernas and charming boutiques await around every corner.The city's dynamic food scene is a feast for the senses, with a diverse array of flavors and aromas to tantalize your taste buds. Sample local specialties like bougatsa (a pastry filled with cheese or custard), souvlaki (grilled meat skewers), and fresh seafood from the bustling markets along the waterfront.Thessaloniki is also a cultural hub, with a thriving arts scene, vibrant nightlife, and year-round festivals and events. Explore contemporary art galleries, catch a performance at one of the city's theaters, or dance the night away in its trendy bars and clubs.Whether you're exploring its ancient landmarks, savoring its culinary delights, or soaking up its vibrant atmosphere, Thessaloniki offers an unforgettable city experience that will leave you enchanted and inspired.",
      id: 6,
  },
  {
      title: "Athens",
      img: "/assets/athens.jpg",
      details: "Athens, the historic capital of Greece, is a city steeped in mythology, culture, and ancient wonders. Nestled amidst the Attica Peninsula, this bustling metropolis offers a captivating blend of ancient landmarks, vibrant neighborhoods, and modern amenities.Exploring Athens is a journey through the cradle of Western civilization, with iconic sites such as the Acropolis, Parthenon, and Ancient Agora bearing witness to its rich history. Wander through the narrow streets of Plaka, the city's oldest neighborhood, where ancient ruins mingle with quaint cafes and charming boutiques.The city's cultural scene is vibrant and diverse, with world-class museums, galleries, and theaters showcasing the best of Greek art and culture. Explore the Acropolis Museum, home to ancient artifacts and treasures from the glory days of Athens, or catch a performance at the historic Odeon of Herodes Atticus.Athens is also a culinary paradise, with a myriad of tavernas, restaurants, and street food vendors serving up delicious Greek cuisine. Sample traditional dishes like moussaka, souvlaki, and spanakopita, washed down with a glass of ouzo or a refreshing frappe.Whether you're exploring its ancient landmarks, immersing yourself in its vibrant culture, or savoring its culinary delights, Athens offers an unforgettable city experience that will leave you enchanted and inspired.",
      id: 7,
  },
  {
      title: "Ancient Dion",
      img: "/assets/ancient-dion.jpg",
      details: "Ancient Dion, situated near Mount Olympus, is a captivating archaeological site that offers a glimpse into the rich history and culture of ancient Greece. Once a sacred city dedicated to Zeus, Dion was an important religious center and hub of pilgrimage in antiquity.Exploring Ancient Dion is a journey through time, with ruins and artifacts dating back to the Hellenistic, Roman, and Byzantine periods. Wander through the ancient streets and marvel at the remains of temples, theaters, and baths that once adorned this bustling city. Discover the intricate mosaics, statues, and inscriptions that offer insight into the daily life and religious practices of its inhabitants.The site's tranquil surroundings, nestled amidst lush greenery and flowing streams, provide a serene backdrop for exploration and reflection. Take a leisurely stroll through the archaeological park, admiring the beauty of the natural landscape and immersing yourself in the ancient atmosphere. With its rich history and scenic beauty, Ancient Dion offers an unforgettable journey into the past, where visitors can connect with the legacy of Greece's storied past and marvel at the achievements of its ancient civilization.",
      id: 8,
  },
  {
      title: "Waterland",
      img: "/assets/waterland.jpg",
      details: "Waterland, nestled near Thessaloniki, is a thrilling aquatic paradise offering a refreshing escape from the summer heat. This family-friendly water park is a haven for thrill-seekers and leisurely loungers alike, boasting a wide range of attractions and amenities.Exploring Waterland is a journey through an oasis of fun and relaxation, with exhilarating water slides, lazy rivers, and sparkling pools awaiting visitors of all ages. Feel the rush of adrenaline as you plunge down towering slides or race your friends on high-speed flumes. For those seeking a more laid-back experience, drift along the lazy river or unwind in the tranquil poolside loungers.The park's vibrant atmosphere is enhanced by a variety of amenities, including snack bars, restaurants, and shaded picnic areas. Take a break from the excitement to enjoy a refreshing drink or indulge in a delicious meal while soaking up the sun.With its thrilling attractions and relaxing amenities, Waterland offers an unforgettable aquatic adventure for the whole family. Whether you're seeking excitement or relaxation, this tropical paradise promises a day of fun and memories that will last a lifetime.",
      id: 9,
  },
  {
      title: "Greek Night",
      img: "/assets/greek-night.jpg",
      details: "A Greek Night event offers tourists a vibrant and immersive experience into the rich culture and traditions of Greece. Set against the backdrop of a picturesque taverna or outdoor venue, this lively affair combines music, dance, and cuisine to create an unforgettable evening of entertainment.Guests are welcomed with warm hospitality and traditional Greek hospitality, including a feast of mouthwatering dishes such as souvlaki, moussaka, and tzatziki, accompanied by local wines and spirits. As the night progresses, live musicians take the stage, filling the air with the sounds of bouzouki, clarinet, and guitar, setting the stage for lively dancing and revelry.Visitors are invited to join in the fun, learning traditional Greek dances such as syrtaki, tsifteteli, and kalamatianos from seasoned dancers who lead the festivities. The atmosphere is electric, with laughter, music, and the clinking of glasses filling the air late into the night.A Greek Night event is not only a celebration of Greek culture but also a chance for tourists to immerse themselves in the joyous spirit and camaraderie that defines the Greek way of life.",
      id: 10,
  },
 
]

const page = () => {
  return (
    <main>
        <section className='container mt-24'>
            <h1 className='text-center text-5xl mb-10 font-bold'>Things to do near Paralia</h1>
            {destinations.map((destination) => (
            <div className='flex flex-col justify-between items-center w-full gap-6 mb-10 lg:flex-row'>
                <Image src={destination.img} alt='destination-img' width={300} height={400} className='w-full rounded-lg lg:w-1/2' priority/>
                <div className='w-full flex-col items-center justify-center gap-6 '>
                <h2 className='text-2xl pb-4'>{destination.title}</h2>
                <p className='leading-relaxed'>{destination.details}</p>
                </div>
            </div>
            ))}
        </section>
    </main>
  )
}

export default page