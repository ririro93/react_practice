from django.db import models
from django.conf import settings
from django.core.validators import MinValueValidator, MaxValueValidator

CustomUser = settings.AUTH_USER_MODEL

# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=200)

class Review(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    content = models.TextField()
    rating = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)