import React from 'react';
import { Bookmark } from 'lucide-react'

interface Task {
    id: number;
    task: string;
}

interface SidebarProps {
    saveLaterTasks: Task[];
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ saveLaterTasks, onDelete, onEdit }) => {
    return (
        <div className="sidebar-box">
            <h3>Saved for Later</h3>
            <ul>
                {saveLaterTasks.map(task => (
                    <li key={task.id} >
                       <div>
                           <Bookmark size={20}/> {task.task}
                            <button onClick={() => onEdit(task.id)} style={{ marginLeft: '5px' }}>Edit</button>
                            <button onClick={() => onDelete(task.id)} style={{ marginLeft: '5px' }}>Delete</button>
                       </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;