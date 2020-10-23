---
permalink: /test/
layout: page
---

{% for vid in site.data.videos %}

<div class="row mt-3">
  <div class="col-md-3 col-offset-md-1 clearfix">
    {% include youtubePlayer.html id={{ vid.id }} %}</div>
  <div class="col-md-3 col-offset-md-1 clearfix">
    {% include youtubePlayer.html id={{ vid.id }} %}</div>
  <div class="col-md-3 clearfix">
    {% include youtubePlayer.html id={{ vid.id }} %}</div>
</div>

{% endfor %}
