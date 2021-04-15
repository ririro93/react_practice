from rest_framework import serializers

from .models import Movie, Review

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
    # for response to react
    class Meta:
        model = Review
        fields = ['id', 'movie', 'content', 'rating', 'created_at', 'updated_at', 'movie', 'author']
