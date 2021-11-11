import React, { Fragment, useState } from 'react';

export default function UserDataList(props) {
  const [editName, setEditName] = useState('');
  const handleEdit = (newName, id) => {
    props.editData(newName, id);
  };

  return (
    <Fragment>
      {props.userData.map((list) => {
        return (
          <div>
            <input
              id={list.id}
              type="text"
              value={editName == '' ? list.firstName : editName}
              onChange={(e) => setEditName(e.target.value)}
            />
            <button onClick={() => props.deleteData(list.id)}> Delete </button>
            <button onClick={(e) => handleEdit(e.target.value, list.id)}>
              {' '}
              SaveEdit{' '}
            </button>
          </div>
        );
      })}
    </Fragment>
  );
}
