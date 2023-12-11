'use client';

import { useAppStore } from "@/hooks/useAppStore"
import { UserProfile } from "@spotify/web-api-ts-sdk";
import { useEffect } from "react";

type TLogUser = {
    user: UserProfile;    
}

export const LogUser = (props: TLogUser) => {
    const isLogged = useAppStore(x => x.isLogged);
    const login = useAppStore(x => x.logIn);

    useEffect(() => {
        if (!isLogged && props.user !== undefined && props.user !== null) {
            login(props.user.display_name, "", 0);
        }    
    }, [isLogged, login, props.user]);

    return isLogged ? <></> : <>logging</>
}
