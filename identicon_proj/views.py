from django.shortcuts import render
from django.contrib.auth.models import User

#!HomeView
def homeView(request):
    users = User.objects.all()
    print('Get users',users)
    
    context = {
        'users': users,
    }
    
    return render(request,'main.html',context)
