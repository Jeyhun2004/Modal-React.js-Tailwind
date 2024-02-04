import React, { useState } from 'react';
import Modal from '../Modal/CreateTask';

function Task() {

    const [Open, setOpen] = useState(false)

    return (
        <>
            <div className='flex flex-col items-center'>
                <h1 className='text-3xl'>ToDoList</h1>
                <button
                    className='bg-blue-800 text-white rounded-lg p-2'
                    onClick={() => setOpen(true)}
                >Create Task</button>

                <Modal open={Open} onClose={() => setOpen(false)}>

                </Modal>
            </div>

        </>
    );
}

export default Task;