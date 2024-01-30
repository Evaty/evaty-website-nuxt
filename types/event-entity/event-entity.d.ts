import {MediaEntity} from "@/types/media-entity";
import {EventCategory} from "@/types/event-entity/event-category";
import {EventDate} from "@/types/event-entity/event-date";
import {EventEntitySettings} from "@/types/event-entity/event-entity-settings";
import {UserEntity} from "@/types/user-entity/user-entity";
import {Location} from "@/types/location";
import {LocationMeta} from "@/types/location-meta";
import {EventItemListItem} from "@/types/event-entity/event-item-list";

export interface EventEntity {
    id: string;
    name: string,
    smallDescription: string,
    description: string;
    media: MediaEntity[];
    category: EventCategory;
    tags: string[];
    dates: EventDate[];
    eventEntitySettings: EventEntitySettings;
    hosts: UserEntity[];
    location: Location;
    locationMeta: LocationMeta;
    eventHighlights: EventItemListItem[];
    eventPlanningReliability: EventItemListItem[];
    hasSaved?: boolean;
    updatedAt: string;
}
