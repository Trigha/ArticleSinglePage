import React from 'react';
import Img1 from '../assets/img1.png';
import Img2 from '../assets/img2.png';
import Img3 from '../assets/img3.png';
import Img4 from '../assets/img4.png';
import Imgs1 from '../assets/img1-mbl.png';

function Home() {
  return (
    <div className="">
      <div className="flex flex-col">
        <img src={Img1} className="mt-20 w-fit mx-auto hidden md:block" />
        <img src={Imgs1} className="mt-0 md:hidden" />
      </div>
      <h1 className="text-center font-bold text-5xl md:mt-20 mt-8">Article</h1>
      <div className="flex md:flex-row flex-col justify-center md:space-y-0 space-y-24">
        <div class="py-8 px-12 mb-12  transform transition duration-300 ease-in-out hover:-translate-y-2 w-[410px] h-[230px] mx-auto md:mx-0">
          <img src={Img2} />

          <h3 class="text-lg leading-normal mb-2 font-semibold">
            How to create meaningful progress with design?
          </h3>
          <p class="text-gray-500">
            It takes hard work to find the balance between values and aims.
          </p>
        </div>

        <div class="md:py-8 px-12 mb-12  transform transition duration-300 ease-in-out hover:-translate-y-2 w-[410px] h-[230px] mx-auto md:mx-0">
          <img src={Img3} />

          <h3 class="text-lg leading-normal mb-2 font-semibold">
            How to create meaningful progress with design?
          </h3>
          <p class="text-gray-500">
            It takes hard work to find the balance between values and aims.
          </p>
        </div>

        <div class="py-8 px-12 mb-12  transform transition duration-300 ease-in-out hover:-translate-y-2 w-[410px] h-[230px] mx-auto md:mx-0">
          <img src={Img4} />

          <h3 class="text-lg leading-normal mb-2 font-semibold">
            How to create meaningful progress with design?
          </h3>
          <p class="text-gray-500">
            It takes hard work to find the balance between values and aims.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
