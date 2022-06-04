from django.contrib import admin
from .models import Daily, Evaluation
from markdownx.admin import MarkdownxModelAdmin  # adminページでマークダウン記法を使うためのパッケージ

admin.site.register(Evaluation)
admin.site.register(Daily, MarkdownxModelAdmin)
