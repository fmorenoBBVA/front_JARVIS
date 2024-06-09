from google.cloud import bigquery
from datetime import datetime, timedelta

def bigquery_sql(query):
    try:
        bq_client = bigquery.Client()
        query_job = bq_client.query(query)
        results = query_job.result()

        data = []
        for row in results:
            data.append(dict(row.items()))
        dataResponse = {"error": False, "msg": "La petición se ha ejecutado correctamente.", "data": data}
        return dataResponse, 200
    except Exception as e:
        print(f'[ERROR] Error bigquery_sql: {e}')
        return {f'error': True, 'msg': 'Error al ejecutar query en base de datos'}, 500
    
def bigquery_sql_params(query, job_config):
    try:
        bq_client = bigquery.Client()
        query_job = bq_client.query(query, job_config=job_config)
        results = query_job.result()

        data = []
        for row in results:
            data.append(dict(row.items()))
        dataResponse = {"error": False, "msg": "La petición se ha ejecutado correctamente.", "data": data}
        return dataResponse, 200
    except Exception as e:
        print(f'[ERROR] Error bigquery_sql: {e}')
        return {f'error': True, 'msg': 'Error al ejecutar query en base de datos'}, 500