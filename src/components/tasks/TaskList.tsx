import React from 'react';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
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

const TaskList = () => {
    return (
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
                <TableRow>
                    <TableCell className="font-medium">Do dishes</TableCell>
                    <TableCell>Wash and dry all dishes</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell className="text-right flex flex-row justify-end gap-2">
                        <Button variant="outline" className="btn btn-primary">Complete</Button>
                    </TableCell>
                    <TableCell>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Ellipsis />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default TaskList;
