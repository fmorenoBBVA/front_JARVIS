--DROP TABLE users_managed;
CREATE TABLE users_managed (
    users_managed_id SERIAL PRIMARY KEY,
    users_managed_name VARCHAR NULL,
    users_managed_dni VARCHAR NULL,
    users_managed_email VARCHAR NULL,
    users_managed_bank VARCHAR NULL,
    users_managed_date_born DATE NULL,
    users_managed_number_phone VARCHAR NULL,
    users_managed_company_name VARCHAR NULL,
    users_managed_company_cif VARCHAR NULL,
    users_managed_company_email VARCHAR NULL,
    users_managed_company_bank VARCHAR NULL,
    users_managed_date_entry DATE NULL,
    users_managed_date_out DATE NULL,
    users_managed_status VARCHAR NULL,
    users_managed_comment VARCHAR NULL,
    date_created DATE NULL,
    user_created DATE NULL,
    date_updated DATE NULL,
    user_updated DATE NULL
);

--ACCEDIENDO AL CONTENEDOR DOCKER SIN EXPONER PUERTO:
-- docker exec -it mi_postgres psql -U admin -d test-local

-- docker cp postgres/users_managed.sql mi_postgres:users_managed.sql
-- docker exec mi_postgres psql -U admin -d test-local -f users_managed.sql

--EXPONER PUERTO Y ACCESO DESDE LOCAL
--psql -h localhost -U admin -d test-local -f postgres/users_managed.sql

--VER HOST DE UN CONTENEDOR
-- docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' mi_postgres
