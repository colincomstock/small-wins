import React from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import TaskItem from './TaskItem';
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CalendarClock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const TaskList = () => {
    
    type TaskItem = {
        id: number;
        title: string;
        description: string;
        status: 'not started' | 'in progress' | 'completed';
        points: number;
    }

    const tasks: TaskItem[] = [
        {
            id: 1,
            title: 'Do dishes',
            description: 'Wash and dry all dishes',
            status: 'not started',
            points: 5,
        },
        {
            id: 2,
            title: 'Clean room',
            description: 'Tidy up the bedroom',
            status: 'completed',
            points: 3,
        },
        {
            id: 3,
            title: 'Grocery shopping',
            description: 'Buy groceries for the week',
            status: 'in progress',
            points: 2,
        },
        {
            id: 4,
            title: 'Laundry',
            description: 'Wash and fold clothes',
            status: 'not started',
            points: 4,
        }
    ];

    const [position, setPosition] = React.useState("today")

    const timeFrameHelper = () => {
        switch (position) {
            case "today":
                return 'Today';
            case "seven":
                return 'Next 7 Days';
            case "thirty":
                return 'Next 30 Days';
            case "all":
                return 'All Tasks';
            default:
                return 'Today';
        }
    }

    return (
        <>
            <Card className="mb-4">
                <CardContent className='px-8'>
                    <div className="flex flex-1 h-16 items-center justify-between">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="default" className="h-full w-1/5 px-4 rounded-lg flex flex-row  justify-center items-center text-lg font-semibold hover:bg-gray-950 cursor-pointer"><CalendarClock className="mr-2" />{timeFrameHelper()}</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>View Tasks From:</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                <DropdownMenuRadioItem value="today">Today</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="seven">Next 7 Days</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="thirty">Next 30 Days</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="all">All Tasks</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Separator orientation="vertical" className="mx-4 h-full bg-border" />
                        <h2 className="flex flex-1 px-4 text-lg font-semibold bg-muted w-1/5 justify-center items-center h-full rounded-xl">3 Not Started</h2>
                        <Separator orientation="vertical" className="mx-4 h-full bg-border" />
                        <h2 className="flex flex-1 px-4 text-lg font-semibold bg-muted w-1/5 justify-center items-center h-full rounded-xl">3 In Progress</h2>
                        <Separator orientation="vertical" className="mx-4 h-full bg-border" />
                        <h2 className="flex flex-1 px-4 text-lg font-semibold bg-muted w-1/5 justify-center items-center h-full rounded-xl">4 Completed</h2>
                    </div>
                </CardContent>
            </Card>
            <Card className='p-4'>
                    <Table>
                        <TableCaption>A list of all tasks for the selected date range.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Task</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Points</TableHead>
                        <TableHead className="">Status</TableHead>
                        <TableHead className="text-center">Action</TableHead>
                        <TableHead className="w-[50px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {tasks.map((task) => (
                                <TaskItem key={task.id} title={task.title} description={task.description} points={task.points} status={task.status} />
                            ))}
                        </TableBody>
                    </Table>
            </Card>
        </>
    );
};

export default TaskList;