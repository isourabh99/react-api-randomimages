import axios from "../utils/axiosConfig";
import React from "react";
import { useState, useEffect } from "react";
const Gallery = () => {
  const [images, setimages] = useState([]);
  const getImages = async () => {
    const res = await axios.get("/products?limit=20");
    console.log(res.data);
    setimages(res.data);
  };
  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="px-20 overflow-x-hidden">
      {/* <button className="bg-yellow-900 px-3 py-1 hover:bg-yellow-950 ">GET Images</button> */}
      <section className="flex gap-10 flex-wrap py-10">
        {images.map((img) => {
          return (
            <div className=" w-[40vh] h-[55vh] bg-zinc-900 rounded-md p-6">
              <img
                src={img.image}
                className="rounded-lg w-[10vw] text-center m-auto"
              />
              <h1 className="text-xl text-white mt-4">{img.title}</h1>
              <h1 className="text-green-500 mt-4">PRICE {img.price}</h1>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Gallery;
