from flask import Flask, jsonify, request
import json

app = Flask(__name__)

@app.route('/<int:id>') #sempre tem q ter isso aki para a rota
def pessoa(id):
    return jsonify({'id':id, 'nome':'Mariana', 'profissao':'Desenvolvedor'})



@app.route('/soma', methods=['POST', 'GET'])
def soma():
    if request.method == 'POST':
        dados = json.loads(request.data) #vem como str
        print(dados)
        total = sum(dados['valores'])
    elif request.method == 'GET':
        total = 10 + 10
    return jsonify({'soma':total})


if __name__ == '__main__':
    app.run(debug=True)



## Pacotes Instalados
## pip install Flask
## pip install requests

##comandos terminal python
#>python
#>>> import requests
#>>> response = requests.get('http://127.0.0.1:5000/soma')
#>>> print(response.text)

#import json
#>>> response = requests.post('http://127.0.0.1:5000/soma', json={"valores":[12,20,10]})
#>>> print(response.json())
#>>> dados = response.json()
#>>> print(dados['soma')

#>>> exit()
