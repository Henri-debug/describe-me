import { useEffect, useState } from 'react'
import { Repository } from '../../components/Repository'
import { Search } from '../../components/Search'
import './style.css'

export function Describe() {
    const [repos, setRepos] = useState([])
    const [user, setUser] = useState({
        name: '',
        avatar: '',
        username: '',
        perfil_link: '',
        company: '',
        created_at: '',
        updated_at: '',
        bio: ''
    })

    async function getRepos() {
        const response = await fetch('https://api.github.com/users/'+user.username+'/repos')
        const data = await response.json()
        console.log(data)

        //Todo
        // Fazer isso funcionar
    }

    useEffect(() => {
        const {name,avatar,username,perfil_link,company,created_at,updated_at,bio} = JSON.parse(localStorage.getItem('user'))
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
        <div id='describe-container'>

            <Search placeholder='Repository Name' function={getRepos}/>

            <div id='repositories'>
                <h2>Repositories</h2>

                <div id='repos-results'>
                    <Repository />

                </div>
            </div>
        </div>
    );
}