from bs4 import BeautifulSoup
import requests
import yaml
import os

# Channel RSS feed to scrape for video data
url = "https://www.youtube.com/feeds/videos.xml?channel_id=UC964lfWIMojN48cA6FK2Fhg"
html = requests.get(url)
soup = BeautifulSoup(html.text, "lxml")

vidlist = []
for entry in soup.find_all("entry"):
    video = {}
    # We want just the title and the video ID
    for title in entry.find_all("title"):
        print(title.text)
        video["title"] = title.text
    for id in entry.find_all("yt:videoid"):
        print(id.text)
        video["ytid"] = id.text
    vidlist.append(video)

# Saved to vidlist yaml file that is read by the website generator
vidlist_path = os.path.join(os.path.dirname(__file__), "_data", "vidlist.yml")
yaml.dump(vidlist, open(vidlist_path, "w"))