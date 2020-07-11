#lista = [1, 3, 5, 7, 'gato']#pode mas noa é legal
lista = [10, 3, 53, 7,4]
lista_animal = ['cachorro', 'gato', 'peixe', 'arara']

#lista == mutael
#tupla == imutavel

lista_animal[0] = 'macaco'
#print(lista_animal)

tupla = (1, 10, 13, 14)
#print(tupla[2])
#tupla[0] = 12 #nao ppode fazer isso # da erro
#print(len(tupla))
#print(len(lista))

#converter lista pra tupla
tupla_animal = tuple(lista_animal)
print(type(tupla_animal))
print(tupla_animal)

lista_num = list(tupla)
lista_num[0] = 100
print(type(lista_num))
print(lista_num)

#print(lista_animal[1])
#nova_lista = lista_animal * 3
#print(nova_lista)


# lista.sort()
# print(lista)
# lista_animal.sort()
# print(lista_animal)
# lista_animal.reverse()
# print(lista_animal)


# for x in lista_animal:
#     print(x)

# soma=0
# for x in lista:
#     print(x)
#     soma +=x
# print(soma)

#print(sum(lista))
#print(max(lista))
#print(min(lista_animal))

# if 'papagaio' in lista_animal:
#     print('existe esse animal na lista')
# else:
#     print('nao existe esse animal na lista. Logo ele será incluido')
#     lista_animal.append('papagaio')
#     print(lista_animal)

#lista_animal.pop()#.pop(1)
#lista_animal.remove('gato')
#print(lista_animal)