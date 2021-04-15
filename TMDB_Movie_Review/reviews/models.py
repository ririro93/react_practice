from django.db import models
from django.conf import settings
from django.core.validators import MinValueValidator, MaxValueValidator

CustomUser = settings.AUTH_USER_MODEL

# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=200)
    poster_path = models.CharField(max_length=200, blank=True, null=True, default='https://marlenalmurtagh.files.wordpress.com/2014/11/movie-template1.jpg')

    def __str__(self):
        return self.title

class Review(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    content = models.TextField()
    rating = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.content