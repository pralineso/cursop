from sqlalchemy import create_engine, Column, Integer, String, ForeignKey
from sqlalchemy.orm import scoped_session, sessionmaker, relationship
from sqlalchemy.ext.declarative import declarative_base

engine = create_engine('sqlite:///tarefa6.db', convert_unicode=True)
db_session = scoped_session(sessionmaker(autocommit=False, bind=engine))

Base = declarative_base()
Base.query = db_session.query_property()

#tabela programador
class Programador(Base):
    __tablename__ = 'programador'
    id =  Column(Integer, primary_key=True)
    nome = Column(String(40), index=True)
    idade = Column(Integer)
    email = Column(String(80), unique=True)

    def __repr__(self):
        return '<Programador {}'. format(self.nome)

    def save(self):
        db_session.add(self)
        db_session.commit()

    def delete(self):
        db_session.delete(self)
        db_session.commit()

#tabela habilidade
class Habilidades(Base):
    __tablename__='habilidade'
    id = Column(Integer, primary_key=True)
    nome = Column(String(40))

    def __repr__(self):
        return '<Habilidade {}'. format(self.nome)

    def save(self):
        db_session.add(self)
        db_session.commit()

    def delete(self):
        db_session.delete(self)
        db_session.commit()

#tabela programador_habilidade
class Programador_Habilidade(Base):
    __tablename__ = 'programador_habilidade'
    id = Column(Integer, primary_key=True)
    id_programador = Column(Integer, ForeignKey('programador.id'))
    programador = relationship("Programador")
    id_habilidade = Column(Integer, ForeignKey('habilidade.id'))
    habilidade = relationship("Habilidades")


def init_db():
    Base.metadata.create_all(bind=engine)

if __name__ == '__main__':
    init_db()