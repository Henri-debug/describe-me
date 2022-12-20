import './style.css'

export function Perfil(props) {
    return (
        <div id='perfil'>
            <div id='perfil-url' className='perfil-div centralized'>
                <p>{props.url || <p className='no-data'>Nothing</p>}</p>
            </div>

            <div id='perfil-name' className='perfil-div centralized'>
                <p>{props.name || <p className='no-data'>Nothing</p>}</p>
            </div>

            <div id='perfil-company' className='perfil-div centralized'>
                {props.company || <p className='no-data'>Nothing</p>}
            </div>

            <div id='perfil-created-at' className='perfil-div centralized'>
                <p>{props.created_at || <p className='no-data'>Nothing</p>}</p>
            </div>
            <p></p>
            <div id='perfil-updated-at' className='perfil-div centralized'>
                <p>{props.updated_at || <p className='no-data'>Nothing</p>}</p>
            </div>

            <div id='perfil-bio' className='perfil-div centralized'>
                <p>{props.bio || <p className='no-data'>Nothing</p>}</p>
            </div>
        </div>
    );
}