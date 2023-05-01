from django.db import models

class Task(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)
    create_date = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title
