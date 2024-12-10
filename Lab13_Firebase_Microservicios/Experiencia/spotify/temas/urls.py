from django.urls import path, include  
from rest_framework.routers import DefaultRouter  
from .views import AlbunesView  

router = DefaultRouter()  
router.register(r'albunes', AlbunesView)  

urlpatterns = [  
    path('', include(router.urls)),  
]