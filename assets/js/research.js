const playlistUrl = 'https://www.youtube.com/watch?v=bkkzGDVs4hc&list=PLR4mEXh9zalJ0Ty3GxHHnhu9Rl941mdgi&pp=iAQB';
const playlistId = new URLSearchParams(new URL(playlistUrl).search).get("list");
const apiKey = 'AIzaSyACAQhPFEvUD_dMAis-Y48qiVO0hSVU-bk';

function embedVideos(videoIds) {
  const container = document.getElementById('featuredVideosContainer');

  videoIds.forEach(id => {
    // Create the iframe for each video
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${id}`;
    iframe.classList.add("embed-responsive-item");
    iframe.setAttribute("allowfullscreen", "");

    // Create the column for the iframe
    const videoDiv = document.createElement('div');
    videoDiv.classList.add("my-3", "embed-responsive", "embed-responsive-16by9", "video-col");
    videoDiv.appendChild(iframe);

    // Append the column to the main container
    container.appendChild(videoDiv);
  });
}

// Fetch video IDs and embed them
fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=50&playlistId=${playlistId}&key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const videoIds = data.items.map(item => item.contentDetails.videoId);
    embedVideos(videoIds);
  });
