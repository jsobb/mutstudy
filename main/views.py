from django.shortcuts import render

# Create your views here.
def showmain(request):
    return render(request, 'main/index.html')

def showabout(request):
    return render(request, 'main/about.html')

def showcontact(request):
    return render(request, 'main/contact.html')

def showpricing(request):
    return render(request, 'main/pricing.html')

def showworksingle(request):
    return render(request, 'main/work-single.html')

def showwork(request):
    return render(request, 'main/work.html')
