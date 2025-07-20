import React from "react";
import { BlinkBlur } from "react-loading-indicators";

const Loading = () => {
  return (
    <div className="mx-auto text-center">
      <BlinkBlur color="blue" size="medium" text="" textColor="" />
    </div>
  );
};

export default Loading;
