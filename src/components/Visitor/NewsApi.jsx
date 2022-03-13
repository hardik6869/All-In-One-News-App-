import React, { useState } from "react";

const NewsApi = () => {
  const [value, setValue] = useState("");
  const News = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=keyword&apiKey=cc27756e2cc848d080bb56bba99cc1a7"
    );
    // "https://newsapi.org/v2/everything?q=keyword&apiKey=7f2e1d68bf334485a501a9476a596eec"
    const data = await response.json();
    const NewsData = data.articles.slice(0, 45).map((value, index) => {
      return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={value.urlToImage}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{value.title}</div>
            <p className="text-gray-700 text-base">{value.description}</p>
            {/* <a classNameName="font-bold text-x" href={value.url}>
                Read More
              </a> */}
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {value.author === null ? "None" : value.author}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {value.source.name}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {value.publishedAt}
            </span>
          </div>
        </div>
      );
    });
    setValue(NewsData);
  };
  News();
  return (
    <div className="p-10 grid grid-col-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
      {value}
    </div>
  );
};

export default NewsApi;
