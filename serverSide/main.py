from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate
from flask_cors import CORS
from flask_restx import Api

# Definições de App ----------------------------------------------------------
app = Flask(__name__)
CORS(app, supports_credentials=True)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.app_context().push()

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'ab44d789595b66efeda6b633e686a9db'

# Instâncias -------

# -- Api(Flask_restx)
api = Api(app, title="Py Smart-API", description="Back-End newTCC")

# -- Database(Flask-SQLAlchemy)
db = SQLAlchemy(app)

# -- Migrate(Flask-Migrate)
migrate = Migrate(app, db)

# -- Flask-Login
lm = LoginManager()
lm.login_view = '/'
lm.login_message = 'realize o Login para prosseguir'
lm.login_message_category = 'alert alert-warning'
lm.init_app(app)

# -- Flask-Bcrypt
by = Bcrypt(app)

# -- Import Routes --
from routes import (
    system_user,
    system_notes,
)

