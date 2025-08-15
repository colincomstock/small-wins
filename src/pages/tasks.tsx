import React from 'react';
import TaskList from '@/components/tasks/TaskList';
import { Button } from '@/components/ui/button';

const Tasks = () => {
    return (
        <>
            <div className='flex flex-row align-items-center justify-between mb-4'>
                <h1 className='text-xl font-bold font-sans'>Tasks</h1>
                <Button variant="default">+ Add Task</Button>
            </div>
            <TaskList />
        </>
    );
};

export default Tasks;
