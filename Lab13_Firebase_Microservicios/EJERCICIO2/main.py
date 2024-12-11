from flask import Flask, request, render_template, jsonify, redirect, url_for
import pyrebase

firebase_config = {
    "apiKey": "API_KEY",
    "authDomain": "flask-prueba-9f744.firebaseapp.com",
    "databaseURL": "https://flask-prueba-9f744-default-rtdb.firebaseio.com/",
    "projectId": "flask-prueba-9f744",
    "storageBucket": "flask-prueba-9f744.appspot.com",
    "messagingSenderId": "SENDER_ID",
    "appId": "APP_ID",
}

firebase = pyrebase.initialize_app(firebase_config)
db = firebase.database()

app = Flask(__name__)

@app.route("/")
def index():
    users = db.child("users").get().val()
    return render_template("index.html", users=users)

@app.route("/add_user", methods=["POST"])
def add_user():
    data = request.form
    username = data.get("username")
    email = data.get("email")
    if username and email:
        db.child("users").push({"username": username, "email": email})
    return redirect(url_for("index"))

@app.route("/delete_user/<key>")
def delete_user(key):
    db.child("users").child(key).remove()
    return redirect(url_for("index"))

@app.route("/update_user/<key>", methods=["POST"])
def update_user(key):
    data = request.form
    username = data.get("username")
    email = data.get("email")
    if username and email:
        db.child("users").child(key).update({"username": username, "email": email})
    return redirect(url_for("index"))

@app.route("/get_users", methods=["GET"])
def get_users():
    users = db.child("users").get().val()
    return jsonify(users)

if __name__ == "__main__":
    app.run(debug=True)