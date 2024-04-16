from django.urls import path
from . import views

urlpatterns = [
    path('slotsRemaining/', views.detect_parking_spaces),
]
