import Product from "@/images/preview.jpg";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { Heart } from "lucide-react";
import { X } from "lucide-react";

export default function Cart() {
  return (
    <section className="bg-white py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Shopping Cart</h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm  md:p-6">
                <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                  <a href="#" className="shrink-0 md:order-1">
                    <Image width={200} height={100} className="h-20 w-20" src={Product} alt="imac image" />
                  </a>

                  <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
                  <div className="flex items-center justify-between md:order-3 md:justify-end">
                    <div className="flex items-center">
                      <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-100">
                        <Plus className="w-3 h-3"/>
                      </button>
                      <input type="text" id="counter-input" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0" placeholder="" value="2" required />
                      <button type="button" id="increment-button" data-input-counter-increment="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-100">
                        <Minus className="w-3 h-3"/>
                      </button>
                    </div>
                    <div className="text-end md:order-4 md:w-32">
                      <p className="text-base font-bold text-gray-900">$1,499</p>
                    </div>
                  </div>

                  <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                    <p className="text-base font-medium text-gray-900">The J&D L80 Electric Guitar, Transparent Black</p>

                    <div className="flex items-center gap-5">
                      <button type="button" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline">
                        <Heart className="w-4 h-4 mr-1"/>
                        Add to Favorites
                      </button>

                      <button type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline">
                        <X className="w-4 h-4 mr-1"/>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
              <p className="text-xl font-semibold text-gray-900">Order summary</p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500">Original price</dt>
                    <dd className="text-base font-medium text-gray-900">$7,592.00</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500">Savings</dt>
                    <dd className="text-base font-medium text-green-600">-$299.00</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500">Store Pickup</dt>
                    <dd className="text-base font-medium text-gray-900">$99</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500">Tax</dt>
                    <dd className="text-base font-medium text-gray-900">$799</dd>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                  <dt className="text-base font-bold text-gray-900">Total</dt>
                  <dd className="text-base font-bold text-gray-900">$8,191.00</dd>
                </dl>
              </div>

              <Link href="/cart/checkout" className="flex w-full items-center justify-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white">
                Proceed to Checkout
              </Link>

              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-normal text-gray-500"> or </span>
                <a href="#" title="" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline">
                  Continue Shopping
                  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 13 4-4-4-4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
