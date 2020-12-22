---
permalink: /publications/
layout: page
title: Publications
---

{% assign pubs_by_year = site.data.pubs | group_by: 'year' %}
{% for year in pubs_by_year %}
### {{ year.name }}

{% assign pubs_by_type = year.items | group_by: 'type' %}
{% for type_group in pubs_by_type %}
{% if type_group.name == 'conf-journal' %}
#### Conference / Journal Papers
{% elsif type_group.name == 'other' %}
#### Other Papers
{% endif %}

{% for pub in type_group.items %}
<a href="{{ pub.link.url }}">{{ pub.title }}</a>
<br/>{{ pub.authors }}
<br/><em>{{ pub.venue }}</em>&nbsp;{{ pub.year }}.
{% if pub.note %}
<br/><strong>{{ pub.note }}</strong>
{% endif %}
{% endfor %}
{% endfor %}
{% endfor %}
