.PHONY: install-web
install-web:
	cd ./web/ && npm install 

.PHONY: run-web
run-web:
	cd ./web/ && npm run dev

.PHONY: install-api
install-api:
ifeq ($(shell uname),Linux)
		sudo apt update
		sudo apt install software-properties-common -y
		sudo add-apt-repository ppa:deadsnakes/ppa
		sudo apt install python3.10 -y
		sudo apt install python3-pip -y
else ifeq ($(shell uname),Darwin)
		brew install python@3.10
endif
		cd ./api/ && python3 -m venv env
		cd ./api/ && . env/bin/activate 
		cd ./api/ && pip3 install fastapi
		cd ./api/ && pip3 install "uvicorn[standard]"
		
.PHONY: run-api
run-api:
	cd ./api/ && pip3 install -r requirements.txt
	cd ./api/src && uvicorn main:app --reload
