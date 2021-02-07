import React from 'react'

const Modal = ({closeModal, comic}) => {
    return (
            <section className="modal-content">
                <button className="close-btn" onClick={closeModal}>X</button>

                <img src={comic.thumbnail.path + "/portrait_xlarge.jpg"} alt='' />

                <form>
                <h1 className='modal-title'>{comic.name}</h1>
                <ul>
                    <li>
                        <strong>Name:</strong> {comic.title}
                    </li>
                    <li>
                    <strong>Description:</strong> {comic.description}
                    </li>
                </ul>
                </form>
            </section>
    )
}

export default Modal
