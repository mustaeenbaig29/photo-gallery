const express = require('express');
const app = express();
const unsplashRouter = require('./routes/routes');
const cors = require('cors');
require("dotenv").config()

const port = process.env.PORT || 1290;

const corsOptions = {
  origin: ['http://localhost:3000'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));

app.use('/unsplash', unsplashRouter);

app.get('/photos', async (req, res) => {
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
