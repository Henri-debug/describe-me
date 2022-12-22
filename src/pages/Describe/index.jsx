import { useEffect, useState } from 'react'
import { Repository } from '../../components/Repository'
import { Search } from '../../components/Search'
import './style.css'

export function Describe() {
    const [repos, setRepos] = useState([{
        name: '',
        language: '',
        description: '',
        svn_url: ''
    }])
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
        const response = await fetch('https://api.github.com/users/' + user.username + '/repos')
        const data = await response.json()
        for (let i in data) {
            const {
                name,
                language,
                description,
                svn_url
            } = data[i]

            setRepos((repos) => [...repos, {
                name,
                language,
                description,
                svn_url
            }])
        }
    }

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

        getRepos()
    }, [user.name])

    return (
        <div id='describe-container'>

            <div id='describe-nav'>
                <img src="/logov1.svg" alt="Logo v1" />
                
                <div className='perfil-link'>
                    <a href="">
                        My Github
                        <img src={user.avatar} alt="" />
                    </a>
                </div>
                
            </div>


            <div id='search'>
                <Search placeholder='Repository Name' function={() => { console.log(repos) }} />
            </div>


            <div id='repositories'>
                <h2>Repositories</h2>

                <div id='repos-results'>
                    {
                        repos.map(
                            repo => (repo.name == null || repo.name == '') ? '' : <Repository key={repo.svn_url} name={repo.name} src={repo.svn_url}/> 
                        )
                    }

                </div>
            </div>
        </div>
    );
}