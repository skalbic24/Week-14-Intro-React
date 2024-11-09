import React, { useState } from 'react';
import { testData } from './testData';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import Sidebar from './Sidebar';
import './App.css'

interface Task {
    id: number;
    task: string;
}

const App: React.FC = () => {
    const [mustDoTasks, setMustDoTasks] = useState<Task[]>(testData.mustDoTasks);
    const [saveLaterTasks, setSaveLaterTasks] = useState<Task[]>(testData.saveLaterTasks);

    const addMustDoTask = (task: string) => {
        const newTask: Task = { id: Date.now(), task };
        setMustDoTasks([...mustDoTasks, newTask]);
    };

    const addSaveLaterTask = (task: string) => {
        const newTask: Task = { id: Date.now(), task };
        setSaveLaterTasks([...saveLaterTasks, newTask]);
    };

    const deleteTask = (id: number) => {
        setMustDoTasks(mustDoTasks.filter(task => task.id !== id));
    };

    const deleteSaveLaterTask = (id: number) => {
        setSaveLaterTasks(saveLaterTasks.filter(task => task.id !== id));
    };

    const editTask = (id: number) => {
        const taskToEdit = mustDoTasks.find(task => task.id === id);
        if (taskToEdit) {
            const newTaskName = prompt("Edit task", taskToEdit.task);
            if (newTaskName) {
                setMustDoTasks(mustDoTasks.map(task => task.id === id ? { ...task, task: newTaskName } : task));
            }
        }
    };

    const editSaveLaterTask = (id: number) => {
        const taskToEdit = saveLaterTasks.find(task => task.id === id);
        if (taskToEdit) {
            const newTaskName = prompt("Edit task", taskToEdit.task);
            if (newTaskName) {
                setSaveLaterTasks(saveLaterTasks.map(task => task.id === id ? { ...task, task: newTaskName } : task));
            }
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            {/* Input section at the very top */}
            <TaskInput onAddMustDo={addMustDoTask} onAddSaveLater={addSaveLaterTask} />
            {/* Flex container for Main Tasks and Saved for Later */}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ flex: 1, marginRight: '20px' }}>
                    <TaskList tasks={mustDoTasks} onDelete={deleteTask} onEdit={editTask} />
                </div>
                <div style={{ width: '200px' }}>
                    <Sidebar 
                        saveLaterTasks={saveLaterTasks} 
                        onDelete={deleteSaveLaterTask} 
                        onEdit={editSaveLaterTask} 
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
