# a = 10
# b=5

a = int(input('Entre com valor de a: '))
b = int(input("Entre com o valor de b: "))

soma = a+b
subtracao = a-b
multiplicacao = a*b
divisao = a/b
resto = a % b

#print(type(soma))
#soma  = str(soma)
#print(type(soma))

print(150%2)

#print('soma: {}, subtracao: {}'.format(soma, subtracao)) #mais usando assim

#com alias.. assim é melhor q a forma de cima
print('soma: {soma}. \nsubtracao: {sub} \nmultiplicacao: {mult} ...'.format(soma=soma, sub=subtracao, mult=multiplicacao)) #mais usando assim

# print('soma: ' +  str(soma))
# print('subtracao: '+ str(subtracao))
# print(multiplicacao)
# print(divisao)
# print(int(divisao))
# print(resto)

#ctrl+/
# x = '1'
# soma2 = int(x)+1
# print(soma2)