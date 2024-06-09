run: 
	python3 main.py
run_front_dev:
	cd webapp && npm run dev
run_front:
	cd webapp && npm run build && python3 main.py
pip_intall:
	pip install -r requirements.txt
deploy_front:
	cd webapp && npm run build && gcloud app deploy app.yaml --project=test-project --ignore-file=.gcloudignore --no-promote
deploy_back:
	gcloud app deploy app.yaml --project=test-project --ignore-file=.gcloudignore
create_api_gw_config:
	gcloud api-gateway api-configs create test-project --api=test-project --openapi-spec=openapi2-appengine.yaml --project=test-project --backend-auth-service-account=test-project@appspot.gserviceaccount.com
create_api_gw:
	gcloud api-gateway gateways create test-project --api=test-project --api-config=test-project --location=europe-west1 --project=test-project
