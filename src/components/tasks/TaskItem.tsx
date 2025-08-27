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
import { format, isBefore, isToday, isTomorrow, isYesterday } from 'date-fns';

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
    title?: string;
    description?: string;
    points?: number;
    dueAt?: Date;
    status?: 'not started' | 'in progress' | 'completed';
}

const TaskItem = ({ className, title = "Do Laundry", description = "Details about the task...", points = 3, status = "completed", dueAt = new Date() }: TaskItemProps) => {
  const [deleteOpen, setDeleteOpen] = useState(false)

  // Helper function to format the due date
  const formatDueDate = (date: Date) => {
    if (isToday(date)) {
      const now = new Date()
      if (isBefore(date, now)) {
        return "Overdue"
      }
      return format(date, "h:mm a") // "1:00 AM"
    } else if (isTomorrow(date)) {
      return "Tomorrow"
    } else if (isYesterday(date)) {
      return "Yesterday"
    } else {
      // For dates further away, show the date
      return format(date, "MMM d, yyyy")
    }
  }

  // Defer opening so the DropdownMenu can fully close first
  const openDelete = () => {
    requestAnimationFrame(() => setDeleteOpen(true))
  }

  return (
    <TableRow className={className}>
      <TableCell className='font-medium'>{title}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>{points}</TableCell>
      <TableCell><Badge variant={status === 'completed' ? 'default' : status === 'in progress' ? 'secondary' : 'outline'}>{status === 'completed' ? <Check /> : status === 'in progress' ? <Hourglass /> : <CircleOff />}{status}</Badge></TableCell>
      <TableCell>{formatDueDate(new Date("2025-08-27T22:00:00Z"))}</TableCell>
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