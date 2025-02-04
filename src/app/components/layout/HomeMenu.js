'use client'
import SectionHeaders from "./SectionHeaders";
import MenuItem from "./menu/MenuItem";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReviewCard from "./menu/ReviewCard";

export default function HomeMenu() {
  const [bestSellers, setBestSellers] = useState([]);
  useEffect(() => {
    fetch('/api/menu-items').then(res => {
      res.json().then(menuItems => {
        setBestSellers(menuItems.slice(-9));
      });
    });
  }, []);
  return (
    <section className="">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image src={'/sallad1.png'} width={109} height={189} alt={'salad'} />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10 ">
          <Image src={'/sallad2.png'} width={107} height={195} alt={'salad'} />
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeaders
          subHeader={'check out'}
          mainHeader={'Our Best Seller'} />
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {bestSellers?.length > 0 && bestSellers.map((item, index) => (
          <MenuItem key={index} {...item} /> //key={item._id}
        ))}
      </div>
      <ReviewCard />
    </section>
  )
}
