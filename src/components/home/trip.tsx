"use client";

import { formatAsCurrency } from "@/utils";
import React from "react";
import { Rating } from "react-simple-star-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { LiaClock } from "react-icons/lia";
import Price from "../common/price";
export type ITrip = {
  image: string;
  title: string;
  address: string;
  currentPrice: number;
  previousPrice: number;
  reviews: number;
  date: string;
};
function Trip(props: ITrip) {
  return (
    <div className="trip-container float">
      <div className="trip-image">
        <img src={props.image} alt={props.title} loading="lazy" />
        {props.previousPrice ? <span className="sale-label">Sale</span> : null}
        <Price
          currentPrice={props.currentPrice}
          previousPrice={props.previousPrice}
          className="trip-price"
        />
      </div>
      <section className="trip-content">
        <h1 className="font-bold text-20 trip-title">{props.title}</h1>
        <p className="font-thin text-13 trip-address">{props.address}</p>
        <div className="flex">
          <div className="trip-rating">
            <Rating
              readonly={true}
              initialValue={props.reviews}
              className="rating-container"
              fillColor="#1ec6b6"
              transition
              size={15}
              fillIcon={<AiFillStar size={15} />}
              emptyIcon={<AiOutlineStar size={15} />}
            />
            <span className="font-bold text-12">{props.reviews} reviews</span>
          </div>
          <span className="font-thin text-12 flex">
            <LiaClock />
            <span style={{ fontWeight: 600 }}>{props.date}</span>
          </span>
        </div>
      </section>
    </div>
  );
}

export default Trip;
