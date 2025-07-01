import React from 'react';
import logoFooter from "../../assets/eddie-logo-footer.png";

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-dark-gray flex items-center justify-center">
      <img
        src={logoFooter}
        alt="Eddie Realty Preloader"
        className="h-20 w-auto animate-pulse"
      />
    </div>
  );
};

export default Preloader;
