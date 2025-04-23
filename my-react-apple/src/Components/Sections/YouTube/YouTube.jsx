import React, { useEffect, useState } from "react";
// import axios from 'axios'
import "./YouTube.css";
const YouTube = () => {
  const [youTubeVideos, setVideo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
    const CHANNEL_ID = "UCYFDJ7AVYrEz4I5v_7Q5rQQ"; // Apple's YouTube channel
    const MAX_RESULTS = 6; // Fetch 6 videos

    // const url  = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=${MAX_RESULTS}`
    const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet&order=date&maxResults=12`;

    if (!API_KEY) {
      setError("YouTube API key is missing");
      setLoading(false);
      return;
    }

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Http error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data)
        const youtubeVideoData = data.items;
        setVideo(youtubeVideoData);
        console.log(youtubeVideoData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error Fetching YouTube Videos", err.message);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Log state changes
  useEffect(() => {
    console.log("Updated youTubeVideos:", youTubeVideos);
  }, [youTubeVideos]);

  return (
    <>
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper">
                Latest Videos
              </div>
            </div>

            {youTubeVideos.length > 0 ? (
              youTubeVideos.map((video) => {
                const vidId = video.id.videoId;
                const vidLink = `https://www.youtube.com/watch?v=${vidId}`
                return (
                  <div key={vidId} className="col-sm-12 col-md-4">
                    <div className="singleVideoWrapper">
                      <div className="videoThumbnail">
                        <a href={vidLink} target="_blank" rel="noopener noreferrer">
                          <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
                        </a>
                      </div>
                      <div className="videoInfoWrapper">
                        <div className="videoTitle">
                          <a href={vidLink} target="_blank" rel="noopener noreferrer">
                            {video.snippet.title}
                          </a>
                        </div>
                        <div className="videoDesc">{video.snippet.description}</div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-12">Loading videos...</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default YouTube;
