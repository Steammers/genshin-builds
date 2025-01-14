import { memo } from "react";

const Logo = () => {
  return (
    <>
      <img
        src="/logo.png"
        className="ml-5 lg:ml-0 lg:mr-5 fill-current text-white"
        alt="GenshinBuilds logo"
      />
      <span className="text-gray-100 text-lg font-normal hidden">
        GenshinBuilds
      </span>
    </>
  );
};

export default memo(Logo);
