import { Card,
    CardHeader,
    CardContent,
    CardTitle,
    CardDescription,
    CardFooter
} from '../ui/card';
import { Button } from '../ui/button';

const TaskItem = () => {
    return (
        <Card className='flex flex-col gap-4'>
                <CardHeader>
                    <CardTitle>Task Title</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Details about the task...</p>
                </CardContent>
                <CardFooter>
                    <Button variant="outline">Complete</Button>
                    <Button variant="destructive">Delete</Button>
                </CardFooter>
        </Card>
    )
}

export default TaskItem;