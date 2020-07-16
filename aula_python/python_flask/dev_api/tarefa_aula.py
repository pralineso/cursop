from flask import Flask, jsonify, request
import json

tarefa = Flask(__name__)

tarefas = [
    {
        'id':0,
        'responsavel':'mariana',
        'tarefa':'Desenvolver metodo GET',
        'status':'pendente'
    },
    {
        'id':1,
        'responsavel':'julia',
        'tarefa':'Desenvolver interface',
        'status':'concluido'
    }
]

#lista todas as tarefas
@tarefa.route('/', methods=['GET'])
def lista_tarefas():
    return jsonify(tarefas)


#adiciona tarefa
@tarefa.route('/tarefa/add/', methods=['POST'])
def add_tarefa():
    dados = json.loads(request.data)
    posicao = len(tarefas)
    dados['id'] = posicao
    tarefas.append(dados)
    return jsonify(tarefas)

#lista tarefas por id
@tarefa.route('/tarefa/<int:id>/', methods=['GET'])
def lista_tarefa(id):
    return  jsonify(tarefas[id])


#atualiza status da tarefa
@tarefa.route('/tarefa/update/<int:id>/', methods=['PUT'])
def update_tarefa(id):
    dados = json.loads(request.data)
    tarefas[id]['status'] = dados['status']
    return jsonify(dados)

#deleta tarefa
@tarefa.route('/tarefa/delete/<int:id>/', methods=['DELETE'])
def delete_tarefa(id):
    tarefas.pop(id)
    return jsonify(({'status': 'sucesso', 'mensagem': 'Tarefa excluída'}))


if __name__ == '__main__':
    tarefa.run()