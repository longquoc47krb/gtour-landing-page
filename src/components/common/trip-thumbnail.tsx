import { formatAsCurrency } from "@/utils";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Rating } from "react-simple-star-rating";
import Price from "./price";

type ITrip = {
  image: string;
  title: string;
  currentPrice: number;
  previousPrice: number;
  rate: number;
};
function TripThumbnail(props: ITrip) {
  const { image, title, rate, currentPrice, previousPrice } = props;
  return (
    <div
      className="thumbnail-container"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="thumbnail-content">
        <Price
          currentPrice={currentPrice}
          previousPrice={previousPrice}
          className="thumbnail-price"
        />
        <div className="thumbnail-info">
          <h1
            className="font-bold text-20 trip-title"
            style={{ color: "white" }}
          >
            {title}
          </h1>
          <Rating
            readonly={true}
            initialValue={rate}
            className="rating-container"
            fillColor="#1ec6b6"
            transition
            size={15}
            fillIcon={<AiFillStar size={15} />}
            emptyIcon={<AiOutlineStar size={15} />}
          />
        </div>
      </div>
    </div>
  );
}

export default TripThumbnail;
