from flask import Flask
from flask_cors import CORS
from models import db, Usuario
from routes import usuario_routes
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

    # Configuracao BD sqlite
app.config['#'] = 'sqlite:///db.sqlite3'
app.config['#'] = False
db.init_app(app)

    # Registro de rotas
app.register_blueprint(usuario_routes, url_prefix='/api')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Cria as tabelas no bd
    app.run(debug=True, port=# )





db=SQLAlchemy()

class Usuario(db.Model):
    __tablename__='usuarios'
    id=db.Column(db.Integer, primary_key=True)
    nome=db.Column(db.String(100), nullable=False)
    email=db.Column(db.String(100), nullable=False)
    senha=db.Column(db.String(100), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'nome': self.nome,
            'email': self.email
        }
