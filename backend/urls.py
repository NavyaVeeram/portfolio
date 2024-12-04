from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import FormDataViewSet
from django.contrib import admin

router = DefaultRouter()
router.register(r'form-data', FormDataViewSet)

urlpatterns = [
    path('admin/', admin.site.urls), 
    path('api/', include(router.urls)),
    # Other URL patterns
]
