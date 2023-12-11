declare namespace NodeJS {
    interface ProcessEnv {
        SPOTIFY_CLIENT_ID: string;
        SPOTIFY_CLIENT_SECRET: string;
        LOGGED_TOKEN_NAME: string;
        LOGGED_TOKEN_VALUE: string;
        ACCESS_TOKEN_COOKIE_NAME: string;
    }
  }