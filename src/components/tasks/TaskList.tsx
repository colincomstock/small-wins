import React from 'react';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Ellipsis } from 'lucide-react';
import TaskItem from './TaskItem';
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle
} from '@/components/ui/card';

const TaskList = () => {
    
    type TaskItem = {
        id: number;
        title: string;
        description: string;
        points: number;
    }

    const tasks: TaskItem[] = [
        {
            id: 1,
            title: 'Do dishes',
            description: 'Wash and dry all dishes',
            points: 5,
        },
        {
            id: 2,
            title: 'Clean room',
            description: 'Tidy up the bedroom',
            points: 3,
        },
        {
            id: 3,
            title: 'Grocery shopping',
            description: 'Buy groceries for the week',
            points: 2,
        },
        {
            id: 4,
            title: 'Laundry',
            description: 'Wash and fold clothes',
            points: 4,
        }
    ];

    return (
        <Card>
                <Table>
                    <TableCaption>A list of all tasks for the selected date.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Task</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Points</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tasks.map((task) => (
                            <TaskItem key={task.id} title={task.title} description={task.description} points={task.points} />
                        ))}
                    </TableBody>
                </Table>
        </Card>
    );
};

export default TaskList;