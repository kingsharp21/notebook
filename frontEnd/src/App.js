import React, { useState, useEffect } from 'react';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
	const [notes, setNotes] = useState([]);

	const fetchData = () => {
		return fetch("https://nootbook.onrender.com/api/getAll")
			.then((response) => response.json())
			.then((data) => setNotes(data))
	}

	useEffect(() => {
		fetchData();
	})


	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);


	const deleteNote = (id) => {
		return fetch(`https://nootbook.onrender.com/api/delete/${id}`,{ method: "DELETE" })
			.then((response) => response.json())
			.then(()=> console.log('delected'))
	}

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>{
						return note.title.toLowerCase().includes(searchText)
					})}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};
// .filter((note) =>
// 						note.title.toLowerCase().includes(searchText)
// 					)
export default App;
