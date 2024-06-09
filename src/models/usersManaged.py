from sqlalchemy import Column, Integer, String, Date

from src.utils.databaseManager import Base
from src.utils.databaseManager import DatabaseManager

from datetime import date

class UserManaged(Base):
    __tablename__ = 'users_managed'

    users_managed_id = Column(Integer, primary_key=True)
    users_managed_name = Column(String)
    users_managed_dni = Column(String)
    users_managed_email = Column(String)
    users_managed_bank = Column(String)
    users_managed_date_born = Column(Date)
    users_managed_number_phone = Column(String)
    users_managed_company_name = Column(String)
    users_managed_company_cif = Column(String)
    users_managed_company_email = Column(String)
    users_managed_company_bank = Column(String)
    users_managed_date_entry = Column(Date)
    users_managed_date_out = Column(Date)
    users_managed_status = Column(String)
    users_managed_comment = Column(String)

    def to_dict(self):
        # Convertir las fechas al formato deseado ("%Y-%m-%d")
        data = {}
        for key, value in self.__dict__.items():
            if not key.startswith('_'):
                if isinstance(value, date):
                    data[key] = value.strftime('%Y-%m-%d')
                else:
                    data[key] = value
        return data

class UserManagedManager:
    def __init__(self):
        self.db_manager = DatabaseManager()
        self.session = self.db_manager.session

    def create_user(self, user_data):
        user = UserManaged(**user_data)
        self.session.add(user)
        self.session.commit()
        return user

    def get_all_users(self):
        users = self.session.query(UserManaged).all()
        return [user.to_dict() for user in users]

    def get_user_by_id(self, user_id):
        user = self.session.query(UserManaged).filter_by(users_managed_id=user_id).first()
        return user.to_dict()

    def update_user_by_id(self, user_id, user_data):
        try:
            user = self.session.query(UserManaged).filter_by(users_managed_id=user_id).first()
            if user:
                for key, value in user_data.items():
                    setattr(user, key, value)
                self.session.commit()
                return user
            else:
                return None
        except Exception as e:
            self.session.rollback()
            raise e

    def delete_user_by_id(self, user_id):
        try:
            user = self.session.query(UserManaged).filter_by(users_managed_id=user_id).first()
            if user:
                self.session.delete(user)
                self.session.commit()
                return True
            else:
                return False
        except Exception as e:
            self.session.rollback()
            raise e
    
    