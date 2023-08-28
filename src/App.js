
import { useState, useEffect } from 'react';
import './App.css';
import { db } from "./firebase-config"
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from "firebase/firestore"


function App() {
  const [Newname, setNewName] = useState("");
  const [Newage, setNewAge] = useState(0);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");


const createUser = async () =>{
await addDoc(usersCollectionRef, {name:Newname , age:Number(Newage)});

}

const updateUser = async (id, age) =>{
  const userDoc = doc(db , "users" ,id);
  const newFields ={age : age+1};
  await updateDoc(userDoc, newFields);

};

const deleteUser = async (id) =>{
  const userDoc = doc(db , "users" ,id);
  await deleteDoc(userDoc);
  }

  useEffect(() => {

    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      // console.log(data);

      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();

  }, []);

  return (
    <div className="App">
      <input type = "text" placeholder ="Enter Name" onChange ={(e) => {setNewName(e.target.value)}}/>
      <input type = "number" placeholder ="Enter Age" onChange ={(e) => {setNewAge(e.target.value)}}/>
      <button onClick={createUser}>Create User</button>
      {users.map((user) => {
        return <div>
          <h1>Name : {user.name}</h1>
          <h1>Age : {user.age}</h1>
          <button onClick={() =>{updateUser(user.id, user.age);}}>Increase age</button>
          <button onClick={() =>{deleteUser(user.id);}}>Delete user</button>
        </div>
      })}
    </div>
  );
}

export default App;
