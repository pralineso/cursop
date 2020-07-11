#exemplo sem instanciar/
class Calculadora:
    # def __init__(self, num1, num2):
    #     pass #o init n pode ficar vazio
    #mas pode fazer sem init

    def soma(self, valor_a, valor_b):
        return valor_a+valor_b

    def subtracao(self, valor_a, valor_b):
        return valor_a-valor_b

    def multiplicacao(self, valor_a, valor_b):
        return valor_a*valor_b

    def divisao(self, valor_a, valor_b):
        return  valor_a/valor_b


calculadora = Calculadora()
#print(calculadora.valor_a)
print(calculadora.soma(10, 3))
print(calculadora.subtracao(6,7))
