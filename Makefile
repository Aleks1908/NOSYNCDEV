Frontendsetup:
	cd web
	npm install
	npm run dev
Backend setup:
.PHONY: install-api
install-api-win:
	sudo apt update
	sudo apt install python3-pip
	cd ./api/ && python3 -m venv env
	cd ./api && bash -c "source env/bin/activate && pip3 install -r requirements.txt"
	cd ./api && pip install fastapi
	cd ./api && pip install "uvicorn[standard]"
	cd ./api && pip freeze > requirements.txt

.PHONY: run-api
run-api:
	cd ./api/src && uvicorn main:app --reload

