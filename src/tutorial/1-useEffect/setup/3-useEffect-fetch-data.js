import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

const UseEffectFetchData = () => {
  const [users,setUsers] = useState([])
  const getUsers = async () =>{
    const response  = await fetch(url)
    const users = await response.json()
    setUsers(users)
    // console.log(users);
  }
  useEffect(()=>{
    // useEffect içinde async kullanamam çünkü async bir fonk.döndürür.
    getUsers()
    
  },[])
  return (
  <> 
    <h3>Github Users</h3>
    <ul className='users'>
      {users.map((user)=>{
        // console.log(user)
        const {id,login,avatar_url,html_url} = user
        return (
        <li key={id}>
          <img src={avatar_url} alt={login} />
          <div>
            <h4>{login}</h4>
            <a href={html_url} target="_blank">Profile</a>
          </div>
        </li>
        )
      })}
    </ul>
  </>
  )
}

export default UseEffectFetchData
