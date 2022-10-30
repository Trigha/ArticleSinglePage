import React from 'react';
import Select from 'react-select';
function NewArticle() {
  const options = [
    { value: 'Categori A', label: 'Categori A' },
    { value: 'Categori B', label: 'Categori B' },
    { value: 'Categori C', label: 'Categori C' },
  ];
  return (
    <div className="flex justify-center h-full w-full">
      <div className="pt-20 md: w-full h-full 2xl:px-96">
        <form className="flex md:flex-row flex-col justify-between mx-auto">
          <div className="md:w-1/2 flex flex-col">
            <h1 className="md:text-center font-semibold text-2xl px-10">
              Create a New Article
            </h1>
            <span className="md:text-center md:mr-48 px-10 pt-8">Title:</span>
            <input
              type="text"
              placeholder="Enter your Article Title"
              class="2xl:ml-44 2xl:w-[520px] ml-10 mt-2 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring lg:w-[628px] w-[408px] md:h-[38px]"
            />
            <textarea
              class="resize-y rounded-md border w-[408px] 2xl:w-[520px] h-[330px] 2xl:h-[500px] 2xl:ml-44 ml-10 mt-8 px-3 py-3"
              placeholder="Write your Story"
            ></textarea>
          </div>
          <div className="md:w-1/2 flex flex-col">
            <h1 className="md:text-center font-semibold text-2xl px-10 pt-10">
              Publication Detail
            </h1>
            <span className="md:text-center 2xl:mr-[72px] px-10 pt-8">
              Short description
            </span>
            <textarea
              class="resize-y rounded-md border w-[408px] h-[132.06px] ml-10 2xl:ml-[185px] mt-2 px-3 py-3 md:pr-[72px]"
              placeholder="Enter your Article Short Description"
            ></textarea>
            <span className="md:text-center 2xl:mr-28 px-10 pt-8 ">
              Thumbnail
            </span>
            <input
              type="file"
              className="border w-[408px] 2xl:ml-[185px] ml-10 mt-2"
            />
            <span className="md:text-center 2xl:mr-28 md:mr-48 px-10 pt-8">
              Categories
            </span>
            <Select
              placeholder="Select Category"
              options={options}
              className="w-[408px] ml-10 mt-2  2xl:ml-[185px]"
            />
            <div className="flex flex-row justify-between pt-8">
              <span className="md:text-center 2xl:ml-36 2xl:mr-64 md:mr-48 px-10">
                Published
              </span>
              <label
                for="default-toggle"
                className="inline-flex relative items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  value=""
                  id="default-toggle"
                  className="sr-only peer"
                />
                <div class="mr-10 w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <button className="w-[408px] h-[47px] bg-[#ED3237] rounded-[5px] ml-10 mt-8 text-white 2xl:ml-[185px]">
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewArticle;
