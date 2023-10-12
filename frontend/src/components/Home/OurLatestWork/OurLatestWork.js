import React, { useState, useEffect } from 'react';
import './OurLatestWork.css';
import { NavLink } from 'react-router-dom';
import LatestWorkCollection from './LatestWorkCollection';
import { fetchLatestPhotos } from './fetchLatestPhotos'; 

const OurLatestWork = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchLatestPhotos(setPhotos);
  }, []);

  return (
    <section className='latest_work_section'>
      <div className='latest_work_heading'>
        <h1 className='latest_work_heading'>Our Latest Works</h1>
      </div>
      <div className='latest_work_collections'>
        {photos.map((photo, index) => (
          <LatestWorkCollection key={index} photo={photo} />
        ))}
      </div>
      <NavLink to='/gallery'>
        <button className='all_projects'>All Projects</button>
      </NavLink>
    </section>
  );
}

export default OurLatestWork;
