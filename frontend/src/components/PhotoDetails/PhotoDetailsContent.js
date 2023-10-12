import React from 'react';
import { NavLink } from 'react-router-dom';

const PhotoDetailsContent = ({ photo }) => {
  return (
    <>
      <div className='photo-details-left'>
        {photo && photo.urls && photo.urls.raw && (
          <img src={photo.urls.raw} alt={photo.alt_description || 'Image'} className='center-image' />
        )}
      </div>

      <div className='photo-details-right'>
        {photo ? (
          <div>
            <h2>Photo By: <strong>{photo.username}</strong></h2>
            <p>Description: <em>{photo.description || 'No description available'}</em></p>
            <p>Total Likes: <strong>{photo.likes || 'No likes available'}</strong></p>
            <button>
              <NavLink to="/gallery">Back to Gallery</NavLink>
            </button>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default PhotoDetailsContent;
