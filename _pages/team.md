---
layout: page
permalink: /team/
---

**We are looking for new PhD students to join the team** [(see openings)]({{ site.url }}{{ site.baseurl }}/apply) **!**


## Lab Members
{% for member in site.data.team_members %}

<div class="row">
  <div class="col-sm-6 clearfix">
    <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
    <h4>{{ member.name }}</h4>
    <h4>{{ member.info }}<br>email: <{{ member.email }}></h4>
    <h4>{{ member.bio }}</h4>
  </div>
</div>

{% endfor %}
