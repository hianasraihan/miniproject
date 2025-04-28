"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface EventType {
  id: number;
  title: string;
  image: string;
  location?: string;
  time?: string;
  price: string;
}

export const events: EventType[] = [
  {
    id: 1,
    title: "We The Fest 2024",
    image: "https://source.unsplash.com/600x400/?concert,festival",
    location: "Jakarta",
    time: "20 Juli 2024",
    price: "Rp 750.000",
  },
  {
    id: 2,
    title: "Synchronize Fest",
    image: "https://source.unsplash.com/600x400/?music,festival",
    location: "Jakarta",
    time: "4 Oktober 2024",
    price: "Rp 450.000",
  },
  {
    id: 3,
    title: "Java Jazz Festival",
    image: "https://source.unsplash.com/600x400/?jazz,concert",
    location: "Jakarta",
    time: "2 Maret 2024",
    price: "Rp 600.000",
  },
  {
    id: 4,
    title: "Warehouse Project",
    image: "https://source.unsplash.com/600x400/?edm,festival",
    location: "Bali",
    time: "8 Desember 2024",
    price: "Rp 900.000",
  },
  {
    id: 5,
    title: "Bali Music Festival",
    image: "https://source.unsplash.com/600x400/?bali,concert",
    location: "Bali",
    time: "5 Agustus 2024",
    price: "Rp 550.000",
  },
  {
    id: 6,
    title: "Soundrenaline",
    image: "https://source.unsplash.com/600x400/?band,music",
    location: "Bandung",
    time: "14 September 2024",
    price: "Rp 500.000",
  },
];

const singaporeEvents: EventType[] = [
  {
    id: 1,
    title: "Universal Studios Singapore",
    image: "https://source.unsplash.com/600x400/?universal,studios",
    price: "SGD 79",
  },
  {
    id: 2,
    title: "Marina Bay Sands SkyPark",
    image: "https://source.unsplash.com/600x400/?marina,bay,singapore",
    price: "SGD 25",
  },
  {
    id: 3,
    title: "Gardens by the Bay",
    image: "https://source.unsplash.com/600x400/?gardens,by,the,bay",
    price: "SGD 20",
  },
  {
    id: 4,
    title: "Sentosa Island Adventure",
    image: "https://source.unsplash.com/600x400/?sentosa,island",
    price: "SGD 50",
  },
];

const indonesiaEvents: EventType[] = [
  {
    id: 1,
    title: "Candi Borobudur",
    image: "https://source.unsplash.com/600x400/?borobudur,temple",
    location: "Magelang",
    price: "Rp 50.000",
  },
  {
    id: 2,
    title: "Pantai Kuta",
    image: "https://source.unsplash.com/600x400/?kuta,beach",
    location: "Bali",
    price: "Gratis",
  },
  {
    id: 3,
    title: "Gunung Bromo",
    image: "https://source.unsplash.com/600x400/?bromo,mountain",
    location: "Probolinggo",
    price: "Rp 29.000",
  },
  {
    id: 4,
    title: "Raja Ampat",
    image: "https://source.unsplash.com/600x400/?raja,ampat",
    location: "Papua Barat",
    price: "Rp 500.000",
  },
  {
    id: 5,
    title: "Danau Toba",
    image: "https://source.unsplash.com/600x400/?lake,toba",
    location: "Sumatera Utara",
    price: "Rp 20.000",
  },
  {
    id: 6,
    title: "Taman Mini Indonesia Indah",
    image: "https://source.unsplash.com/600x400/?tmii,indonesia",
    location: "Jakarta",
    price: "Rp 30.000",
  },
];

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col gap-24">
      {/* Section 1: Konser Festival */}
      <section>
        <h1 className="text-5xl font-extrabold text-center mb-14">
          Konser & Festival
        </h1>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-16">
          {events.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="flex flex-col bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition-all h-full">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 flex flex-col gap-4">
                  <h2 className="text-2xl font-bold">{event.title}</h2>
                  <p className="text-gray-600 text-sm">
                    Lokasi: {event.location}
                  </p>
                  <p className="text-gray-600 text-sm">Waktu: {event.time}</p>
                  <p className="text-xl font-bold text-green-600">
                    {event.price}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Section 2: Yang Seru di Singapura */}
      <section
        className="rounded-3xl shadow-xl p-10 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://a.travel-assets.com/findyours-php/viewfinder/images/res70/542000/542607-singapore.jpg')`,
        }}>
        <h2 className="text-4xl font-bold text-center mb-10 text-white drop-shadow-lg">
          Yang Seru di Singapura
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {singaporeEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden flex flex-col items-center text-center shadow-lg hover:scale-105 transition-all">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Mulai dari{" "}
                  <span className="text-orange-500 font-bold">
                    {event.price}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button className="px-10 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Lihat Lebih Banyak
          </button>
        </div>
      </section>

      {/* Section 3: Lagi Populer di Indonesia */}
      <section className= "rounded-3xl  p-10">
        <h2 className="text-4xl font-bold text-center mb-10">
          Lagi Populer di Indonesia
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-16">
          {indonesiaEvents.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="rounded-2xl overflow-hidden flex flex-col items-center text-center shadow-sm hover:scale-105 transition-all h-full">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <p className="text-sm text-gray-500">{event.location}</p>
                  <p className="text-sm text-gray-500">
                    Mulai dari{" "}
                    <span className="text-orange-500 font-bold">
                      {event.price}
                    </span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default EventsPage;
