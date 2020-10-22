---
permalink: /press/
layout: page
title: "Press"
---

{% for article in site.data.press %}

<div class="row mt-3">
  <div class="col-md-6 col-offset-md-1 clearfix">
    <a href="{{ article.url }}">{{ article.title }}</a></div>
  <div class="col-md-3 clearfix">
    {{ article.venue }}</div>
  <div class="col-md-3 clearfix">
    {{ article.date }}</div>
</div>
<hr style="height:2px;border-width:0;color:gray;background-color:gray">

{% endfor %}
