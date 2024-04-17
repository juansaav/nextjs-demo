from flask import Flask, request, jsonify
from flask_cors import CORS
import jwt
import datetime

app = Flask(__name__)
CORS(app)

# Replace this with your actual user data and secret key
valid_user = {'username': 'test', 'password': 'test'}
secret_key = 'your_secret_key'

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()

    # Verify username and password
    if data['username'] == valid_user['username'] and data['password'] == valid_user['password']:
        # Generate JWT token
        expiration_time = datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(hours=1)
        token = jwt.encode({'username': data['username'], 'exp': expiration_time}, secret_key, algorithm='HS256')

        return jsonify({'token': token, 'username': 'Juan'}), 200
    else:
        return jsonify({'error': 'Invalid username or password'}), 401

if __name__ == '__main__':
    app.run(port=3003)
