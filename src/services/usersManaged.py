from flask import Blueprint, request
from src.models.usersManaged import UserManagedManager

api_users_managed_bp = Blueprint('users_managed', __name__, url_prefix='/api/users_managed')

@api_users_managed_bp.route('', methods=["GET","POST"])
def api_users_managed():
    user_managed_manager = UserManagedManager()
    if request.method == "GET":
        all_users = user_managed_manager.get_all_users()
        data = {"error": False, "msg": "La petición se ha ejecutado correctamente.", "data": all_users}
        resCode = 200

    elif request.method == "POST":
        users_managed_data = request.json
        new_user = user_managed_manager.create_user(users_managed_data)
        data = {"error": False, "msg": f"Nuevo usuario creado con ID:{new_user.users_managed_id}"}
        resCode = 200

    else:
        data = {"error": True, "msg": "El servicio no esta permitido."}
        resCode = 405
    return data, resCode

    
@api_users_managed_bp.route('/<users_managed_id>', methods=["GET","POST","DELETE"])
def api_users_managed_id(users_managed_id):
    user_managed_manager = UserManagedManager()
    if request.method == "GET":
        user_by_id = user_managed_manager.get_user_by_id(users_managed_id)
        data = {"error": False, "msg": "La petición se ha ejecutado correctamente.", "data": users_managed_id}
        resCode = 200

    elif request.method == "POST":
        users_managed_data = request.json
        user_managed_manager.update_user_by_id(users_managed_id, users_managed_data)
        data = {"error": False, "msg": "La petición se ha ejecutado correctamente.", "data": users_managed_id}
        resCode = 200

    elif request.method == "DELETE":
        user_managed_manager.delete_user_by_id(users_managed_id)
        data = {"error": False, "msg": "La petición se ha ejecutado correctamente.", "data": users_managed_id}
        resCode = 200

    else:
        data = {"error": True, "msg": "El servicio no esta permitido."}
        resCode = 405
    return data, resCode