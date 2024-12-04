from rest_framework import viewsets
from .models import FormData
from .serializers import FormDataSerializer

class FormDataViewSet(viewsets.ModelViewSet):
    queryset = FormData.objects.all()
    serializer_class = FormDataSerializer
