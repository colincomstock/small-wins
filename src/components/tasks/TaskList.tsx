import React from 'react';
import { useTasks } from '@/hooks/useTasks';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
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
import { 
    CalendarClock,
    LoaderCircle
 } from 'lucide-react';
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
import { Skeleton } from '../ui/skeleton';
import { toast } from 'sonner';
import AddTaskModal from './AddTaskModal';

const TaskList = () => {
    
    type TaskItem = {
        id: number;
        title: string;
        description: string;
        status: 'not started' | 'in progress' | 'completed';
        points: number;
    }

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

    const { isPending, isError, data, error } = useTasks();

    function tableLoading() {
        if (isPending) {
            return (
                <TableRow>
                    <TableCell>
                        <Skeleton className='h-4 w-3/4 rounded-md' />
                    </TableCell>
                <TableCell>
                    <Skeleton className='h-4 w-3/4 rounded-md' />
                </TableCell>
                <TableCell>
                    <Skeleton className='h-4 w-3/4 rounded-md' />
                </TableCell>
                <TableCell>
                    <Skeleton className='h-4 w-3/4 rounded-md' />
                </TableCell>
                <TableCell>
                    <Skeleton className='h-4 w-3/4 rounded-md' />
                </TableCell>
            </TableRow>
            );
        }
        if (isError) {
            toast.error('Failed to load tasks')
            return (
                <TableRow>
                    <TableCell colSpan={5}>
                        <div className='text-center'>Error: Failed to load tasks.</div>
                    </TableCell>
                </TableRow>
            );
        }
    }

    return (
        <>
                <div className='flex flex-row align-items-center justify-between mb-4'>
                    <h1 className='text-xl font-bold font-sans'>Tasks</h1>
                    <AddTaskModal />
                </div>
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
                            {tableLoading()}
                            {data?.map((task) => (
                                <TaskItem key={task.id} title={task.name} description={task.description} points={task.point_value} status={task.status} />
                            ))}
                        </TableBody>
                    </Table>
            </Card>
        </>
    );
};

export default TaskList;