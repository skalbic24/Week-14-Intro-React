import React, { useState, useEffect } from 'react';

interface TaskInputProps {
    onAddMustDo: (task: string) => void;
    onAddSaveLater: (task: string) => void;
    currentTaskText: string; // Add prop for current task text
    onUpdateTask: (task: string) => void; // Add prop for updating task
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddMustDo, onAddSaveLater, currentTaskText, onUpdateTask }) => {
    const [task, setTask] = useState<string>("");

    useEffect(() => {
        setTask(currentTaskText); // Set task text for editing
    }, [currentTaskText]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (task) {
            if (currentTaskText) {
                onUpdateTask(task); // Update task if editing
            } else {
                onAddMustDo(task); // Add new task
            }
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
        <div style={{ textAlign: 'center', marginBottom: '20px', marginTop: '10px' }}>
            <h2 style={{ marginBottom: '10px' }}>To Do Tasks</h2>
            <form onSubmit={handleSubmit} style={{ display: 'inline-block', marginRight: '10px' }}>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter Task"
                />
                <button
                    type="submit"
                    style={{ backgroundColor: '#4CAF50', color: 'white', fontWeight: 'bold' }}
                >
                    {currentTaskText ? "Update Task" : "Add Must Do"} {/* Change button text based on editing state */}
                </button>
            </form>
            <form onSubmit={handleSaveLater} style={{ display: 'inline-block' }}>
                <button
                    type="submit"
                    style={{ backgroundColor: '#2196F3', color: 'white', fontWeight: 'bold' }}
                >
                    Save Later
                </button>
            </form>
        </div>
    );
};

export default TaskInput;