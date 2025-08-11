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
        <Card className='flex flex-row justify-between items-center'>
                <CardHeader>
                    <CardTitle className='whitespace-nowrap'>Do Laundry</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Details about the task...</p>
                </CardContent>
                <CardFooter>
                    <Button variant="outline">+3 points</Button>
                </CardFooter>
        </Card>
    )
}

export default TaskItem;