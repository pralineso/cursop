from flask import Flask, request
from flask_restful import Resource, Api
from models import Pessoas, Atividades, Usuarios
from flask_httpauth import HTTPBasicAuth

auth = HTTPBasicAuth()
app = Flask(__name__)
api = Api(app)

# USUARIOS = {
#     'Mariana Xavier':'123',
#     'julia':'321'
# }

# @auth.verify_password #esse decorador é responsavels pro verificar a senha
# def verificacao(login, senha):
#     if not (login, senha):
#         return False
#     return  USUARIOS.get(login) == senha

@auth.verify_password #esse decorador é responsavels pro verificar a senha
def verificacao(login, senha):
    if not (login, senha):
        return False
    return Usuarios.query.filter_by(login=login, senha=senha).first()


class Pessoa(Resource):
    # @auth.login_required #esse decorador diz q para acessar esse metodo, o usuario precisa estar autenticado
    def get(self, nome):
        pessoa = Pessoas.query.filter_by(nome=nome).first()
        try:
            response = {
                'id':pessoa.id,
                'nome':pessoa.nome,
                'idade':pessoa.idade
            }
        except AttributeError:
            response = {
                'status':'error',
                'mensagem':'Pessoa não encontrada!'
            }

        return response

    def put(self, nome):
        pessoa = Pessoas.query.filter_by(nome=nome).first()
        try:
            dados = request.json
            if 'nome' in dados:
                pessoa.nome = dados['nome']
            if 'idade' in dados:
                pessoa.idade = dados['idade']
            pessoa.save()
            response = {
                'id': pessoa.id,
                'nome': pessoa.nome,
                'idade': pessoa.idade
            }
        except Exception:
            response = {'Error': 'Não foi possível atualizar os dados de {}'.format(pessoa.nome)}
        return response

    def delete(self, nome):
        pessoa = Pessoas.query.filter_by(nome=nome).first()
        mensagem = 'Pessoa {} excluida com sucesso'.format(pessoa.nome)
        pessoa.delete()
        return {'status':'sucesso', 'mensagem':mensagem}

class ListaPessoa(Resource):
    # @auth.login_required
    def get(self):
        pessoas = Pessoas.query.all()
        response = [{'id':i.id, 'nome':i.nome, 'idade':i.idade} for i in pessoas]
        return response

    def post(self):
        dados = request.json
        pessoa = Pessoas(nome=dados['nome'], idade=dados['idade'])
        pessoa.save()
        response = {
            'id':pessoa.id,
            'nome':pessoa.nome,
            'idade':pessoa.idade
        }
        return response

class Atividade(Resource):
    # def get(self, nome_pessoa):
    #     pessoa = Pessoas.query.filter_by(nome=nome_pessoa).first()
    #     atividades = Atividades.query.filter_by(pessoa_id = pessoa.id)
    #     response = [{'pessoa': i.pessoa.nome, 'nome': i.nome} for i in atividades]
    #     return response

    def get(self, id_atividade):
        atividades = Atividades.query.filter_by(id=id_atividade).first()
        try:
            response = {'id': atividades.id, 'nome': atividades.nome, 'pessoa': atividades.pessoa.nome,
                        'status': atividades.status}
        except AttributeError:
            response = {'Error': 'O id informado não foi encontrado'}
        return response

    def put(self, id_atividade):
        atividade = Atividades.query.filter_by(id=id_atividade).first()
        try:
            dados = request.json
            if 'status' in dados:
                atividade.status = dados['status']
            atividade.save()
            response = {
                'id': atividade.id,
                'nome': atividade.nome,
                'pessoa': atividade.pessoa.nome,
                'status': atividade.status
            }
        except AttributeError:
            response = {'Error': 'O id informado não foi encontrado'}
        except Exception:
            response = {'Error': 'Não foi possível atualizar o registro'}
        return response

class ListaAtividades(Resource):
    def get(self):
        atividades = Atividades.query.all()
        response = [{'id':i.id, 'nome':i.nome, 'pessoa':i.pessoa.nome} for i in atividades]
        return response

    def post(self):
        dados = request.json
        pessoa = Pessoas.query.filter_by(nome=dados['pessoa']).first()
        atividade = Atividades(nome=dados['nome'], pessoa=pessoa)
        atividade.save()
        response = {
            'id': atividade.id,
            'nome':atividade.nome,
            'pessoa':atividade.pessoa.nome,
            'status':atividade.status
        }
        return response



api.add_resource(Pessoa, '/pessoa/<string:nome>/')
api.add_resource(ListaPessoa, '/pessoa/')
# api.add_resource(Atividade, '/atividade/<string:nome_pessoa>/')
api.add_resource(Atividade, '/atividade/<int:id_atividade>/')
api.add_resource(ListaAtividades, '/atividades/')

if __name__ == '__main__':
    app.run(debug=True)