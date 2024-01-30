export interface MediaEntity {
    id: string;
    fileExtension: string | null,
    path: string,
    uploadedAt: string;
    url: string;
    fileName: string;
    mediaType: string | null;
}
