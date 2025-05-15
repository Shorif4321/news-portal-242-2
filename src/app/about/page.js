import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
    return (
        <div>
           <div className="space-y-16">
      {/* About Banner */}
      <section className="bg-primary text-white py-20 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg mt-4">Get to know the team and vision behind our news portal.</p>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
        <p className="text-gray-600 text-lg">
          We are a passionate team of journalists, developers, and storytellers
          delivering the latest, most accurate, and unbiased news. Our mission
          is to inform and inspire through well-researched stories, breaking
          news, and community-driven insights.
        </p>
      </section>

      {/* Newsletter Section */}
      <section className="bg-base-200 py-12 text-center px-4">
        <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-6 text-gray-600">Get the latest news delivered to your inbox every week.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
          />
          <button className="btn btn-primary">Subscribe</button>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-10">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Alice", "Bob", "Charlie"].map((name, idx) => (
            <div key={idx} className="card shadow-lg">
              <figure>
                <Image
                  src={`https://i.pravatar.cc/300?img=${idx + 10}`}
                  alt={name}
                  className="w-full h-64 object-cover"
                  width={300} height={300}
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="text-gray-600">Journalist</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-base-100 py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">What Our Readers Say</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          {[
            { name: "Emma", review: "Insightful and well-researched content!" },
            { name: "Liam", review: "My go-to source for current events." },
            { name: "Olivia", review: "Clean design and trustworthy reporting." },
          ].map((r, i) => (
            <div key={i} className="card bg-base-200 shadow-md p-6">
              <p className="italic text-gray-700">{r?.review}</p>
              <div className="mt-4 font-bold">{r?.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
        </div>
    );
};

export default AboutPage;