import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function AddressCarousel({ addressList, setSelectedAddress }) {
  // State to track the selected address key
  const [selectedKey, setSelectedKey] = useState(null);

  return (
    <div>
      <h1 className="font-semibold text-lg">Select delivery address</h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {Object.entries(addressList).map(([key, value]) => {
          const isSelected = selectedKey === key; // Check if this slide is selected

          return (
            <SwiperSlide
              className={`cursor-pointer rounded-md   px-2 py-3 ${isSelected ? 'border-2 rounded-md  h-full border-blue-500' : ' rounded-md border'}`} 
              key={key}
              onClick={() => {
                setSelectedAddress(value.address);
                setSelectedKey(key); // Set the selected key
              }}
            >
              <div>
                <h1 className="capitalize text-lg font-semibold">{key}</h1>
                <p>Address: {value.address}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
