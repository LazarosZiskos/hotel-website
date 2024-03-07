import Image from "next/image";
import React from "react";

const destinations = [
  {
    title: "Mount Olympus",
    img: "/assets/mount-olympus.jpg",
    details:
      "Nestled near Paralia Katerini, Mount Olympus is Greece's highest peak, offering diverse activities for adventurers and nature enthusiasts. Hiking trails wind through lush forests, providing breathtaking views. Climbing expeditions offer exhilarating challenges, while guided nature walks allow visitors to observe wildlife. Cultural excursions to nearby archaeological sites unveil the region's history and mythological significance. Whether seeking outdoor adventure or cultural exploration, Mount Olympus promises an unforgettable journey. Embark from your hotel in Paralia Katerini and immerse yourself in Greece's iconic landscape.",
    id: 1,
  },
  {
    title: "Meteora",
    img: "/assets/meteora.jpg",
    details:
      "Set in Greece, Meteora's awe-inspiring rock formations tower above Kalambaka, showcasing nature's beauty and the region's spiritual heritage. The suspended monasteries atop towering pillars create a captivating landscape, drawing travelers for centuries. Exploring Meteora reveals both natural and cultural wonders, with hiking trails offering panoramic views and guided monastery tours providing historical insight. Photographers will delight in capturing the dramatic scenery. Whether hiking, touring monasteries, or soaking in the beauty, a visit to Meteora promises an unforgettable experience.",
    id: 2,
  },
  {
    title: "Skiathos",
    img: "/assets/skiathos.jpg",
    details:
      "Skiathos Island, nestled in the Aegean Sea, boasts pristine beaches, lush landscapes, and a vibrant atmosphere. Known as the Emerald Isle of Greece, Skiathos is a haven for sun-seekers and nature enthusiasts alike. Exploring Skiathos unveils a blend of natural beauty and cultural heritage, from Koukounaries Beach to Lalaria's rugged cliffs. Outdoor activities include hiking, kayaking, and boat excursions to hidden coves. Charming villages with whitewashed buildings offer traditional Greek charm, while tranquil beaches provide relaxation. Skiathos offers an unforgettable island experience capturing Greek hospitality and natural beauty.",
    id: 3,
  },
  {
    title: "Skopelos",
    img: "/assets/skopelos.jpg",
    details:
      "Skopelos Island, nestled in the Aegean Sea, is a hidden gem renowned for its unspoiled beauty and rich cultural heritage. Known as the Greenest Island in Greece, Skopelos enchants visitors with lush landscapes, clear waters, and traditional charm. Explore picturesque villages like Skopelos Town and Stafylos, offering relaxation and adventure. Hike through pine forests, swim in secluded coves, or discover ancient ruins. Vibrant villages boast whitewashed houses and welcoming tavernas. Serenity seekers can unwind on pristine beaches like Kastani and Milia. Skopelos offers an unforgettable island experience, blending natural wonders with rich culture.",
    id: 4,
  },
  {
    title: "Thessaloniki",
    img: "/assets/thessaloniki.jpg",
    details:
      "Thessaloniki, Greece's second-largest city, is a vibrant metropolis brimming with history, culture, and culinary delights. Situated on the shores of the Thermaic Gulf, it offers a captivating blend of ancient landmarks, bustling markets, and modern amenities. Explore its rich heritage through landmarks like the White Tower and Byzantine walls. Wander the UNESCO-listed Old Town's narrow streets lined with traditional tavernas and boutiques. Sample local specialties and experience the city's dynamic food scene. Thessaloniki is also a cultural hub, offering contemporary art galleries, vibrant nightlife, and year-round festivals. Discover its ancient landmarks, savor its culinary delights, and immerse yourself in its vibrant atmosphere for an unforgettable city experience.",
    id: 6,
  },
  {
    title: "Athens",
    img: "/assets/athens.jpg",
    details:
      "Athens, the historic capital of Greece, is a city steeped in mythology, culture, and ancient wonders. Situated amidst the Attica Peninsula, it offers a captivating blend of ancient landmarks, vibrant neighborhoods, and modern amenities. Explore its rich history through iconic sites like the Acropolis and Ancient Agora. Wander Plaka's narrow streets, where ancient ruins mix with charming cafes. Discover Athens' cultural scene with world-class museums and theaters showcasing Greek art and culture. Indulge in its culinary paradise with traditional Greek cuisine. Athens offers an unforgettable city experience, blending ancient landmarks, vibrant culture, and delicious food.",
    id: 7,
  },
  {
    title: "Ancient Dion",
    img: "/assets/ancient-dion.jpg",
    details:
      "Ancient Dion, near Mount Olympus, is a captivating archaeological site offering insight into ancient Greece's rich history and culture. Once dedicated to Zeus, it was a prominent religious center and pilgrimage hub. Explore ruins and artifacts dating back to Hellenistic, Roman, and Byzantine periods, including temples and theaters. Wander ancient streets, marvel at mosaics and statues, and admire tranquil surroundings. The site provides a serene backdrop for reflection and exploration, offering an unforgettable journey into Greece's storied past and ancient civilization's achievements.",
    id: 8,
  },
  {
    title: "Waterland",
    img: "/assets/waterland.jpg",
    details:
      "Waterland, near Thessaloniki, is an exciting aquatic paradise providing a refreshing escape from summer heat. This family-friendly water park caters to thrill-seekers and leisurely loungers with a variety of attractions. Explore exhilarating water slides, lazy rivers, and sparkling pools for visitors of all ages. Feel the adrenaline rush on towering slides or relax on lazy river floats. Enjoy amenities like snack bars, restaurants, and shaded picnic areas. Waterland promises an unforgettable aquatic adventure for the whole family, combining excitement and relaxation in a tropical paradise.",
    id: 9,
  },
  {
    title: "Greek Night",
    img: "/assets/greek-night.jpg",
    details:
      "A Greek Night event offers tourists an immersive experience into Greece's rich culture and traditions. Set in picturesque tavernas or outdoor venues, this lively affair combines music, dance, and cuisine for an unforgettable evening. Guests enjoy warm hospitality and traditional dishes like souvlaki and moussaka, paired with local wines and spirits. Live musicians play bouzouki, clarinet, and guitar, encouraging lively dancing. Visitors learn traditional Greek dances from seasoned dancers, joining in the fun and laughter late into the night. A Greek Night event celebrates Greek culture and offers tourists a chance to experience the joyous spirit and camaraderie of Greek life.",
    id: 10,
  },
];

const page = () => {
  return (
    <main>
      <section className="container mt-24">
        <h1 className="text-center text-5xl mb-10 font-bold">
          Things to do near Paralia
        </h1>
        {destinations.map((destination) => (
          <div className="flex flex-col justify-between items-center w-full gap-6 mb-10 lg:flex-row">
            <Image
              src={destination.img}
              alt="destination-img"
              width={300}
              height={400}
              className="w-full rounded-lg lg:w-1/2"
              priority
            />
            <div className="w-full flex-col items-center justify-center gap-6 ">
              <h2 className="text-2xl pb-4">{destination.title}</h2>
              <p className="leading-relaxed">{destination.details}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default page;
