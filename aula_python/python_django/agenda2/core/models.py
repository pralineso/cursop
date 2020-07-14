from django.db import models
from django.contrib.auth.models import User
# Create your models here.

#aki é onde cria as tabelas
class Evento(models.Model):
    titulo = models.CharField(max_length=100)
    descricao = models.TextField(blank=True, null=True)
    data_evento = models.DateTimeField(verbose_name='Data do Evento') #esse verbose é o nome q vai aparecer la na coluna
    data_criacao = models.DateTimeField(auto_now=True)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)

    #aki ta dando nome dessa tabela
    class Meta:
        db_table = 'eventos'

    #aki ta tratando o objeto
    def __str__(self):
        return self.titulo

    def get_data_evento(self):
        return  self.data_evento.strftime('%d/%m/%Y %H:%M Hrs')