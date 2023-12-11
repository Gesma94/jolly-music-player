import { generateRandomString } from "@/utils/authUtils";
import { AccessToken, SpotifyApi } from "@spotify/web-api-ts-sdk";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    var urlSearchParams = new URLSearchParams();
    
    urlSearchParams.append('response_type', "code");
    urlSearchParams.append('state', generateRandomString(16));
    urlSearchParams.append('client_id', process.env.SPOTIFY_CLIENT_ID);
    urlSearchParams.append('redirect_uri', "http://localhost:3000/auth/callback");
    urlSearchParams.append('scope', "streaming \ user-read-email \ user-read-private");

    return new Response('https://accounts.spotify.com/authorize/?' + urlSearchParams.toString(), { status: 200 });
}