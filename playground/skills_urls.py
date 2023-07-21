from django.urls import path
from . import views

urlpatterns = [
    path('python_projects/', views.python_proj),
    path('html_projects/', views.html_proj),
    path('cpp_projects/', views.cpp_proj),
]
