import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../ui/button";
import AddTaskForm from "./AddTaskForm";

export default function AddTaskModal() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Add Task</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add a New Task</SheetTitle>
          <SheetDescription className="mb-8">
            Fill in the details below to create a new task.
          </SheetDescription>
          <AddTaskForm />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
