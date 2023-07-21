from django.urls import path
from . import views

urlpatterns = [
    path('', views.send_to_main),
    path('main/', views.main),
    path('skill_page/', views.skills),
    path('about_me/', views.about_me),
    path('test/', views.test)
]
