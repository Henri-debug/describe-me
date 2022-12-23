import { Button } from '../../components/Button'
import { useState, useEffect } from 'react'
import './style.css'
import { Perfil } from '../../components/Perfil';
import { Loading } from '../../components/Loading';
import { Search } from '../../components/Search';
import { useNavigate } from 'react-router-dom';

export function Home() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
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
    const [showLoading, setShowLoading] = useState(false)

    function saveUser(){
        localStorage.setItem('user', JSON.stringify(user))
    }

    async function fetchUser() {
        setShowLoading(true)
        try {
            const response = await fetch('https://api.github.com/users/' + username)
            const { name, avatar_url, login, html_url, company, created_at, updated_at, bio } = await response.json()

            setUser({
                name: name,
                avatar: avatar_url,
                username: login,
                perfil_link: html_url,
                company,
                created_at,
                updated_at,
                bio
            })
        } catch (error) {
            console.log(error)
            alert('An error ocurred, try again.')
        } finally {
            setShowLoading(false)
        }

    }

    useEffect(() => {
        saveUser()
    }, [user])

    return (
        <div id='home-container'>
            <h2>Slow Downn !!!</h2>
            <p>Search your Github Account (By Name) !!</p>

            <Search placeholder='Github Username' function={fetchUser} onChange={ev => setUsername(ev.target.value)}/>

            <div className='search-results'>
                <img src={user.avatar} alt="" />
                <h3>{user.username || 'Username'}</h3>
                <Perfil
                    url={user.perfil_link}
                    name={user.name}
                    company={user.company}
                    created_at={user.created_at}
                    updated_at={user.updated_at}
                    bio={user.bio}
                />

                { (user.created_at == '' || user.created_at == null )  ? '' : <Button functor={() => navigate('/describe')} title='This is my perfil !'/>  }
                
            </div>
            
            {showLoading && <Loading />}
        </div>
    );
}