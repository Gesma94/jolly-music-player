import { AccessToken, SpotifyApi } from "@spotify/web-api-ts-sdk";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    var url = new URL(request.url);
    var codeParam = url.searchParams.get('code') ?? "";
    var stateParam = url.searchParams.get('state') ?? "";

    var fetchBody = new URLSearchParams();

    fetchBody.append('code', codeParam);
    fetchBody.append('grant_type', 'authorization_code');
    fetchBody.append('redirect_uri', "http://localhost:3000/auth/callback");

    var spotifyTokenFetchResult = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        body: fetchBody.toString(),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64'))
        },
    });

    var accessToken: AccessToken = await spotifyTokenFetchResult.json();
    var spotifyUserProfile = await SpotifyApi.withAccessToken(process.env.SPOTIFY_CLIENT_ID, accessToken).currentUser.profile();

    var response = NextResponse.json(spotifyUserProfile, { status: 200 });
    response.cookies.set(process.env.ACCESS_TOKEN_COOKIE_NAME, accessToken.access_token, { httpOnly: true });

    return response;
}