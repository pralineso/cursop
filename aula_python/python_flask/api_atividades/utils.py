from models import Pessoas

#Insere dados na tabela pessoa
def insere_pessoas():
    pessoa = Pessoas(nome='Julia', idade=15)
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


if __name__ == '__main__':
     #insere_pessoas()
     # altera_pessoa()
     #exclui_pessoa()
     consulta_pessoas()