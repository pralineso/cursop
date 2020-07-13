from django.shortcuts import render, HttpResponse

# Create your views here.
def hello(request, nome, idade):
    return HttpResponse('<h1>Hello {}! voce tem {} anos</h1>'.format(nome, idade))

def soma(request, a, b):
    soma = a + b
    return HttpResponse('A soma de {} e {} é {}'.format(a, b, soma))

def subtracao(request, a, b):
    sub = a - b
    return  HttpResponse('A subtração entre {} e {} é {}'. format(a, b, sub))