from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

engine = create_engine('postgresql://admin:1234@localhost:5432/test-local')

Base = declarative_base()

Session = sessionmaker(bind=engine)

class DatabaseManager:
    _instance = None

    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.initialize()
        return cls._instance

    def initialize(self):
        # Configurar la conexión a la base de datos
        self.session = Session()
        Base.metadata.create_all(bind=engine)
