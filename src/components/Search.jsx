import React, { useRef } from 'react'
import { debounce } from 'lodash'


const Search = ({search}) => {

    const delayedSearch = useRef (
        debounce(e => {
            search(e)
        }, 500)
    ).current;

    const onSearch = (query) => {
        delayedSearch(query)
    }
    
    return (
        <section className="search">
            <form className="container">
                <input type="text"
                    className="form-control"
                    placeholder="Encontre um quadrinho"
                    autoFocus
                    onChange={(e)=>onSearch(e.target.value)}
                    ></input>
            </form>
        </section>
    )
}

export default Search