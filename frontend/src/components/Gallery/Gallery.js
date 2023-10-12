import React, { useState, useEffect } from 'react';
import './Gallery.css';
import Pagination from './Pagination';
import { NavLink, useLocation } from 'react-router-dom';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const perPage = 6;
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query');

  const loadPhotos = () => {
    setLoading(true);

    let apiUrl;

    if (searchQuery) {
      apiUrl = `http://localhost:7890/unsplash/search?query=${searchQuery}&page=${page}&perPage=${perPage}`;
    } else {
      apiUrl = `http://localhost:7890/unsplash/photos?page=${page}&perPage=${perPage}`;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    setPhotos([]);
    loadPhotos();
  }, [page, searchQuery]);

  const isLandscape = (photo) => photo.width > photo.height;

  return (
    <section className='gallery_work_section'>
      <div className='latest_work_heading'>
        <h1 className='latest_work_heading'>Gallery</h1>
      </div>
      <div className='latest_work_collections'>
        {photos.map((photo, index) => (
          <div
            className={`latest_work_collection ${isLandscape(photo) ? 'landscape' : 'portrait'}`}
            key={index}
          >
            <NavLink to={`/photos/${photo.id}`}>
              <img src={photo.urls.regular} alt={`Image ${index + 1}`} loading='eager' />
            </NavLink>
          </div>
        ))}
      </div>
      <Pagination page={page} setPage={setPage} disabledPrev={page === 1} />
      {loading && <div className='loading_indicator'><p>Loading...</p></div>}
    </section>
  );
};

export default Gallery;
