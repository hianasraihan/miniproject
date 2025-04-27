// src/app/about/page.tsx
import Link from "next/link";

const About = () => {
  return (
    <div className="pt-20 font-sans text-center">
      <div className="mb-8 text-5xl font-bold">
        <h1>About Cinemax</h1>
      </div>

      <div className="mx-auto w-full px-8 text-lg text-gray-700 text-justify">
        <p className="mb-6">
          Cinemax is a premier online platform designed to simplify movie
          theater bookings for movie enthusiasts. Whether you're a casual
          movie-goer or a film aficionado, Cinemax offers an intuitive,
          user-friendly experience to help you book tickets with just a few
          clicks.
        </p>

        <h2 className="mb-4 text-3xl font-semibold">Key Features:</h2>
        <ul className="mb-8 list-disc list-inside text-gray-600">
          <li>
            <strong>Real-Time Availability:</strong> Cinemax offers real-time
            booking for movies across various theaters. You can quickly find out
            what's showing at your local cinema, view available seats, and book
            your tickets instantly.
          </li>
          <li>
            <strong>User-Friendly Interface:</strong> Our website and mobile app
            feature a modern, minimalist design. The simple, intuitive interface
            ensures that even first-time users can navigate effortlessly.
          </li>
          <li>
            <strong>Wide Selection of Movies:</strong> From the latest
            blockbusters to indie gems, Cinemax offers a broad selection of
            movies. Filter by genre, release date, or rating to find your match.
          </li>
          <li>
            <strong>Secure Payment Gateway:</strong> We support multiple payment
            methods including cards and digital wallets—quick and secure.
          </li>
          <li>
            <strong>Personalized Recommendations:</strong> Smart suggestions
            based on your preferences and booking history.
          </li>
          <li>
            <strong>Exclusive Deals & Discounts:</strong> Get early access to
            premieres and enjoy seasonal promotions.
          </li>
          <li>
            <strong>Seat Selection & Show Times:</strong> Pick your seat in real
            time and find showtimes that fit your schedule.
          </li>
          <li>
            <strong>Customer Support:</strong> Our team is available 24/7 to
            help you with any booking-related issues.
          </li>
        </ul>

        <h2 className="mb-4 text-3xl font-semibold">Why Choose Cinemax?</h2>
        <ul className="mb-8 list-disc list-inside text-gray-600">
          <li>
            <strong>Convenience:</strong> Book tickets anytime, anywhere from
            any device.
          </li>
          <li>
            <strong>Variety:</strong> Access all your favorite cinemas and the
            latest releases.
          </li>
          <li>
            <strong>Reliability:</strong> Real-time booking updates and secure
            payments you can trust.
          </li>
        </ul>

        <h2 className="mb-4 text-3xl font-semibold">How It Works:</h2>
        <ol className="mb-8 list-decimal list-inside text-gray-600">
          <li>
            <strong>Browse Movies:</strong> Check out the latest films via our
            website or app.
          </li>
          <li>
            <strong>Select Theater & Show Time:</strong> Pick your preferred
            cinema and time.
          </li>
          <li>
            <strong>Pick Your Seats:</strong> Choose from available seats—
            premium, regular, or VIP.
          </li>
          <li>
            <strong>Pay & Confirm:</strong> Complete your payment and get
            instant confirmation.
          </li>
          <li>
            <strong>Enjoy the Movie!</strong> Show your ticket and sit back for
            the experience.
          </li>
        </ol>

        <p className="text-lg font-semibold text-gray-700">
          Ready to make your movie night easier? Visit{" "}
          <Link
            href="https://www.cinemax.com"
            className="text-blue-500 underline">
            www.CineMax.com
          </Link>{" "}
          to book your next movie ticket in minutes!
        </p>
      </div>
    </div>
  );
};

export default About;
