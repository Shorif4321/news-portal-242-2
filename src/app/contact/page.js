import React from 'react';

const ContactPage = () => {
    return (
        <div>
             <div className="space-y-16">
      {/* News Banner */}
      <section className="bg-secondary text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-lg mt-4">We’d love to hear your feedback or answer your questions.</p>
      </section>

      {/* About + Contact Form Section */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Info */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Reach Out to Us</h2>
            <p className="text-gray-600 mb-6">
              Our team is always open to ideas, feedback, or inquiries. Whether
              you re a reader, contributor, or partner, feel free to send us a
              message — we’ll respond as soon as we can!
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>📍 123 News Street, Media City</li>
              <li>📧 contact@newsportal.com</li>
              <li>📞 +1 (234) 567-8901</li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-base-200 p-8 rounded-xl shadow-md">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
              />
              <textarea
                placeholder="Your Message"
                className="textarea textarea-bordered w-full"
                rows={5}
              ></textarea>
              <button className="btn btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
        </div>
    );
};

export default ContactPage;