---
permalink: /people/
layout: page
---

#### **We are looking for new PhD students to join the team** [(see openings)]({{ site.url }}{{ site.baseurl }}/apply) **!**


## Lab Members
{% for member in site.data.team_members %}

<div class="row mt-3">
  <div class="col-md-4 col-offset-md-1 clearfix">
    <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="100%" style="float: left" /> </div>
  <div class="col-md-8 clearfix">
    <br>{{ <strong>member.name</strong> }}
    <br>{{ member.info }}<br><strong>Email:</strong> {{ member.email }}
    <br>{{ member.bio }}
  </div>
</div>

{% endfor %}
