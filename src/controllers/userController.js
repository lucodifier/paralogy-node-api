import { getAllUsers } from '../services/userService.js';

export async function getUsers(req, res) {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users', error: err.message });
  }
}