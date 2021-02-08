import React, { useState } from 'react'


const Comic = ({item, openModal, selectComic}) => {
    const [selected, setSelected] = useState(false)
    const [hover, setHover] = useState(false)

    const onClickSelect = () => {
        setSelected(!selected)
        selectComic(item, !selected)
    }
    return (
        <div className="comic"
            onMouseEnter={e => setHover(true)}
            onMouseLeave={e => setHover(false)}>
            <div className="comic-inner">
                <div className="comic-front">
                    <img src={item.thumbnail.path + "/portrait_xlarge.jpg"} alt='' />
                    <div className="title">
                        <h2>{item.title}</h2>
                    </div>
                    <div className={selected || hover ? 'overlay' : ''}></div>
                    <div className={selected ? "check-holder" : ''}>
                        <div className={selected ? 'check' : ''}></div>
                    </div>
                </div>
                <div className={hover ? "options" : "options hidden"}>
                    <button className="btn-default" onClick={onClickSelect}>
                        {selected ? "Remover" : "Selecionar"}
                    </button>
                    <button className="btn-default" onClick={() => openModal(item)}>
                        Detalhes
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Comic
