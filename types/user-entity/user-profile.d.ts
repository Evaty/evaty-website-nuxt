import { UserBadge } from '@/types/user-entity/user-badge'

export interface UserProfile {
  bio: string | null
  link: string | null
  description: string | null
  badges: UserBadge[] | null
  displayName: string | null
  avatarMediaId: string | null
  birthday: string | null
}
