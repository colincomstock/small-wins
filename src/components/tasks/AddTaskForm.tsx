import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Textarea } from '@/components/ui/textarea'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from '@/components/ui/calendar'
import { ScrollArea } from "@/components/ui/scroll-area"
import { useCategories } from "@/hooks/useCategories"

const formSchema = z.object({
    title: z.string().min(1, "Title is required").max(30),
    description: z.string().optional(),
    points: z.number().min(1, "You must select a difficulty").max(3),
    dueDate: z.date().nonoptional(),
    category: z.string().min(1, "Categoryh is required").max(30),
})

type FormData = z.infer<typeof formSchema>

export default function AddTaskForm() {

    const { 
        isPending: categoryPending, 
        isError: categoryError, 
        data: categoryData, 
        error: categoryErrorMessage 
    } = useCategories();
    console.log(categoryData);

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            points: 1,
            dueDate: undefined,
            category: ""
        },
    })

    function onSubmit(values: FormData) {
        console.log(values)
    }
    
    return(
        <>
            <ScrollArea className="h-full max-h-[calc(100vh-150px)]">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                        {/* Title Field */}
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Task Title*</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Description Field */}
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Task Description</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder='describe your task' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Points Field */}
                        <FormField
                            control={form.control}
                            name="points"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Points (Task Difficulty)*</FormLabel>
                                    <Select onValueChange={(value) => field.onChange(parseInt(value))} defaultValue={field.value?.toString()}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select task difficulty" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="1">1 - Easy</SelectItem>
                                            <SelectItem value="2">2 - Medium</SelectItem>
                                            <SelectItem value="3">3 - Hard</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Due Date Field */}
                        <FormField
                            control={form.control}
                            name="dueDate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Due Date*</FormLabel>
                                    <FormControl>
                                        <div className="space-y-3">
                                            <Button
                                                variant="outline"
                                                className="w-full justify-start text-left font-normal"
                                                type="button"
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {field.value ? format(field.value, "PPP") : "Pick a date"}
                                            </Button>
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                className="rounded-md border w-full"
                                                disabled={(date) => {
                                                    const today = new Date()
                                                    today.setHours(0, 0, 0, 0)
                                                    return date < today
                                                }}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Category</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a category" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {categoryData?.map((category) => (
                                                <SelectItem key={category.id} value={category.id}>{category.name} (default)</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />



                        <Button type='submit'>Save</Button>
                    </form>
                </Form>
            </ScrollArea>
            
        </>
    )
}