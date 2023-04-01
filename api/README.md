# Setting venv 
*  Run `python3 -m venv env` in `api` folder
* ⚠️Run `source env/bin/activate` in `api` folder before doing anything

# Requirements file
* To install libs and packages use `pip3 install <package-name>`
* Before you push run `pip freeze > requirements.txt` so that all pip libs could be loaded into it.
* To install all libs run `pip install -r requirements.txt`

# .env file
Here are located all api keys. ⚠️This file should not be leaked!
* Use them by calling `os.getenv("API_KEY_NAME")` in your code and not by hard coding them in you variables
* For API_KEYS ask @IvanObreshkov or @DanielIvanov19

