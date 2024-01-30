import {UserProfile} from "@/types/user-entity/user-profile";

export interface UserEntity {
    id: string;
    username: string;
    userProfile: UserProfile;
    followed?: boolean;
}
