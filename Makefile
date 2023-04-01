.PHONY: install-api
install-api:
	sudo apt install python3-pip
	cd ./api/ && python3 -m venv env


.PHONY: run-api
run-api:
	cd ./api && bash -c "source env/bin/activate && pip3 install -r requirements.txt"

