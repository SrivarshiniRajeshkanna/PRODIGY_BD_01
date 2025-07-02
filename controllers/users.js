import { v4 as uuidv4 } from 'uuid';

const users = {}; 

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const getUsers = (req, res) => {
  res.status(200).json(Object.values(users));
};

export const createUser = (req, res) => {
  const { name, email, age } = req.body;

  if (!name || !email || !age) {
    return res.status(400).json({ error: 'All fields (name, email, age) are required.' });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format.' });
  }

  const id = uuidv4();
  users[id] = { id, name, email, age };

  res.status(201).json({ message: `User ${name} added successfully`, user: users[id] });
};


export const getUser = (req, res) => {
  const { id } = req.params;

  const user = users[id];
  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }

  res.status(200).json(user);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  if (!users[id]) {
    return res.status(404).json({ error: 'User not found.' });
  }

  delete users[id];
  res.status(200).json({ message: `User with ID ${id} deleted successfully.` });
};


export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;

  const user = users[id];
  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }

  if (email && !isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format.' });
  }

  if (name !== undefined) user.name = name;
  if (email !== undefined) user.email = email;
  if (age !== undefined) user.age = age;

  res.status(200).json({ message: 'User updated successfully.', user });
};
