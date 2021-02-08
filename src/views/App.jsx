import './App.scss';
import React, { useState, useEffect } from 'react';
import api from '../services/Api';
import Modal from 'react-modal'

import Header from '../components/Header';
import Search from '../components/Search';
import Comics from '../components/ComicList';
import ComicDetails from '../components/ComicDetails';
import Mail from '../components/Mail';

Modal.setAppElement('body');

const customStyles = {
	content : {
	top                   : '50%',
	left                  : '50%',
	right                 : 'auto',
	bottom                : 'auto',
	marginRight           : '-50%',
	transform             : 'translate(-50%, -50%)',
	padding               : '0'             
	}
}

const App = () => {
	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [query, setQuery] = useState('')
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const [modalContent, setModalContent] = useState()
	const [selectedComics, setSelectedComics] = useState([])

	useEffect(() => {
		setIsLoading(true)
		api.get('/comics', query ? {params: {title: query}} : '')
		.then(result => {
			setItems(result.data.data.results)
			setIsLoading(false)
		})		
	}, [query])

	const selectComic = (comic, selected) => {
		if(selected) {
			let comicList = [...selectedComics, comic];
			setSelectedComics(comicList)
		} else {
			let comicList = [...selectedComics]
			let comicIndex = comicList.findIndex(item => item.id === comic.id)
			comicList.splice(comicIndex,1)
			setSelectedComics(comicList);
		}
	}

	const openModal = (comic) => {
		setModalIsOpen(true);
		setModalContent(comic)
	}

	const closeModal = () => {
		setModalIsOpen(false);
	}

	return (
	<div className="app">
		<Header></Header>
		<Search search={(q) => setQuery(q)}></Search>
		<Comics items={items} isLoading={isLoading} openModal={openModal} selectComic={selectComic}></Comics>
		<Mail selectedComics={selectedComics}></Mail>
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			style={customStyles}>
			<ComicDetails comic={modalContent} closeModal={closeModal}></ComicDetails>
		</Modal>
	</div>
	);
}

export default App;
