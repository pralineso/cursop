#funcao = retorna valor
#metodo = nao retorna

class Calculadora:
    def __init__(self, num1, num2):#sem q inicialiar a classe passa por esse metodo
        self.valor_a = num1
        self.valor_b = num2

    def soma(self):
        return self.valor_a+self.valor_b

    def subtracao(self):
        return self.valor_a-self.valor_b

    def multiplicacao(self):
        return self.valor_a*self.valor_b

    def divisao(self):
        return  self.valor_a/self.valor_b

if __name__ == '__main__':
    calculadora = Calculadora(10, 2)
    #print(calculadora.valor_a)
    print(calculadora.soma())
    print(calculadora.subtracao())
#...


#def soma(a, b):
#    return a+b
#
# def subtracao(a,b):
#    return a-b
#
# def multiplicacao(a, b):
#    return a*b
#
#def divisao(a, b):
#    return  a/b
# print(soma(3, 4))
# print(sub(10,5))
