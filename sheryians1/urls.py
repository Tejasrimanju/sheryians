from django.urls import path
from .views import *

app_name='sheryians1'

urlpatterns=[
    path('',home,name='home'),
    path('courses/',courses,name='courses'),
    path('signin/',signin,name='signin')
] 