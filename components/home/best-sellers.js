"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import { ArrowRight, Eye, Heart, Plus } from 'lucide-react'
import Link from 'next/link'
import Slider from "react-slick";
import Image from "next/image";
import HHH from "@/images/hhh.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        zIndex: 10,
        marginRight: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 1)",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        cursor: "pointer",
        paddingLeft: "4px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.2s ease",
      }}
      onClick={onClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        marginLeft: "20px",
        zIndex: 10,
        fontFamily: "sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 1)",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        cursor: "pointer",
        paddingRight: "4px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.2s ease",
      }}
      onClick={onClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </div>
  );
}

export const BestSellers = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      }
    ]
  };
  const products = [
    {
      id: 1,
      name: "Sax Alto Supreme Verso Verni",
      image: HHH,
      price: 299.99,
    },
    {
      id: 2,
      name: "Sax Alto Supreme Verso Verni",
      image: HHH,
      price: 299.99,
    },
    {
      id: 3,
      name: "Sax Alto Supreme Verso Verni",
      image: HHH,
      price: 299.99,
    },
    {
      id: 4,
      name: "Sax Alto Supreme Verso Verni",
      image: HHH,
      price: 299.99,
    },
    {
      id: 5,
      name: "Sax Alto Supreme Verso Verni",
      image: HHH,
      price: 299.99,
    },
    {
      id: 6,
      name: "Sax Alto Supreme Verso",
      image: HHH,
      price: 299.99,
    },
    {
      id: 7,
      name: "Sax Alto Supreme Verso Verni",
      image: HHH,
      price: 299.99,
    },
    {
      id: 8,
      name: "Sax Alto Supreme Verso Verni",
      image: HHH,
      price: 299.99,
    },
    {
      id: 9,
      name: "Sax Alto Supreme Verso Verni",
      image: HHH,
      price: 299.99,
    },
    {
      id: 10,
      name: "Sax Alto Supreme Verso Verni",
      image: HHH,
      price: 299.99,
    },
    {
      id: 11,
      name: "Sax Alto Supreme Verso Verni",
      image: HHH,
      price: 299.99,
    },
    {
      id: 12,
      name: "Sax Alto Supreme Verso Verni",
      image: HHH,
      price: 299.99,
    },
  ];
  return (
    <section className="px-4 py-8 md:py-12 lg:py-16">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex items-end justify-between pb-6">
          <div className="flex flex-col space-y-3">
            <h2 className="max-w-sm text-2xl md:text-3xl lg:text-4xl text-start text-black font-bold leading-[1.1]">
              Featured Types
            </h2>
            <h3 className="leading-normal text-muted-foreground text-sm md:text-base sm:leading-7">
              Find the best skateboarding gears from stores around the world
            </h3>
          </div>
          {/* <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <button className="py-1.5 px-4 rounded-full bg-cyan-700 text-white">
                All
              </button>
              <button className="py-1.5 px-4 rounded-full bg-cyan-700 text-white">
                One
              </button>
            </div>
          </div> */}
        </div>
        <div className="mb-4 md:mb-8">
          <Slider {...settings} className="flex items-center gap-4">
            {products.map((product, index) => (
              <div key={index} className="px-2">
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="h-56 w-full">
                    <Link href="/">
                      <Image width={200} height={200} className="mx-auto h-full" src={product.image} alt={product.name} />
                    </Link>
                  </div>
                  <div className="pt-6">
                    <div className="mb-4 flex items-center justify-end gap-4">
                      <button type="button" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                        <Eye className="w-5 h-5"/>
                        <span className="sr-only">Quick look</span>
                      </button>
                      <button type="button" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                        <Heart className="w-5 h-5"/>
                        <span className="sr-only">Add to Favorites</span>
                      </button>
                    </div>
                    <Link href="/" className="text-lg font-semibold leading-tight text-gray-900 hover:underline">
                      {product.name}
                    </Link>
                    <div className="mt-4 flex items-center justify-between gap-4">
                      <p className="text-2xl font-extrabold leading-tight text-gray-900">${product.price}</p>
                      <button type="button" className="inline-flex items-center gap-x-2 rounded-full bg-black px-4 py-2.5 text-sm font-medium text-white">
                        <Plus className="w-4 h-4"/>
                        <span>Add to cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex items-center justify-end">
          <Link href="/types" className="text-sm flex gap-1 text-gray-500 hover:translate-x-1 hover:text-black transition-all">
            Shop the collection <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}