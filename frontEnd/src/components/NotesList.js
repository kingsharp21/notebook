import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
	notes,
	handleDeleteNote,
}) => {
	return (
		<div className='notes-list'>
			{notes.map((note) => (
				<Note key={note._id}
					id={note._id}
					title={note.title}
					body={note.body}
					date={note.date.split("T")[0]}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
			<AddNote />
		</div>
	);
};

export default NotesList;
