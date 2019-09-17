from django.db import models
from django.contrib.postgres.fields import ArrayField, JSONField

# Create your models here.


class User(models.Model):
    id = models.TextField(primary_key=True)
    email = models.EmailField()
    password = models.TextField()
    encryptedId = models.TextField()


class UserDetials(models.Model):
    id = models.TextField(primary_key=True)
    name = models.TextField()
    age = models.IntegerField()
    gender = models.TextField()
    bio = models.TextField()
    images = ArrayField(models.TextField())
    last_login = models.DateTimeField()


class UserPreferences(models.Model):
    id = models.TextField(primary_key=True)
    prefer_gender = models.TextField()
    min_age = models.IntegerField()
    max_age = models.IntegerField()
    min_distance = models.IntegerField()
    max_distance = models.IntegerField()


class Location(models.Model):
    id = models.TextField(primary_key=True)
    location_x = models.DecimalField(max_digits=5, decimal_places=5)
    localion_y = models.DecimalField(max_digits=5, decimal_places=5)
    zone = models.IntegerField()


class UserConnections(models.Model):
    id = models.TextField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_id')
    connected_user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name='connected_user_id')


class Notifications(models.Model):
    id = models.TextField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    notification = JSONField()
    not_id = models.TextField()


class UserInfoMapping(models.Model):
    id = models.TextField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    user_detials_id = models.ForeignKey(UserDetials, on_delete=models.CASCADE)
    user_preferences_id = models.ForeignKey(UserPreferences, on_delete=models.CASCADE)
    user_location_id = models.ForeignKey(Location, on_delete=models.CASCADE)
    user_connections_id = models.ForeignKey(UserConnections, on_delete=models.CASCADE)
    notification_id = models.ForeignKey(Notifications, on_delete=models.CASCADE)
