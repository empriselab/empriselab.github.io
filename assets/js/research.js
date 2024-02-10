const playlistUrl = 'https://youtube.com/playlist?list=PLR4mEXh9zalJ0Ty3GxHHnhu9Rl941mdgi&feature=shared';
const playlistId = new URLSearchParams(new URL(playlistUrl).search).get("list");
const apiKey = 'AIzaSyC5EZFn45h7UE2g139ASNr8rGKA8J1eX5c';

function embedVideos(videoData) {
  const container = document.getElementById('featuredVideosContainer');

  videoData.forEach(video => {

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${video.ytid}`;
    iframe.classList.add("embed-responsive-item");
    iframe.setAttribute("allowfullscreen", "");

    const videoDiv = document.createElement('div');
    videoDiv.classList.add("my-3", "embed-responsive", "embed-responsive-16by9", "col-md-3");
    videoDiv.appendChild(iframe);

    container.appendChild(videoDiv);
  });
}

fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const mainVideoDataDiv = document.getElementById('mainVideoData');
    const mainVideoData = mainVideoDataDiv.textContent.split(',').map(ytid => ytid.trim());

    const filteredVideoData = data.items
      .map(item => ({
        title: item.snippet.title,
        ytid: item.snippet.resourceId.videoId
      }))
      .filter(video => !mainVideoData.includes(video.ytid)
      );

    const reversedFiltered = filteredVideoData.reverse();
    embedVideos(reversedFiltered);
  });
