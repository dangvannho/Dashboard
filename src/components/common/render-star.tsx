import React from "react";
import StarIcon from "../icon/star-icon";
import NoneStarIcon from "../icon/none-star-icon";

const RenderStars = ({ rating }: { rating: number }) => {
  const totalStars = 5;
  
  return (
    <>
      {[...Array(totalStars)].map((_, index) => (
        index < rating ? (
          <StarIcon key={index} className={"w-4 h-4"} />
        ) : (
          <NoneStarIcon key={index} className={"w-4 h-4"} />
        )
      ))}
    </>
  );
};

export default RenderStars;
