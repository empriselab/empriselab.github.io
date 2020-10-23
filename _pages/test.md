---
permalink: /test/
layout: page
---

{% for vid in site.data.videos %}

<div class="row mt-3">
  <div class="col-lg-4 clearfix">
    {% include youtubePlayer.html id="{{ vid.videoid }}" %}</div>
  <div class="col-lg-4 clearfix">
    {% include youtubePlayer.html id="drUPDtQ1FQ4" %}</div>
  <div class="col-lg-4 clearfix">
    {% include youtubePlayer.html id="drUPDtQ1FQ4" %}</div>
</div>

{% endfor %}
