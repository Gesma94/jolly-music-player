'use client';

import { useAppStore } from "@/hooks/useAppStore";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

type TAuthCallbackServerProps = {
    accessToken: string;
    spotifyUserDetails: any;
}

export default function AuthCallbackServer(props: TAuthCallbackServerProps) {
    const nextRouter = useRouter();
    const onMountOnce = useRef(false);
    const appStoreLogIn = useAppStore(x => x.logIn);

    useEffect(() => {
        if (onMountOnce.current) {
            return;
        }

        (async () => {
            await fetch(`/api/set-cookie?token=${props.accessToken}`);
            nextRouter.replace("/");
        })();
    }, [props.accessToken, nextRouter]);
    
    return <></>;
}