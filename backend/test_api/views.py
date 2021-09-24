from django.http import JsonResponse
import time


def index(request):
    return JsonResponse({
        'time': time.time()
    })