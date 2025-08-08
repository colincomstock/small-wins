import React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    CardTitle,
    CardDescription,
    CardAction
} from '@/components/ui/card';
import TaskItem from './TaskItem';


const TaskList = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    
    const addTask = (task: string) => {
        setTasks([...tasks, task]);
    };
    
    return (
        <div className="task-list">
            <Card>
                <CardHeader>
                    <CardTitle>Task List</CardTitle>
                    <CardDescription>Manage your tasks efficiently</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className='flex flex-col gap-6'>
                        {tasks.map((task, index) => (
                            <TaskItem key={index} className="mb-2">{task}</TaskItem>
                        ))}
                    </ul>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" onClick={() => addTask(`Task ${tasks.length + 1}`)}>
                        Add Task
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default TaskList;
