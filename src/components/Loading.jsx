import React from "react";
import { OrbitProgress } from "react-loading-indicators";

export default function Loading() {
  return (
    <div className="">
      <OrbitProgress
        variant="spokes"
        color="#7048e8"
        size="medium"
        text=""
        textColor=""
      />
    </div>
  );
}
