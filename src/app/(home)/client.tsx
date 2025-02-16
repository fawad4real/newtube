"use client"
import { trpc } from '@/trpc/client';

export const PageClient = () => {
    const [data] = trpc.hello.useSuspenseQuery({
        text: "Fawad"
    })

    return (
        <div>
            <p>page says {data.greeting}</p>
        </div>
    )
}

