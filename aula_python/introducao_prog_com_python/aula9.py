import shutil
#cria arquivo
#executar 2x sem a variavel nao cria 2x
# w = sobrescreve
# a = atualiza
# arquivo.write('Minha primeira escrita\n')
def escrever_arquivo(texto):
    diretorio = 'C:/Users/mxapi/Documents/CURSO_Python/Bootcamp Desenvolvedor Fullstack Python/aula_python/introducao_prog_com_python/teste.txt'
    arquivo = open(diretorio, 'w')
    arquivo.write(texto)
    arquivo.close()

def atualizer_arquivo(nome_arquivo, texto):
    diretorio = 'C:/Users/mxapi/Documents/CURSO_Python/Bootcamp Desenvolvedor Fullstack Python/aula_python/introducao_prog_com_python/'+nome_arquivo
    arquivo = open(diretorio, 'a')
    arquivo.write(texto)
    arquivo.close()


def ler_arquivo(nome_arquivo):
    arquivo = open(nome_arquivo, 'r')
    texto = arquivo.read()
    print(texto)

def media_notas(nome_arquivo):
    arquivo = open(nome_arquivo, 'r')
    aluno_nota = arquivo.read()
    #print(aluno_nota)
    aluno_nota = aluno_nota.split('\n')#
    print(aluno_nota)
    lista_media = []
    for x in aluno_nota:
        lista_notas = x.split(',')
        aluno = lista_notas[0]
        lista_notas.pop(0)
        print(aluno)
        print(lista_notas)
        media = lambda  notas: sum([int(i) for i in notas])/4
        print(media(lista_notas))
        lista_media.append({aluno:media(lista_notas)})
    return  lista_media

def copia_arquivo(nome_arquivo):
    shutil.copy(nome_arquivo, 'C:/Users/mxapi/Documents/CURSO_Python/Bootcamp Desenvolvedor Fullstack Python/aula_python/notas_alunos.txt')
    #sem nome ele repete o nome q foi passado

def move_arquivo(nome_arquivo):
    shutil.move(nome_arquivo, 'C:/Users/mxapi/Documents/CURSO_Python/Bootcamp Desenvolvedor Fullstack Python/aula_python/')


if __name__ == '__main__':
    arquivo = 'notas.txt'
    #escrever_arquivo('Primeira linha.\n')
    #aluno = '\nMara, 10, 10, 6, 8'
    #atualizer_arquivo('notas.txt', aluno)
    #ler_arquivo('teste.txt')

    #lista_media = media_notas(arquivo)
    #print(lista_media)
    #copia_arquivo(arquivo)
    move_arquivo(arquivo)