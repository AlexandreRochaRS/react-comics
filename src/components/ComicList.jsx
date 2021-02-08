import React from 'react'
import Comic from './Comic'
import Animation from './Animation'

const Comics = ({items, isLoading, openModal, selectComic}) => {
    return (
        <section className="comicList container">
            {!isLoading ? items.map(item => 
                <Comic key={item.id}
                    item={item}
                    openModal={openModal}
                    selectComic={selectComic}/>
            ) : <Animation
                    loop={true}
                    animation={'loading'}
                    width={120}
                    height={120}/>}
        </section>
    )
}

export default Comics
