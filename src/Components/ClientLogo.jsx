import React from "react";

const ClientLogo = ({ src, alt }) => {
  return (
    <div className="clientLogoWrapper">
      <img src={src} alt={alt} className="clientLogoImage" />
    </div>
  );
};

export default ClientLogo;
