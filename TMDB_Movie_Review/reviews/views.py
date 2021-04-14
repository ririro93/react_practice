from django.shortcuts import render
from rest_framework import viewsets

from .models import Movie, Review
from .serializers import MovieSerializer, ReviewSerializer

# Create your views here.
class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer