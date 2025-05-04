import React, { useEffect, useState } from "react";
// import axios from 'axios'
import "./YouTube.css";


const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID = "UCYFDJ7AVYrEz4I5v_7Q5rQQ"; // Apple's YouTube channel
const MAX_RESULTS = 12 // Fetch 6 videos


const YouTube = () => {
  const [youTubeVideos, setVideo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState("date");




  useEffect(() => {

    // // const url  = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=${MAX_RESULTS}`
    // const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet&order=${sortOption}&maxResults=9`;

    // if (!API_KEY) {
    //   setError("YouTube API key is missing");
    //   setLoading(false);
    //   return;
    // }

    // fetch(url)
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error(`Http error: ${res.status}`);
    //     }
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data)
    //     const youtubeVideoData = data.items;
    //     setVideo(youtubeVideoData);
    //     // console.log(youtubeVideoData);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.error("Error Fetching YouTube Videos", err.message);
    //     setError(err.message);
    //     setLoading(false);
    //   });

    const fetchYouTubeVideo = async () => {
      try {
     

        const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet&order=${sortOption}&maxResults=9`;

        if (!API_KEY) {
            setError("YouTube API key is missing");
            setLoading(false);
            return;
          }

        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await res.json();
        setVideo(data.items);
        setLoading(false);
        // console.info("Fetched videos:", data.items);
      } catch (err) {
        console.error("Error Fetching YouTube Videos", err.message);
            setError(err.message);
            setLoading(false);
      }
    };

    fetchYouTubeVideo();
  }, [sortOption]);

  // Log state changes
  useEffect(() => {
    // console.log("Updated youTubeVideos:", youTubeVideos);
  }, [sortOption]);

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


            {/*Select Option  */}
            <div className="col-12 mb-3">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="form-select w-auto mx-auto"
              >
                <option value="date">Latest</option>
                <option value="viewCount">Most Viewed</option>
              </select>
            </div>

            {loading ? (
               <div className="col-12">
               <div className="loading-text">🎥 Loading videos... Please wait!</div>
             </div>
            ):error ? (
              <div className="col-12 text-danger">🚨 Error: {error}</div>
            ):youTubeVideos.length > 0 ? (
              youTubeVideos.map((video) => {
                const vidId = video.id.videoId;
                const vidLink = `https://www.youtube.com/watch?v=${vidId}`;
                return (
                  <div key={vidId} className="col-sm-12 col-md-4">
                    <div className="singleVideoWrapper my-2 ">
                      <div className="videoThumbnail">
                        <a
                          href={vidLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={video.snippet.thumbnails.high.url}
                            alt={video.snippet.title}
                          />
                        </a>
                      </div>
                      <div className="videoInfoWrapper">
                        <div className="videoTitle">
                          <a
                            href={vidLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {video.snippet.title}
                          </a>
                        </div>
                        <div className="videoDesc">
                          {video.snippet.description}
                        </div>
                        <div className="videoPublishedDate">
                          {video.snippet.publishedAt}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-12">No Videos Found</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default YouTube;
