from django.shortcuts import render
from rest_framework import viewsets,permissions
from .serializer import *
from .models import *

class CrudApi(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
    permission_classes = [permissions.AllowAny]
    