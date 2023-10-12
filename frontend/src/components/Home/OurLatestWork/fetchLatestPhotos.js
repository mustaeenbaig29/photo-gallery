export const fetchLatestPhotos = async (setPhotos) => {
    try {
      const response = await fetch('http://localhost:7890/unsplash/photos');
      const data = await response.json();
      setPhotos(data.slice(0, 6));
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };