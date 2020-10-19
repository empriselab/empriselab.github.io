---
permalink: /pub/
layout: page
---


### Here's a link to Tapo's [Google Scholar](https://scholar.google.com/citations?user=X1zsXTgAAAAJ&hl=en&oi=ao). Some relevant publications are given below.

<h3>2020</h3>

{% for publi in site.data.publist %}
{% if publi.year == 2020 %}
  <a href="{{ publi.link.url }}">{{ publi.title }}</a> <br />
  {{ publi.authors }}<br />
  <em>{{ publi.venue }}</em>&nbsp;{{ publi.year }}.<br />
  <strong>{{ publi.note }}</strong>
{% endif %}
{% endfor %}

<h3>2019</h3>

{% for publi in site.data.publist %}
{% if publi.year == 2019 %}
  <a href="{{ publi.link.url }}">{{ publi.title }}</a> <br />
  {{ publi.authors }}<br />
  <em>{{ publi.venue }}</em>&nbsp;{{ publi.year }}.<br />
  <strong>{{ publi.note }}</strong>
{% endif %}
{% endfor %}
