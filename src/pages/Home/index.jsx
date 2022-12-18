import { Card } from '../../Components/Card'
import { Tech } from '../../Components/Tech'
import './style.css'


export function Home() {
  return (
    <div className='container'>

      <header className='container-navbar'>
        <img src="src/assets/logov1.svg" alt="Logo v1" />
        <nav>
          <ul>
            <li><a href="#" id='button-nav'>Lets's Search</a></li>
          </ul>
        </nav>
      </header>

      <main>

        <div id="apresentation">
          <div id="main-text">
            <p>Describe Me</p>
            <p>A public perfil visualizer for Github users</p>
          </div>
          <img src="src/assets/logov2.svg" alt="Logo v2" />
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

        <img src="src/assets/mock.svg" alt="Mockup" />

        <div id="techs">
          <p>Technologies</p>

          <Tech img='src/assets/react-icon.svg'/>
          <Tech img='src/assets/node-icon.svg'/>
        </div>
      </main>



      <footer>
        <p>Henrique Cavalcante @ 2022 - <a href="https://github.com/henri-debug" target={'_blank'}>Github</a></p>
      </footer>
    </div>
  )
}

