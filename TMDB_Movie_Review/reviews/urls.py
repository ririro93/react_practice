from django.urls import path, include
from rest_framework import routers

from .views import MovieViewSet, ReviewViewSet

app_name = 'reviews'

# Router
router = routers.DefaultRouter()
router.register(r'movies', MovieViewSet, 'movies')
router.register(r'reviews', ReviewViewSet, 'reviews')

urlpatterns = [
    path('', include(router.urls)),
]