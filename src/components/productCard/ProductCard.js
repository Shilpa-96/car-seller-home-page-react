import React from "react";
import ImageSlider from "../imageslider/ImageSlider";
import { BsFillPeopleFill, BsFuelPump, BsSpeedometer2 } from "react-icons/bs";
import { SiAutomattic } from "react-icons/si";
import { AiOutlineHeart } from "react-icons/ai";
import "./productcard.css";

export default function ProductCard({ caritem }) {
  const {
    model_name,
    year,
    review_people,
    type,
    mileage,
    mileage_type,
    emi,
    imgae01,
    image02,
    imageo3,
  } = caritem;
  const imgs = [imgae01, image02, imageo3];
  return (
    <div className="product-container">
      <ImageSlider imgs={imgs} />
      <div className="product-card-c-1">
        <span>{model_name}</span>
        <span className="year">{year}</span>
      </div>
      <div className="product-card-c-2">
        <span>
          <BsFillPeopleFill className="icon" />
          <span>{review_people} People</span>
        </span>
        <span>
          <BsFuelPump className="icon" />
          <span>{type}</span>
        </span>
      </div>
      <div className="product-card-c-3">
        <span>
          <BsSpeedometer2 className="icon" />
          <span className="mileage">{mileage}km/1-litre</span>
        </span>
        <span>
          <SiAutomattic className="icon" />
          <span>{mileage_type}</span>
        </span>
      </div>
      <div className="product-card-c-4">
        <span>
          <span className="emi">${emi}</span>/month
        </span>
        <span className="heart-rent">
          <AiOutlineHeart className="icon" />
          <button>Rent now</button>
        </span>
      </div>
    </div>
  );
}
