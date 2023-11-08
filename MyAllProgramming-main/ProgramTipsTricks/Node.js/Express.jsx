// Types  middleware in Express


//CORS Middleware:
const cors = require('cors');
app.use(cors());



//Third-Party Middleware:

const morgan = require('morgan');
app.use(morgan('dev')); // Request logging middleware



//Error Handling Middleware:
const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('This middleware is only for routes under this router.');
  next();
});


//Application-level Middleware:

const express = require('express');
const app = express();

app.use(express.json()); // JSON parsing middleware
app.use(express.urlencoded({ extended: true })); // URL-encoded data parsing middleware



//Authenticate middle ware
const express = require('express');
const app = express();
const port = 3000;

// Sample user data (in a real application, this should be stored securely)
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

// Middleware to parse JSON request bodies
app.use(express.json());

// Authentication middleware
function authenticate(req, res, next) {
  const { username, password } = req.body;

  // Check if a user with the provided credentials exists
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  // Attach the user to the request object for later use
  req.user = user;

  // Continue to the next middleware or route
  next();
}

// Protected route
app.get('/profile', authenticate, (req, res) => {
  res.json({ message: 'Welcome to your profile, ' + req.user.username + '!' });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});



//JWT Simples Line

const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;

// Secret key for signing and verifying JWTs (replace with your secret)
const secretKey = 'your-secret-key';

// Middleware to parse JSON request bodies
app.use(express.json());

// Sample user data (in a real application, this should be stored securely)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

// Generate and return a JWT token for a valid user
function generateToken(user) {
  const payload = { id: user.id, username: user.username };
  const options = { expiresIn: '1h' }; // Token expires in 1 hour
  return jwt.sign(payload, secretKey, options);
}

// Authentication route to generate a JWT token
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if a user with the provided credentials exists
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  // Generate a JWT token and send it in the response
  const token = generateToken(user);
  res.json({ token });
});

// Protected route that requires a valid JWT token
app.get('/profile', (req, res) => {
  // Verify the JWT token from the request
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    res.json({ message: 'Welcome to your profile, ' + decoded.username + '!' });
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});




||||||||||||