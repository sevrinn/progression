# Progression Music App

## Essential Features
- **Registration and authorization.** You can view artists pages and listen to music but you cant interact in any other way. Registered users can like & favorite tracks and artists, upload tracks of their own as private while they're in progress and public when they are finished. Registration form is standard (we'll start with email and add Facebook, Google, and Apple auth later)

- **Simple search and navigation.** User can easily a quickly search for tracks, artists, albums, and genres by keywords. 

- **Music library.** For now, this will be just a music blog for my different music personalities. lol. So it'll be all of my music.
  * Storing the music track files using either Amazon S3 or Firebase or some other cloud based CDN. More research needed before we decide.
  * Broadcast with HLS (HTTP Live Streaming service) for javascript 
  * File format? I guess I'll start with mp3 (128/320 kb/s) (all my music sounds like shit anyway so whatever. lol) but I will look into using OGG Vorbis because thats what Spotify uses.

- **Music player** Supports all the normal features:
  * Play/ Stop
  * Rewind
  * Next/ Previous track
  * Favorite
  * Share track on social media

- **Uploading songs to service** Users can upload their tracks to the app, making them either public or private. 

### References
- general overview based on this article [SoundCloud Clone App - How to Create A Music App Like SoundCloud?](https://www.merehead.com/blog/soundcloud-clone-app-create-music-app-like-soundcloud/)

- HLS decoded using JavaScript with [hls.js](https://www.github.com/dailymotion/hls.js)
