from django.shortcuts import render
from rest_framework import generics
from .models import TechnologiesCategory
from .serializers import TechCatSerializer

# Create your views here.

class TechCategory(generics.ListCreateAPIView):
    queryset = TechnologiesCategory.objects.all()
    serializer_class = TechCatSerializer
