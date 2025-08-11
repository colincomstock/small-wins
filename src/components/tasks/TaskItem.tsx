import { Card,
    CardHeader,
    CardContent,
    CardTitle,
    CardDescription,
    CardFooter
} from '../ui/card';
import { Button } from '../ui/button';

interface TaskItemProps {
    className?: string;
    children?: React.ReactNode;
    title?: string;
    description?: string;
    points?: number;
}

const TaskItem = ({ className, children, title = "Do Laundry", description = "Details about the task...", points = 3 }: TaskItemProps) => {
    return (
        <Card className={`flex flex-row justify-between items-center ${className || ''}`}>
                <CardHeader>
                    <CardTitle className='whitespace-nowrap'>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{description}</p>
                    {children}
                </CardContent>
                <CardFooter>
                    <Button variant="outline">+{points} points</Button>
                </CardFooter>
        </Card>
    )
}

export default TaskItem;