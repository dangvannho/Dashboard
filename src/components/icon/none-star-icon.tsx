import React from "react";

const NoneStarIcon = ({ className, ...props }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      className={className}
      {...props}
    >
      <path
        opacity="0.2"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 10.88L3.29772 14.4721L5.26096 8.88997L0.391548 5.52786L6.30718 5.67003L8 0L9.69282 5.67003L15.6085 5.52786L10.739 8.88997L12.7023 14.4721L8 10.88Z"
        fill="black"
      />
    </svg>
  );
};

export default NoneStarIcon;
