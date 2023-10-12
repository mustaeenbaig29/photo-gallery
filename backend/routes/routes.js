const express = require('express');
const axios = require('axios');

const router = express.Router();

const unsplashAPIKey = '820dDCiOG0AKtqja9PBYKx_tbWGXVUeklNrkWW_EyIE';

async function fetchUnsplashData(url, params = {}) {
  try {
    const response = await axios.get(url, {
      params,
      headers: {
        'Authorization': `Client-ID ${unsplashAPIKey}`,
      },
    });

    if (response.status !== 200) {
      throw new Error(`Unsplash API returned status code ${response.status}`);
    }

    return response.data;
  } catch (error) {
    throw new Error(`An error occurred while fetching data from Unsplash: ${error.message}`);
  }
}

router.get('/photos', async (req, res) => {
  try {
    const page = req.query.page || 1;
    const perPage = req.query.perPage || 10;

    const photos = await fetchUnsplashData('https://api.unsplash.com/photos/', {
      page,
      per_page: perPage,
    });

    const formattedPhotos = photos.map((photo) => ({
      id: photo.id,
      description: photo.description,
      urls: {
        raw: photo.urls.raw,
        full: photo.urls.full,
        regular: photo.urls.regular,
        small: photo.urls.small,
        thumb: photo.urls.thumb,
      },
      likes: photo.likes,
      likedByUser: photo.liked_by_user,
    }));

    res.json(formattedPhotos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/photos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const photoDetails = await fetchUnsplashData(`https://api.unsplash.com/photos/${id}`);

    const formattedPhotoDetails = {
      id: photoDetails.id,
      description: photoDetails.description,
      urls: {
        raw: photoDetails.urls.raw,
        full: photoDetails.urls.full,
        regular: photoDetails.urls.regular,
        small: photoDetails.urls.small,
        thumb: photoDetails.urls.thumb,
      },
      likes: photoDetails.likes,
      likedByUser: photoDetails.liked_by_user,
    };

    res.json(formattedPhotoDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/search', async (req, res) => {
  try {
    const page = req.query.page || 1;
    const perPage = req.query.perPage || 10;

    const { query } = req.query;
    const searchResults = await fetchUnsplashData('https://api.unsplash.com/search/photos', {
      query,
      page,
      per_page: perPage,
    });

    const formattedSearchResults = searchResults.results.map((result) => ({
      id: result.id,
      description: result.description,
      urls: {
        raw: result.urls.raw,
        full: result.urls.full,
        regular: result.urls.regular,
        small: result.urls.small,
        thumb: result.urls.thumb,
      },
      likes: result.likes,
      likedByUser: result.liked_by_user,
    }));

    res.json(formattedSearchResults);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
