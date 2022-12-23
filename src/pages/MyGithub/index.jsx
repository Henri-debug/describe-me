import './style.css'
import { Perfil } from '../../components/Perfil';
import { useEffect, useState } from 'react';



export function Github() {
  const [user, setUser] = useState({
    name: '',
    avatar: '',
    username: '',
    perfil_link: '',
    company: '',
    created_at: '',
    updated_at: '',
    bio: ''
  });


  useEffect(() => {
    const { name, avatar, username, perfil_link, company, created_at, updated_at, bio } = JSON.parse(localStorage.getItem('user'))
    setUser({
      name,
      avatar,
      username,
      perfil_link,
      company,
      created_at,
      updated_at,
      bio
    })
  }, [user.name])
  return (
    <div id='github-container'>

      <div id='github-perfil'>
        <img src={user.avatar} alt="" />
        <h2>{user.username}</h2>
      </div>
      <div id='github-stats'>
        <Perfil
          url={user.perfil_link}
          name={user.name}
          company={user.company}
          created_at={user.created_at}
          updated_at={user.updated_at}
          bio={user.bio}
        />
      </div>
    </div>
  )
}