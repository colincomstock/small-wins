import { useQuery } from '@tanstack/react-query';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL!,
    import.meta.env.VITE_SUPABASE_ANON_KEY!
);

async function fetchCategories() {
    const { data, error } = await supabase.from('categories').select('*')
    if (error) throw error
    return data || []
}

type Category = {
    id: string
    name: string
    isSystem: boolean
    ownerId: string | null
    orgId: string | null
}

export function useCategories() {
    const { isPending, isError, data, error } = useQuery<Category[], Error>({
        queryKey: ['categories'],
        queryFn: fetchCategories,
    })

    return { isPending, isError, data, error }
}