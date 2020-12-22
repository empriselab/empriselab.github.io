---
permalink: /press/
layout: page
title: "Press"
---

{% for article in site.data.press %}
<div class="row my-3">
  <div class="col-md-6"><a href="{{ article.url }}">{{ article.title }}</a></div>
  <div class="col-md-3">{{ article.venue }}</div>
  <div class="col-md-3">{{ article.date }}</div>
</div>
{% endfor %}
