from models import Pessoas, Usuarios, Atividades

#Insere dados na tabela pessoa
def insere_pessoas():
    pessoa = Pessoas(nome='Mara', idade=15)
    print(pessoa)
    pessoa.save()

#Realiza consulta na tabela pessoa
def consulta_pessoas():
     pessoa = Pessoas.query.all()
     print(pessoa)
    # pessoa = Pessoas.query.filter_by(nome='Mariana').first()
    # print(pessoa.idade)
    #  pessoa = Pessoas.query.filter_by(nome='Mariana')
    #  for p in pessoa:
    #      print(p.nome)
    #      print(p.idade)

#Altera dados na tebela pessoa
def altera_pessoa():
    pessoa = Pessoas.query.filter_by(nome='Mariana').first()
    pessoa.idade = 26
    pessoa.save()

#Exclui dados na tabela pessoa
def exclui_pessoa():
    pessoa = Pessoas.query.filter_by(nome='Julia').first()
    pessoa.delete()

def insere_usuarios(login, senha):
    usuario = Usuarios(login=login, senha=senha)
    usuario.save()

def consulta_todos_usuarios():
    usuarios = Usuarios.query.all()
    print(usuarios)

def consula_atividade_nome(nome):
    pessoa = Pessoas.query.filter_by(nome=nome).first()
    atividades = Atividades.query.all()
    response = [{'id': i.id, 'nome': i.nome, 'pessoa': i.pessoa.nome} for i in atividades]
    print(response)

def add_status():
    atividades = Atividades.query.all()
    atividades.status = 'Pendente'

def put_status():
    atividade = Atividades.query.filter_by(id=1).first()
    #dados = request.json
    print(atividade.status)

if __name__ == '__main__':
     #insere_usuarios('mariana', '1234')
     #insere_usuarios('julia', '3214')
     #consulta_todos_usuarios()
     # insere_pessoas()
     # altera_pessoa()
     #exclui_pessoa()
     #consulta_pessoas()
     #consula_atividade_nome('Mara Miranda')
     #add_status()
     put_status()