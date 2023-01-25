import Image from "next/image";
import React from "react";

export const SocialIcon = ({ src }) => {
  return (
    <div>
      <Image
        style={{ marginLeft: 15, marginRight: 15 }}
        src={src}
        alt=""
        width={32}
        height={32}
      />
    </div>
  );
};
