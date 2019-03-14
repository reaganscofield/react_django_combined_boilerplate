from rest_framework import serializers 
from .models import TechnologiesCategory

class TechCatSerializer(serializers.ModelSerializer):
    class Meta:
        model = TechnologiesCategory
        fields = '__all__' #('id', 'name', 'created_at', 'updated_at') #  map to '__all__'