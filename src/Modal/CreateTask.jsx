import React from 'react';

const CreateTask = ({ open, onClose }) => {

    return (
        <div
            onClick={onClose}
            className={`
            fixed inset-0 flex justify-center items-center translate-colors
            ${open ? "visible bg-black/20" : "invisible"}
            `}
        >
            {/* Modal */}
            <div>
                <h1>Hello this is Modal!!!</h1>
            </div>
        </div>
    );
};

export default CreateTask;