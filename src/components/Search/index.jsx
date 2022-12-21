import './style.css'
import { Button } from '../Button'

export function Search(props) {
    return(
        <div className='search-box'>
                <img src="/search-icon.svg" alt="search-icon" />
                <input
                    type="text"
                    id='input-search'
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                />

                <Button title="Pesquisar" functor={props.function} />
        </div>
    )
}