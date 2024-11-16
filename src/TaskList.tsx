import React from 'react';

interface Task {
    id: number;
    task: string;
}

interface TaskListProps {
    tasks: Task[];
    onDelete: (id: number) => void;
    onEdit: (id: number, type: 'mustDo') => void; // Pass type to differentiate
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onEdit }) => {
    return (
        <div className="task-box">
            <h2>Main Tasks</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.task}
                        <button onClick={() => onEdit(task.id, 'mustDo')} style={{ marginLeft: '5px' }}>Edit</button>
                        <button onClick={() => onDelete(task.id)} style={{ marginLeft: '5px' }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;