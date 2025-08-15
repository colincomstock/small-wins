import {
    TableCell,
    TableRow
} from '@/components/ui/table';
import { Button } from '../ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { CheckCircle, Ellipsis } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from "react"

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
    Pencil

 } from 'lucide-react';

interface TaskItemProps {
    className?: string;
    children?: React.ReactNode;
    title?: string;
    description?: string;
    points?: number;
}

const TaskItem = ({ className, children, title = "Do Laundry", description = "Details about the task...", points = 3 }: TaskItemProps) => {
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
      <TableCell className="text-right flex flex-row justify-end gap-2">
        <Button
          variant="outline"
          onClick={() =>
            toast(<div className="flex items-center gap-4"><CheckCircle /> <span>Task: "{title}" completed.</span></div>)
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
            <DropdownMenuItem><Pencil />Edit</DropdownMenuItem>
            <DropdownMenuItem className="focus:bg-red-950" onSelect={openDelete}><Trash2 />Delete</DropdownMenuItem>
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