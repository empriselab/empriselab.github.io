---
permalink: /people/
layout: page
---

<h3>**We are looking for new PhD students to join the team** [(see openings)]({{ site.url }}{{ site.baseurl }}/apply) **!**</h3>


## Lab Members
{% for member in site.data.team_members %}

<div class="row mt-3">
  <div class="col-sm-4 col-offset-sm-1 clearfix">
    <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="90%" style="float: left" /> </div>
  <div class="col-sm-8 clearfix">
    <h4>{{ member.name }}</h4>
    <p>{{ member.info }}<br>Email: <{{ member.email }}></p>
    <p>{{ member.bio }}</p>
  </div>
</div>

{% endfor %}
