---
permalink: /test/
layout: page
---

{% for vid in site.data.videos %}

<div class="row mt-5">
  <div class="col-md-4 col-offset-md-1 clearfix">
    {% include youtubePlayer.html id="drUPDtQ1FQ4" %}</div>
  <div class="col-md-4 col-offset-md-1 clearfix">
    {% include youtubePlayer.html id="drUPDtQ1FQ4" %}</div>
  <div class="col-md-4 clearfix">
    {% include youtubePlayer.html id="drUPDtQ1FQ4" %}</div>
</div>

{% endfor %}
