import React from 'react';
import { Link } from 'react-router-dom';

const UserData = ({ users }) => {
  // Check if users is an array before using map
  if (!Array.isArray(users)) {
    console.error('Invalid users data. Expected an array.');
    return null; // or handle the error in another way
  }

  return (
    <>
      {users.map((curUser) => {
        const { id, problem,link,code,lecture } = curUser;
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{problem}</td>
            <td>
              <Link to={link} target='_blank'>
                <img 
                style={{height:'40px',width:'45px'}}
                src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-512.png"
                />
              </Link>
            </td>
            <td>
              <Link to={lecture} target='_blank'>
                <img 
                style={{height:'35px',width:'35px'}}
                src="https://static-00.iconduck.com/assets.00/youtube-icon-1024x725-gs0uvk9b.png"
                />
              </Link>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default UserData;

