import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Mock in-memory database
const users: any[] = [];

// Simple signup route
app.post('/api/auth/signup', (req: Request, res: Response) => {
  const { email, password, firstName, lastName } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required' });
  }

  // Check if user exists
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({ success: false, message: 'User already exists' });
  }

  const newUser = { id: Date.now(), email, password, firstName, lastName };
  users.push(newUser);

  return res.status(201).json({ success: true, message: 'User registered successfully', user: newUser });
});

// Simple login route
app.post('/api/auth/login', (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required' });
  }

  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }

  // For demonstration, we'll return a mock token
  const mockToken = `mock-jwt-token-${user.id}`;
  
  return res.status(200).json({ 
    success: true, 
    message: 'Logged in successfully', 
    token: mockToken,
    user 
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
