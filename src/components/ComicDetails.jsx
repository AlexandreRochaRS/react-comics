import React from 'react'

const Modal = ({closeModal, comic}) => {
    return (
            <section className="modal-content">
                <div className="modal-overlay">
                <button className="close-btn" onClick={closeModal}>X</button>
                <img src={comic.thumbnail.path + "/portrait_fantastic.jpg"} alt='' />
                <form>
                    <ul>
                        <li>
                            <h2>{comic.title}</h2>
                        </li>
                        <li>
                            <p>{comic.description ? comic.description : "Descrição Indisponível"}</p>
                        </li>
                    </ul>
                </form>

                </div>
            </section>
    )
}

export default Modal
