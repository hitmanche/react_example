import React from "react";
import Lottie from "react-lottie";
import welcomeLottie from "../lottie/welcome.json";

function CmpHome() {
  return (
    <div>
      <h1>Ana Sayfa Tayfun</h1>
      <Lottie
        height={400}
        width={400}
        options={{
          animationData: welcomeLottie,
          loop: true,
          autoplay: true,
        }}
      />
    </div>
  );
}

export default CmpHome;
