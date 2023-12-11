import { HomeIcon, ListBulletIcon, PlayPauseIcon, UserCircleIcon, WrenchIcon } from "@heroicons/react/24/outline";
import { ISidebarProps } from "./Sidebar.types";
import Link from "next/link";
import { TempLoggedUser } from "../TempLoggedUser/TempLoggedUser";

export const Sidebar = (props: ISidebarProps) => {
    return <div className="h-full flex flex-col">
        <Link href="/">
        <span className="h-20 w-full flex flex-col gap-1 place-content-center place-items-center">
            <HomeIcon className="h-6 w-6" />
            <p>Home</p>
        </span>
        </Link>
        <Link href="/player">
            <span className="h-20 w-full flex flex-col gap-1 place-content-center place-items-center">
            <PlayPauseIcon className="h-6 w-6" />
            <p>Player</p>
        </span>
        </Link>
        <Link href="/playlists">
        <span className="h-20 w-full flex flex-col gap-1 place-content-center place-items-center">
            <ListBulletIcon className="h-6 w-6" />
            <p>Playlists</p>
        </span>
        </Link>
        <Link href="/account">
        <span className="h-20 w-full flex flex-col gap-1 place-content-center place-items-center">
            <UserCircleIcon className="h-6 w-6" />
            <p>Account</p>
            <TempLoggedUser />
        </span>
        </Link>
    </div>
}