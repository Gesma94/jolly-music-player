'use client';

import { useRouter } from "next/navigation";


export default function Login() {
    const nextRouter = useRouter();

    const onLoginClick = async (_: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
        const result = await fetch('/api/auth');
        const text = await result.text();

        nextRouter.replace(text);
    }

    return <div><button onClick={onLoginClick}>Login via Spotify</button></div>
}