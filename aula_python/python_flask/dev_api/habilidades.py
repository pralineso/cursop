from flask_restful import Resource, request
import json

habilidades = ['Python', 'Java', 'PHP', 'HTML', 'CSS']

#formato do json utilizado, para o post e o put
#{"habilidade":"Flask"}

class Habilidades(Resource):
    def get(self):
        return habilidades

    def post(self):
        dados = json.loads(request.data)
        posicao = len(habilidades)
        dados['id'] = posicao
        habilidades.append(dados['habilidade'])
        return habilidades

    def put(self, id):
        dados = json.loads(request.data)
        habilidades[id] = dados['habilidade']
        return habilidades

    def delete(self, id):
        habilidades.pop(id)
        return {'status': 'sucesso', 'mensagem': 'Registro excluído'}
