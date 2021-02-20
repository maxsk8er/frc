import React from 'react'

const Book = ({ title, job }) => {

	const clickHandler = (title) => {
		alert(title);
	}

	return (
		<article>
			<h1>{title}</h1>
			<h2>{job}</h2>
			<button type="butotn" onClick={()=>clickHandler(title)}>Example</button>
		</article>
	)
}

export default Book