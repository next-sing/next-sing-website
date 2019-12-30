---
layout: home
---
## News
{% for post in site.data.news %}
{{ post.date }}. {{ post.content }}
{% endfor %}
