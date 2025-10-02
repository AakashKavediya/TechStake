from flask import Flask, request, render_template
import csv
import os

app = Flask(__name__)

CSV_FILE = 'Results.csv'

@app.route('/')
def home():
    return render_template('index.html', CSV_FILE=CSV_FILE)


@app.route('/save_results', methods=['POST'])
def save_results():
    data = request.get_json()
    file_exists = os.path.isfile(CSV_FILE)
    with open(CSV_FILE, mode='a', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=[
            'username', 'division', 'year', 'phone_no', 'total_time_taken', 'level_completed', 'points'
        ])
        if not file_exists:
            writer.writeheader()
        writer.writerow(data)
    return {'status': 'success'}

if __name__ == '__main__':
    app.run(debug=True)
