# from django.shortcuts import render, redirect
from django.shortcuts import render
from core.models import Evento
# Create your views here.

# def index(request):
#     return redirect('/agenda/')

def lista_eventos(request):
    # evento = Evento.objects.get(id=1) #so 1 user em especifico
    # usuario = request.user #usuario autenticando
    # evento = Evento.objects.filter(usuario=usuario) #usuario autenticado
    evento = Evento.objects.all()
    dados = {'eventos': evento}
    return render(request, 'agenda.html', dados)