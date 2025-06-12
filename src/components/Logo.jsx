import React from "react";

const Logo = ({ width = "100px" }) => {
  return (
    <div>
      <img
        width={width}
        src="https://static.vecteezy.com/system/resources/thumbnails/027/992/698/small_2x/link-sign-icon-chain-link-symbol-3d-illustration-png.png"
        alt="Web url"
      />
    </div>
  );
};

export default Logo;
