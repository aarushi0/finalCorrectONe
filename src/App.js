import React, { useState } from 'react';
import './style.css';
import AddUserDetails from './AddUserDetails';
import UserDataList from './UserDataList';

export default function App() {
  const [userData, setUserData] = useState([]);

  const addDetails = (data) => {
    setUserData((value) => {
      return [...value, data];
    });
  };

  const editData = (newName, id) => {
    const nName = userData.map((list) => {
      if (list.id == id) {
        return {
          ...list,
          name: newName,
        };
      }
      return nName;
    });

    setUserData(nName);
  };

  const deleteData = (id) => {
    const newData = userData.filter((value) => value.id !== id);
    setUserData(newData);
  };

  console.log(userData);

  return (
    <div>
      <AddUserDetails addDetails={addDetails} />
      <UserDataList
        userData={userData}
        editData={editData}
        deleteData={deleteData}
      />
    </div>
  );
}
