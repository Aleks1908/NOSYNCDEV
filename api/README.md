# Run API
* First run `make install-api` in main dir
* Second run `make run-api` in main dir
# Setting venv 
*  Run `python3 -m venv env` in `api` folder
* ⚠️Run `source env/bin/activate` in `api` folder before doing anything

# Requirements file
* To install libs and packages use `pip3 install <package-name>`
* Before you push run `pip freeze > requirements.txt` so that all pip libs and dependencies  could be loaded into it.
* To install all dependencies  run `pip install -r requirements.txt`. After that install them when prompted by PyCharm. This is done because updating the dependencies automatically can potentially break your code

# .env file
Here are located all api keys. ⚠️This file should not be leaked!
* Use them by calling `os.getenv("API_KEY_NAME")` in your code and not by hard coding them in you variables
* For API_KEYS ask @IvanObreshkov or @DanielIvanov19

