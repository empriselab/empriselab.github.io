const playlistUrl = 'https://www.youtube.com/watch?v=bkkzGDVs4hc&list=PLR4mEXh9zalJ0Ty3GxHHnhu9Rl941mdgi&pp=iAQB';
const playlistId = new URLSearchParams(new URL(playlistUrl).search).get("list");
const apiKey = 'AIzaSyACAQhPFEvUD_dMAis-Y48qiVO0hSVU-bk';

function embedVideos(videoData) {
  const container = document.getElementById('featuredVideosContainer');

  videoData.forEach(video => {

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${video.ytid}`;
    iframe.classList.add("embed-responsive-item");
    iframe.setAttribute("allowfullscreen", "");

    const videoDiv = document.createElement('div');
    videoDiv.classList.add("my-3", "embed-responsive", "embed-responsive-16by9", "col-md-3"); // Updated class to col-md-3
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

    console.log(mainVideoData);
    console.log(filteredVideoData);

    embedVideos(filteredVideoData);
  });
