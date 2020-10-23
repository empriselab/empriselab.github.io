---
permalink: /test/
layout: page
---

{% for resvid in site.data.videos %}

<div class="row mt-3">
  <div class="col-lg-4 clearfix">
    {% include youtubePlayer.html id="{{ resvid.identity }}" %}</div>
  <div class="col-lg-4 clearfix">
    {% include youtubePlayer.html id="drUPDtQ1FQ4" %}</div>
  <div class="col-lg-4 clearfix">
    {% include youtubePlayer.html id="drUPDtQ1FQ4" %}</div>
</div>

{% endfor %}
