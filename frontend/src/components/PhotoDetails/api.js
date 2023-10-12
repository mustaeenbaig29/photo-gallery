const BASE_URL = 'http://localhost:7890/unsplash/photos';

export const getPhotoDetails = async (id, setPhoto) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    const data = await response.json();
    setPhoto(data);
  } catch (error) {
    console.error('Error fetching photo details:', error);
  }
};
