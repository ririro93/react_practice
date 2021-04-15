from django.contrib import admin

from .models import Movie, Review

class MovieAdmin(admin.ModelAdmin):
    model = Movie
    list_display = ['id', 'title']

class ReviewAdmin(admin.ModelAdmin):
    model = Review
    list_display = ['id', 'movie', 'author', 'content', 'rating', 'created_at', 'updated_at']


admin.site.register(Movie, MovieAdmin)
admin.site.register(Review, ReviewAdmin)