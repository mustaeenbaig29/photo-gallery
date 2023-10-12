import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getPhotoDetails } from './api'; 
import PhotoDetailsContent from './PhotoDetailsContent'; 
import "./PhotoDetails.css"

const PhotoDetails = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    getPhotoDetails(id, setPhoto);
  }, [id]);

  return (
    <div className='photo-details-container'>
      <PhotoDetailsContent photo={photo} />
    </div>
  );
}

export default PhotoDetails;
