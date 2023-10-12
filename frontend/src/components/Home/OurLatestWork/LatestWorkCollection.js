import React from 'react';

const LatestWorkCollection = ({ photo }) => {
  const isLandscape = photo.width > photo.height;

  return (
    <div className={`latest_work_collection ${isLandscape ? 'landscape' : 'portrait'}`}>
      <img src={photo.urls.regular} alt={`Work`} loading="lazy" />
    </div>
  );
}

export default LatestWorkCollection;
