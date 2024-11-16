import React from 'react';

interface Task {
    id: number;
    task: string;
}

interface SidebarProps {
    saveLaterTasks: Task[];
    onDelete: (id: number) => void;
    onEdit: (id: number, type: 'saveLater') => void; // Pass type to differentiate
}

const Sidebar: React.FC<SidebarProps> = ({ saveLaterTasks, onDelete, onEdit }) => {
    return (
        <div className="sidebar-box">
            <h3>Saved for Later</h3>
            <ul>
                {saveLaterTasks.map(task => (
                    <li key={task.id}>
                        {task.task}
                        <button onClick={() => onEdit(task.id, 'saveLater')} style={{ marginLeft: '5px' }}>Edit</button>
                        <button onClick={() => onDelete(task.id)} style={{ marginLeft: '5px' }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;