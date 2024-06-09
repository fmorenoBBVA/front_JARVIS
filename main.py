from flask import Flask
from src.services.usersManaged import api_users_managed_bp

from flask_cors import CORS

app = Flask(__name__)

CORS(app)
app.register_blueprint(api_users_managed_bp)

if __name__ == "__main__":
   app.run(host='127.0.0.1', port=8080, debug=True)