'use client';

import { useEffect, useRef } from 'react';
import { useAppStore } from '@/hooks/useAppStore';
import { useRouter, useSearchParams } from 'next/navigation';
import { UserProfile } from '@spotify/web-api-ts-sdk';


export default function AuthCallback() {
    const nextRouter = useRouter();
    const onMountOnce = useRef(false);
    const searchParams = useSearchParams();
    const appStoreLogIn = useAppStore(x => x.logIn);
    
    const codeParam = searchParams.get('code');
    const stateParam = searchParams.get('state');

    useEffect(() => {
        if (onMountOnce.current) {
            return;
        }

        onMountOnce.current = true;
        (async () => {
            const setCookieFetchResult = await fetch(`/api/set-cookie?code=${codeParam}&state=${stateParam}`);
            const spotifyUserProfile : UserProfile = await setCookieFetchResult.json();

            appStoreLogIn(spotifyUserProfile.display_name, "", 11);

            nextRouter.replace("/");
        })();
    }, [appStoreLogIn, codeParam, nextRouter, stateParam]);

    return <></>;
}