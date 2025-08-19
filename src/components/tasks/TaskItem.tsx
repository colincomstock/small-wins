import {
    TableCell,
    TableRow
} from '@/components/ui/table';
import { Button } from '../ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { CheckCircle, Clock, Ellipsis } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from "react"
import { Badge } from "@/components/ui/badge";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { 
    Trash2,
    Pencil,
    Check,
    Hourglass,
    CircleOff,
    Clock1,
    Clock3,
    Calendar1
 } from 'lucide-react';

interface TaskItemProps {
    className?: string;
    children?: React.ReactNode;
    title?: string;
    description?: string;
    points?: number;
    status?: 'not started' | 'in progress' | 'completed';
}

const TaskItem = ({ className, children, title = "Do Laundry", description = "Details about the task...", points = 3, status = "completed" }: TaskItemProps) => {
  const [deleteOpen, setDeleteOpen] = useState(false)

  // Defer opening so the DropdownMenu can fully close first
  const openDelete = () => {
    requestAnimationFrame(() => setDeleteOpen(true))
    // alternative: setTimeout(() => setDeleteOpen(true), 0)
  }

  return (
    <TableRow className={className}>
      <TableCell className='font-medium'>{title}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>{points}</TableCell>
      <TableCell><Badge variant={status === 'completed' ? 'default' : status === 'in progress' ? 'secondary' : 'outline'}>{status === 'completed' ? <Check /> : status === 'in progress' ? <Hourglass /> : <CircleOff />}{status}</Badge></TableCell>
      <TableCell className="flex flex-row justify-center gap-2">
        <Button
          variant="outline"
          onClick={() =>
            toast(<div className="flex items-center gap-4"><Check /> <span>Task: "{title}" completed.</span></div>)
          }
        >
          Complete
        </Button>
      </TableCell>

      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="More actions">
              <Ellipsis />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Snooze</DropdownMenuLabel>
            <DropdownMenuItem><Clock1 />1 Hour</DropdownMenuItem>
            <DropdownMenuItem><Clock3 />3 Hours</DropdownMenuItem>
            <DropdownMenuItem><Calendar1 />1 Day</DropdownMenuItem>
            <DropdownMenuLabel>Task Actions</DropdownMenuLabel>
            <DropdownMenuItem><Hourglass />In Progress</DropdownMenuItem>
            <DropdownMenuItem><Pencil />Edit</DropdownMenuItem>
            <DropdownMenuItem className="focus:bg-red-100 dark:focus:bg-red-950" onSelect={openDelete}><Trash2 />Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <AlertDialog open={deleteOpen} onOpenChange={setDeleteOpen}>
          <AlertDialogContent
            onCloseAutoFocus={(e) => e.preventDefault()}
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => 
                toast(<div className="flex items-center gap-4"><Trash2 /> <span>Task: "{title}" deleted.</span></div>)
              }>Confirm</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </TableCell>
    </TableRow>
  );
}

export default TaskItem;