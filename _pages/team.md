---
layout: page
permalink: /team/
---

**We are looking for new PhD students to join the team** [(see openings)]({{ site.url }}{{ site.baseurl }}/apply) **!**


## Lab Members
{% for member in site.data.team_members %}

<div class="row">
  <div class="col-sm-10 col-md-offset-1 clearfix">
    <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" /> </div>
  <div class="col-sm-4 clearfix">
    <h4>{{ member.name }}</h4>
    <p>{{ member.info }}<br>email: <{{ member.email }}></p>
    <p>{{ member.bio }}</p>
  </div>
</div>

{% endfor %}