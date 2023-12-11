'use client';

import { useAppStore } from "@/hooks/useAppStore"

export const TempLoggedUser = () => {
    const isLogged = useAppStore(x => x.isLogged);
    const username = useAppStore(x => x.username);
    
    return isLogged ? username : 'not logged';

}
