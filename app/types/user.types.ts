import { ApiResponse } from "./api.types";

export interface UserDocument {
    id: string;
    docType: string;
    originalName: string;
    mimeType: string;
    fileSize: number;
    uploadedAt: string;
}

export interface User {
    id: string;
    formNumber: string;
    selfId: string;
    incomingRegistryNumber: string;
    ministry: string;
    orgLevel1: string;
    fullName: string;
    motherName: string;
    orgLevel2: string;
    orgLevel3: string;
    jobTitle: string;
    jobTitleId: string;
    workplace: string;
    wivesCount: number;
    childrenCount: number;
    birthDate: string;
    nationalId: string;
    academicDegree: string;
    salaryUsd: number;
    workSchedule: string;
    originGovernorate: string;
    originCountry: string;
    residenceGovernorate: string;
    currentResidence: string;
    recruitmentBranchGovernorate: string;
    extraFields: Record<string, string>;
    documents: UserDocument[];
    additionDate: string;
    createdAt: string;
    confirmed: boolean;
    confirmedAt: string | null;
    confirmedBy: string | null;
    needsRequested: boolean;
}



export type UserResponse = ApiResponse<User>;
export type UsersResponse = ApiResponse<User[]>;
