import React, { useState } from 'react';

interface TaskInputProps {
    onAddMustDo: (task: string) => void;
    onAddSaveLater: (task: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddMustDo, onAddSaveLater }) => {
    const [task, setTask] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (task) {
            onAddMustDo(task);
            setTask("");
        }
    };

    const handleSaveLater = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (task) {
            onAddSaveLater(task);
            setTask("");
        }
    };

    return (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <form onSubmit={handleSubmit} style={{ display: 'inline-block', marginRight: '10px' }}>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add Must Do Task"
                />
                <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white' }}>Add Must Do</button>
            </form>
            <form onSubmit={handleSaveLater} style={{ display: 'inline-block' }}>
                <button type="submit" style={{ backgroundColor: '#2196F3', color: 'white' }}>Save Later</button>
            </form>
        </div>
    );
};

export default TaskInput;