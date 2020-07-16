from flask_restful import Resource

habilidades = ['Python' , 'Java', 'PHP', 'HTML', 'CSS']

class Habilidades(Resource):
    def get(self):
        return habilidades