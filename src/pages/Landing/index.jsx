import { Card } from '../../components/Card'
import { Tech } from '../../components/Tech'
import './style.css'


export function Landing() {
  return (
    <div className='container'>

      <header className='container-navbar'>
        <img src="/logov1.svg" alt="Logo v1" />
        <nav>
          <ul>
            <li><a href="/home" id='button-nav'>Lets's Search</a></li>
          </ul>
        </nav>
      </header>

      <main>

        <div id="apresentation">
          <div id="main-text">
            <p>Describe Me</p>
            <p>A public perfil visualizer for Github users</p>
          </div>
          <img src="/logov2.svg" alt="Logo v2" />
        </div>

        <div id='cards'>
          
          <Card
            title='Show repos'
            desc="Search and visualize yours repos and friend's repos."
          />

          <Card
            title='Search for users'
            desc='Look some information about other Github users.'
          />

          <Card
            title='Download your infos'
            desc='Download a PDF with your Github infos'
          />
        </div>

        <img src="/mock.svg" alt="Mockup" />

        <div id="techs">
          <p>Technologies</p>

          <Tech img='/react-icon.svg'/>
          <Tech img='/node-icon.svg'/>
        </div>
      </main>



      <footer>
        <p>Henrique Cavalcante @ 2022 - <a href="https://github.com/henri-debug" target={'_blank'}>Github</a></p>
      </footer>
    </div>
  )
}

