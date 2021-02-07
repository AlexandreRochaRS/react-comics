import React from 'react'
import Comic from './Comic'
import Loader from './Loader'

const Comics = ({items, isLoading, openModal, selectComic}) => {
    console.log(isLoading)
    return (
        <section className="comics container">
            {!isLoading ? items.map(item => 
                <Comic key={item.id}
                    item={item}
                    openModal={openModal}
                    selectComic={selectComic}/>
            ): <Loader/>}
        </section>
    )
}

export default Comics
