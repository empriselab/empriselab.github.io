---
permalink: /pub/
layout: page
---


#### Here's a link to our [Google Scholar](https://scholar.google.com/citations?user=X1zsXTgAAAAJ&hl=en&oi=ao)

{% for publi in site.data.publist %}

  <a href="{{ publi.link.url }}">{{ publi.title }}</a> <br />
  {{ publi.authors }}<br />
  <em>{{ publi.venue }}</em>&nbsp;{{ publi.year }}.<br />
  <strong>{{ publi.note }}</strong>

{% endfor %}
