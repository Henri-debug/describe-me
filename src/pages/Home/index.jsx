import { Button } from '../../components/Button'
import { useState, useEffect } from 'react'
import './style.css'
import { Perfil } from '../../components/Perfil';
import { Loading } from '../../components/Loading';

export function Home() {
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

    return (
        <div id='home-container'>
            <h2>Slow Downn !!!</h2>
            <p>Search your Github Account (By Name) !!</p>

            <div className='search-box'>
                <img src="/search-icon.svg" alt="search-icon" />
                <input
                    type="text"
                    id='input-search'
                    placeholder='Github Username'
                    onChange={ev => setUsername(ev.target.value)}
                />

                <Button title="Pesquisar" functor={fetchUser} />
            </div>

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

                { (user.created_at == '' || user.created_at == null )  ? '' : <Button title='This is my perfil !'/>  }
            </div>

            {showLoading && <Loading />}
        </div>
    );
}