---
permalink: /allnews/
layout: page
title: "News"
---

{% for article in site.data.news %}
<p>{{ article.date }} <br>
<em>{{ article.headline }}</em></p>
{% endfor %}
