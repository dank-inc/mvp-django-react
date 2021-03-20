from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from server.api import serializers

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = serializers.UserSerializer
    permission_classes = [permissions.IsAuthenticated]
