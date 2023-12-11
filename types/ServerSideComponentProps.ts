export type TServerSideComponentProp<TParams = {}, TSearchParams = { [key: string]: string | string[] | undefined }> = {
    params: TParams;
    searchParams: TSearchParams;
}