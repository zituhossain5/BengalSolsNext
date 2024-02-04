import React from 'react';

const Partnership = ({partnershipContent}) => {
  return (
    <header className="p-8 text-center partnership">
      <h1 className="text-3xl font-bold mb-4">
      {partnershipContent[0].attributes.title}
      </h1>
      <p className="text-lg">
      {partnershipContent[0].attributes.description}

      </p>
    </header>
  );
};

export default Partnership;
