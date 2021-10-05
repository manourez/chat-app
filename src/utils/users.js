const users = [];

const addUser = ({ id, username, room }) => {
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  if (!username || !room) {
    return {
      error: "Username and room are required!",
    };
  }

  const existingUser = users.find(
    (user) => user.room === room && user.username === username
  );

  if (existingUser) {
    return {
      error: "Username is in use!",
    };
  }

  const user = { id, username, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (name) => {
  name = name.trim().toLowerCase();
  return users.filter((user) => user.room === name);
};

addUser({
  id: 22,
  username: "Emmanuel",
  room: "South philly",
});

addUser({
  id: 42,
  username: "anuel",
  room: "South philly",
});

addUser({
  id: 36,
  username: "Emmanuel",
  room: "Center city",
});

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
