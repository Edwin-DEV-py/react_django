from django.urls import path,include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from .api import *

Router = routers.DefaultRouter()
Router.register(r'tasks',CrudApi,'tasks')

urlpatterns = [
    path('api/',include(Router.urls)),
    path("docs/",include_docs_urls(title="Task Api"))
]