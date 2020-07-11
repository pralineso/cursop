conjunto = {1, 2, 3, 4, 5}
conjunto2 = {5, 6, 7, 8}
conjunto_uniao = conjunto.union(conjunto2) #tira duplicidade
print(conjunto_uniao)

conjunto_intersecao = conjunto.intersection(conjunto2)
print(conjunto_intersecao)

conjunto_diferenca1 = conjunto.difference(conjunto2)
conjunto_diferenca2 = conjunto2.difference(conjunto)
print(conjunto_diferenca1)
print(conjunto_diferenca2)

conjunto_diff_simetrica = conjunto.symmetric_difference(conjunto2)
print(conjunto_diff_simetrica)

conjunto_a = {1, 2, 3}
conjunto_b = {1, 2, 3, 4, 5}
conjunto_subset = conjunto_a.issubset(conjunto_b) # a é subconjunto de b
#conjunto_subset = conjunto_b.issubset(conjunto_a)
print(conjunto_subset)

#conjunto_superset = conjunto_a.issuperset(conjunto_b) #a nao é o conjunto q contem b
conjunto_superset = conjunto_b.issuperset(conjunto_a) #b é o super conjunto de a
print(conjunto_superset)


lista = ['cachorro', 'cachorro', 'gato', 'gato', 'peixe']
print(lista)
conjunto_animais = set(lista) #maneira facil de tirar duplicidade de uma lista, por exemplo
print(conjunto_animais)
lista_animais = list(conjunto_animais)
print(lista_animais)

# print(type(conjunto)) #set
#
# conjunto.add(5)
# print(conjunto)
# conjunto.discard(2)
# print(conjunto)