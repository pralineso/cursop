#no site do python tem a lista com tds as excecoes
lista = [1, 10]

try:
    arquivo = open('teste.txt', 'r')
    texto = arquivo.read()
    # divisao = 10/0
    numero = lista[1]

except ZeroDivisionError:
    print('Não é possivel realizar uma divisão por 0')
except ArithmeticError:
    print('Erro ao realizar uma operação atitmética')
except IndexError:
    print('Erro ao acessar um indice invalido da lista')
except Exception as ex:  #baseexception é o pai de tds exceçoes
    print('Erro deconhecido. Erro: {}'.format(ex))
else:
    print('Executa quando nao ocorre exceção... segue o baile daqui')
finally:
    print('Sempre executa')
    print('Fechando arquivo')
    arquivo.close()