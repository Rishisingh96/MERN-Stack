import React from "react";
import { NavLink } from "react-router-dom";

export const About = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          🎬 Explore the Latest in Movie Industries
        </h1>
        <p className="text-gray-400 text-lg">
          Your Ultimate Guide to Must-Watch Movies & Shows
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Text */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            About Our Platform
          </h2>
          <p className="text-gray-400 mb-4">
            Welcome to your ultimate destination for movies and entertainment.
            Discover the latest blockbusters, trending TV shows, and hidden gems
            from around the world — all in one place.
          </p>
          <p className="text-gray-400">
            Whether you're into action, drama, romance, or thrillers, we help you
            find your next favorite content easily.
          </p>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"
            alt="Movies"
            height={300}
            width={300}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Features */}
      <div className="mt-16 grid md:grid-cols-4 gap-6 text-center">
        
        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">🎥 Latest Movies</h3>
          <p className="text-gray-400 text-sm">
            Stay updated with new releases
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">📺 TV Shows</h3>
          <p className="text-gray-400 text-sm">
            Binge-worthy series anytime
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">⭐ Top Picks</h3>
          <p className="text-gray-400 text-sm">
            Handpicked recommendations
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">🔍 Easy Search</h3>
          <p className="text-gray-400 text-sm">
            Find movies instantly
          </p>
        </div>

      </div>

      {/* Button */}
      <div className="text-center mt-12">
        <div className="hero-btn">
              <NavLink to="/movie" className="btn">
                Explore Now
              </NavLink>
            </div>
      </div>

    </section>
  );
};

