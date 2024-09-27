import { v4 as uuidv4 } from 'uuid';

let users = []

 
export const createUser = (req, res) => {
  
  console.log(req.body);

  const user = req.body;


  // const userId = uuidv4();
  // users.push(user);

  const userWithId = { ...user, id: uuidv4()};
  
  users.push(userWithId);
  // users.push({ ...user, id: uuidv4()});
  console.log(userWithId);

  
  // console.log(users);
  // console.log("POST ROUTE REACHED");
  // res.send('POST ROUTE REACHED');
  res.send(`User with the name ${user.firstName} added to the database!`)
}

export const getUsers = (req, res) => {
  // console.log(users);
  res.send(users);
  // res.send("Hello from router");
}

export const getUser = (req, res) => {

  console.log(req.params);
  const { id } = req.params;
  // const id = req.params.id;

  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser)
  // res.send("THE GET ID ROUTE");
  // res.send(id);

}

export const deleteUser = (req, res) => {

  const { id } = req.params;

  users = users.filter((user) => user.id !== id);
  res.send(`user with the id ${id} deleted from the database.`);

}

export const updateUser = (req, res) => {
  const { id } = req.params;

  const userToBeUpdated = users.find((user) => user.id === id)

   const { firstName, lastName, age} = req.body;

   if (firstName) {
    userToBeUpdated.firstName = firstName
   }

   if (lastName) {
    userToBeUpdated.lastName = lastName
   }

   if (age) {
    userToBeUpdated.age = age
   }

   res.send(`User with the id ${id} has been updated`)
  
}