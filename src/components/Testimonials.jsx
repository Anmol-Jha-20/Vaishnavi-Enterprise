import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-white px-5 md:px-20 py-14">
      <h2 className="text-2xl md:text-3xl font-bold mb-3">Testimonials</h2>
      <div className="h-1 w-16 bg-yellow-500 mb-6"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border p-6 rounded-md text-gray-600 italic">
          <p>
            Vaishnavi Enterprise provided exceptional roof fabrication services
            for our facility. Their team was professional, timely, and the
            quality of work exceeded our expectations. Highly recommended!
          </p>
          <div className="flex items-center gap-3 mt-4">
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt="Howard K. Stern"
              className="rounded-full w-10 h-10"
            />
            <span className="text-black not-italic">Howard K. Stern</span>
          </div>
        </div>

        <div className="border p-6 rounded-md text-gray-600 italic">
          <p>
            We’ve been using Vaishnavi Enterprise for industrial maintenance and
            construction work for over a year now. Their expertise and
            dedication have helped us minimize downtime and keep operations
            running smoothly. Truly a reliable partner.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <img
              src="https://i.pravatar.cc/40?img=2"
              alt="Thomas More"
              className="rounded-full w-10 h-10"
            />
            <span className="text-black not-italic">Thomas More</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
