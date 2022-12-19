import { Result } from '../../components/Result';
import { Button } from '../../components/Button'
import { useState, useEffect } from 'react'
import './style.css'

export function Home() {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState({ name: '', avatar: '' });

    async function fetchUser() {

        try {
            const response = await fetch('https://api.github.com/users/' + username)
            const { name, avatar_url } = await response.json()

            setUser({
                name: name,
                avatar: avatar_url
            })
        } catch (error) {
            alert('Api fora do ar')
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

                <Button title="Pesquisar" functor={fetchUser}/>
            </div>

            <div className='search-results'>
                <Result name={user.name || 'Unnamed'} img={user.avatar || 'Nothing'} />
            </div>
        </div>
    );
}