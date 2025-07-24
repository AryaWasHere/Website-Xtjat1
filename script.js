body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #74ebd5, #9face6);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background: white;
  padding: 30px 40px;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  color: #333;
}

input[type="text"],
input[type="password"],
input[type="date"],
input[type="email"],
input[type="number"] {
  width: 100%;
  padding: 12px 15px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

input:focus {
  border-color: #74ebd5;
  outline: none;
  box-shadow: 0 0 8px rgba(116, 235, 213, 0.6);
}

button {
  background-color: #74ebd5;
  color: #fff;
  border: none;
  padding: 12px 20px;
  margin-top: 15px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
  width: 100%;
}

button:hover {
  background-color: #5ad7c0;
}

p {
  margin-top: 15px;
  font-size: 14px;
}
