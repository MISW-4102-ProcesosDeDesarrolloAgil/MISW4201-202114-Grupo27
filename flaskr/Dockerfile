FROM python
COPY requirements.txt /
RUN pip3 install -r /requirements.txt
COPY . /flaskr
WORKDIR /flaskr
CMD flask run -p ${PORT} -h 0.0.0.0
- name: Deploy Flask to Heroku
  uses: AkhileshNS/heroku-deploy@v3.12.12
  with:
          heroku_api_key: "69a2cd61-e881-4f88-a812-de98c849c5a5"
          heroku_app_name: "LONIC-27"
          heroku_email: "jl.lopez77@uniandes.edu.co"
          usedocker: true
          appdir: flaskr
