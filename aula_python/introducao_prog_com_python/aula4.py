# a = int(input('Entre com um numero: '))
#
#
# #primos
# div = 0
# for x in range(1, a+1):#range(1,5)
#     resto = a % x
#     print(x, resto)
#     if resto == 0:
#         #div = div + 1
#         div += 1
#
# if div == 2:
#     print('o numero {} é primo'.format(a))
# else:
#     print('o numero {} não é primo'.format(a))

# a = int(input("entre com uma valor: "))
# for i in range(a+1):
#     div = 0
#     for x in range(1, i+1):#range(1,5)
#         resto = i % x
#         if resto == 0:
#             div += 1
#     if div == 2:
#         print(i)

# a = 0
# while a <= 10:
#     print(a)
#     a += 1

# nota = int(input('Entre com a nota: '))
# while nota > 10:
#     nota = int(input('Nota invalida. Entre com a nota: '))


#com exemplo da outra aula
a = int(input('primeiro bimestre: '))
while a > 10:
    a = int(input('numero invalido!. primeiro bimestre: '))

b = int(input('segundo bimestre: '))
while b > 10:
    b = int(input('numero invalido!. segundo bimestre: '))

c = int(input('terceiro bimestre: '))
while c > 10:
    c = int(input('numero invalido!. terceiro bimestre: '))

d = int(input('quarto bimestre: '))
while d > 10:
    d = int(input('numero invalido!. quarto bimestre: '))

media = (a+b+c+d)/4
print('media: {}'.format(media))