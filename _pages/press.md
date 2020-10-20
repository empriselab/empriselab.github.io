---
permalink: /press/
layout: page
title: "Press"
---

{% for article in site.data.press %}
<p><a href="{{ article.url }}">{{ article.title }}</a>,
{{ article.venue }}.
{{ article.date }}.</p>
{% endfor %}
