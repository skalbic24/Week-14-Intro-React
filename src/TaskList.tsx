// src/TaskList.tsx
import React from 'react';
import { LayoutList } from 'lucide-react';

interface Task {
    id: number;
    task: string;
}

interface TaskListProps {
    tasks: Task[];
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onEdit }) => {
    return (
        <div className="task-box">
            <h2>Main Tasks</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                       <div className="task-items">
                           <LayoutList color="green" size={20}  /> {task.task}
                       </div>
                        <button onClick={() => onEdit(task.id)} style={{ marginLeft: '5px' }}>Edit</button>
                        <button onClick={() => onDelete(task.id)} style={{ marginLeft: '5px' }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;