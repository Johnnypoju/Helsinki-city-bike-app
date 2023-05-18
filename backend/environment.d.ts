declare global {
    namespace NodeJS {
        interface ProcessEnv {
            [DATABASE_URL: string]: string;
            PORT: string;
        }
    }
};

export {}