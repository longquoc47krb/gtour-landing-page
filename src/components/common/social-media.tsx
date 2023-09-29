import React from "react";

function SocialMedia({ icon, background }: { icon: any; background: string }) {
  return (
    <div
      style={{
        background,
        borderRadius: 999,
        width: 40,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 5px 10px 5px",
      }}
    >
      {icon}
    </div>
  );
}

export default SocialMedia;
