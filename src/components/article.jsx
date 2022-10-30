import React from 'react';
import { Link } from 'react-router-dom';
import Img2 from '../assets/img2.png';
import Img3 from '../assets/img3.png';
import Img4 from '../assets/img4.png';
import Img5 from '../assets/img5.png';
import Img6 from '../assets/img6.png';
import Img7 from '../assets/img7.png';
import Img8 from '../assets/img8.png';
import Img9 from '../assets/img9.png';
import Img10 from '../assets/img10.png';
function Article() {
  return (
    <div className="mt-20 2xl:mx-96 ">
      <div className="grid grid-rows-3 md:grid-cols-3 gap-10 md:space-y-0 space-y-14">
        <div class="py-8 px-12 mb-12  transform transition duration-300 ease-in-out hover:-translate-y-2 w-[410px] h-[230px] mx-auto md:mx-0 cursor-pointer">
          <img src={Img2} />

          <h3 class="text-lg leading-normal mb-2 font-semibold">
            How to create meaningful progress with design?
          </h3>
          <p class="text-gray-500">
            It takes hard work to find the balance between values and aims.
          </p>
        </div>

        <Link to="/detail">
          <div class="md:py-8 px-12 mb-12  transform transition duration-300 ease-in-out hover:-translate-y-2 w-[410px] h-[230px] mx-auto md:mx-0 cursor-pointer">
            <img src={Img3} />

            <h3 class="text-lg leading-normal mb-2 font-semibold">
              How to create meaningful progress with design?
            </h3>
            <p class="text-gray-500">
              It takes hard work to find the balance between values and aims.
            </p>
          </div>
        </Link>
        <div class="py-8 px-12 mb-12  transform transition duration-300 ease-in-out hover:-translate-y-2 w-[410px] h-[230px] mx-auto md:mx-0 cursor-pointer">
          <img src={Img4} />

          <h3 class="text-lg leading-normal mb-2 font-semibold">
            Try peak-end rule on user journey map
          </h3>
          <p class="text-gray-500">
            Designing a user flow requires careful management of resources.
          </p>
        </div>

        <div class="py-8 px-12 mb-12  transform transition duration-300 ease-in-out hover:-translate-y-2 w-[410px] h-[230px] mx-auto md:mx-0 cursor-pointer">
          <img src={Img5} />

          <h3 class="text-lg leading-normal mb-2 font-semibold">
            How to increase acquisition and conversion rate through redesign?
          </h3>
          <p class="text-gray-500">
            Redesign Challenge : Zonation Feature of Indonesia Covid-19 Mobile
            App
          </p>
        </div>

        <div class="py-8 px-12 mb-12  transform transition duration-300 ease-in-out hover:-translate-y-2 w-[410px] h-[230px] mx-auto md:mx-0 cursor-pointer">
          <img src={Img6} />

          <h3 class="text-lg leading-normal mb-2 font-semibold">
            You Don’t Need To Be Perfect To Be A UX Designer
          </h3>
          <p class="text-gray-500">Lean into your uncertainty</p>
        </div>

        <div class="py-8 px-12 mb-12  transform transition duration-300 ease-in-out hover:-translate-y-2 w-[410px] h-[230px] mx-auto md:mx-0 cursor-pointer">
          <img src={Img7} />

          <h3 class="text-lg leading-normal mb-2 font-semibold">
            Designing a tool for Web3 Governance — A UX case study
          </h3>
          <p class="text-gray-500">
            Team: Underscore Protocol (_Prtcl) Role: UX Designer.
          </p>
        </div>

        <div class="py-8 px-12 mb-12  transform transition duration-300 ease-in-out hover:-translate-y-2 w-[410px] h-[230px] mx-auto md:mx-0 cursor-pointer">
          <img src={Img8} />

          <h3 class="text-lg leading-normal mb-2 font-semibold">
            Design Maturity: happy path to nowhere?
          </h3>
          <p class="text-gray-500">
            A UX designer and UI designer both work on creating beautiful
            interfaces, but their involvement and skill sets are required at
            different…
          </p>
        </div>

        <div class="py-8 px-12 mb-12  transform transition duration-300 ease-in-out hover:-translate-y-2 w-[410px] h-[230px] mx-auto md:mx-0 cursor-pointer">
          <img src={Img9} />

          <h3 class="text-lg leading-normal mb-2 font-semibold">
            UI vs. UX Designer: Which Career Path To Choose?
          </h3>
          <p class="text-gray-500">
            How can cheating in design help you become a better designer?
          </p>
        </div>

        <div class="py-8 px-12 mb-12  transform transition duration-300 ease-in-out hover:-translate-y-2 w-[410px] h-[230px] mx-auto md:mx-0 cursor-pointer">
          <img src={Img10} />

          <h3 class="text-lg leading-normal mb-2 font-semibold">
            Top 10 Online Platforms to Learn UI/UX Design
          </h3>
          <p class="text-gray-500">
            Companies around the world have a hard time finding qualified UI and
            UX designers. To make matters worse, demand for UX professionals…
          </p>
        </div>
      </div>
    </div>
  );
}

export default Article;
