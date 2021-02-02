import React, {useState} from 'react'

export default function AddTask({addTask}) {

    const [content, setContent] = useState('');

    function handleChange(e){
        setContent(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        addTask(content);
        setContent('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
             onChange={handleChange}
             value={content}
            />
        </form>
    )
}
