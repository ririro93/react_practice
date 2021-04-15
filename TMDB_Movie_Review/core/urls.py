from rest_framework import routers
from django.urls import path, include
from django.contrib import admin
from django.contrib.auth import get_user_model

from accounts.views import CustomUserViewSet
from reviews.views import MovieViewSet, ReviewViewSet

CustomUser = get_user_model()

# Router
router = routers.DefaultRouter()
router.register(r'movies', MovieViewSet, 'movies')
router.register(r'reviews', ReviewViewSet, 'reviews')
router.register(r'users', CustomUserViewSet, 'users')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
