import './style.css'

export function Perfil(props) {
    return (
        <div id='perfil'>
            <div id='perfil-url' className='perfil-div centralized'>
                {(props.url == '' || props.url == null) ? <p className='no-data'>Nothing</p> : <p>{props.url}</p>}
            </div>

            <div id='perfil-name' className='perfil-div centralized'>
                {(props.name == '' || props.name == null) ? <p className='no-data'>Nothing</p> : <p>{props.name}</p>}
            </div>

            <div id='perfil-company' className='perfil-div centralized'>
                {(props.company == '' || props.company == null) ? <p className='no-data'>Nothing</p> : <p>{props.company}</p>}
            </div>

            <div id='perfil-created-at' className='perfil-div centralized'>
                {(props.created_at == '' || props.created_at == null) ? <p className='no-data'>Nothing</p> : <p>{props.created_at}</p>}
            </div>
            <p></p>
            <div id='perfil-updated-at' className='perfil-div centralized'>
                {(props.updated_at == '' || props.updated_at == null) ? <p className='no-data'>Nothing</p> : <p>{props.updated_at}</p>}
            </div>

            <div id='perfil-bio' className='perfil-div centralized'>
                {(props.bio == '' || props.bio  == null) ? <p className='no-data'>Nothing</p> : <p>{props.bio }</p>}
            </div>
        </div>
    );
}