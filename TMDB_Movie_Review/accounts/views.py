from rest_framework import viewsets
from django.shortcuts import render
from django.contrib.auth import get_user_model

from .serializers import CustomUserSerializer

CustomUser = get_user_model()

# Create your views here.
class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer