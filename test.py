from flask import Flask, jsonify, make_response

app = Flask(__name__)

@app.route('/data', methods=['GET'])
def get_items():
  items = [
      {"name": "Item 1", "quantity": 2, "price": 10.99},
      {"name": "Item 2", "quantity": 1, "price": 5.99},
      {"name": "Item 3", "quantity": 3, "price": 7.50}
  ]
  response = make_response(jsonify(items))
  response.headers['Access-Control-Allow-Origin'] = '*'  # Allow any origin
  return response

if __name__ == '__main__':
  app.run(debug=True)