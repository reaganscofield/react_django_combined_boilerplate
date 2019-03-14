from django.urls import path
from . import views

urlpatterns = [
    path('api/tech/', views.TechCategory.as_view() ),
]