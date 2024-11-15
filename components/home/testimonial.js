"use client"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

export const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
          breakpoint: 1024, 
          settings: {
            slidesToShow: 2, 
            slidesToScroll: 1
          }
        },
    ]
  };

  const testimonials = [
    {
        name: 'John Doe',
        role: 'Founder of Rubik',
        image: 'https://readymadeui.com/team-2.webp',
        feedback: 'The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive  amazing. And the delivery was impressively prompt.',
        rating: 4
    },
    {
        name: 'Mark Adair',
        role: 'Founder of Alpha',
        image: 'https://readymadeui.com/team-1.webp',
        feedback: 'The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.',
        rating: 5
    },
    {
        name: 'Simon Konecki',
        role: 'Founder of Labar',
        image: 'https://readymadeui.com/team-4.webp',
        feedback: 'The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.',
        rating: 4
    },
    {
        name: 'Lily Smith',
        role: 'Founder of PixelCo',
        image: 'https://readymadeui.com/team-3.webp',
        feedback: 'Amazing service and product. Very responsive staff and a smooth process. I would definitely recommend it.',
        rating: 5
    },
    {
        name: 'Carlos Martinez',
        role: 'Founder of Nexus',
        image: 'https://readymadeui.com/team-5.webp',
        feedback: 'Top-notch service! Everything was quick and easy, and I was really impressed with the quality of the product and the service.',
        rating: 3
    }
  ];

  return (
    <div className="px-4 pt-8 md:pt-12 lg:pt-16 pb-16 md:pb-20 lg:pb-24 bg-white max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-gray-800 text-3xl font-extrabold">What our happy clients say</h2>
      </div>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
            <div key={index} className="px-2">
                <div className="p-6 rounded-lg mx-auto bg-gray-100 relative">
                    <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                        <svg
                        key={i}
                        className={`w-4 ${i < testimonial.rating ? 'fill-[#facc15]' : 'fill-[#CED5D8]'}`}
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                    ))}
                    </div>

                    <div className="mt-4">
                    <p className="text-gray-800 text-sm leading-relaxed">{testimonial.feedback}</p>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-4">
                        <p className="mt-0.5 text-xs font-semibold text-gray-600">{testimonial.role}</p>
                    </div>
                </div>
            </div>
        ))}
      </Slider>
    </div>
  );
};