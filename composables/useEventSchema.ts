import type {EventEntity} from "~/types/event-entity/event-entity";
import type {Event} from "schema-dts";
import {isFullDay, isSameDay} from "~/utils/dateUtils";
import type {MaybeComputedRefOrPromise} from "@unhead/vue";

const dayJs = useDayjs();
function formatDates(startDate: string, endDate: string, isStart: boolean): string {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const dateToFormat = isStart ? startDate : endDate;

    // Check if the start and end are the same day and not a full day
    if (isSameDay(start, end) && !isFullDay(start, end)) {
        // Format without specifying a format string defaults to ISO string in dayjs, which might be intended here
        return dayJs(dateToFormat).format();
    }
    // Default format for other cases
    return dayJs(dateToFormat).format("YYYY-MM-DD");
}
export const useEventSchema = (event: EventEntity) => {
    let returnArray: MaybeComputedRefOrPromise<Event>[] = [];
    event.dates.forEach(date => {
        returnArray.push(defineEvent({
            name: event.name,
            startDate: formatDates(date.startTime, date.endTime, true),
            endDate: formatDates(date.startTime, date.endTime, false),
            eventStatus: 'EventScheduled',
            image: event.media.map(image => image.url),
            description: event.smallDescription,
            location: {
                '@type': 'Place',
                name: event.locationMeta.label,
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: event.locationMeta.label,
                    addressLocality: event.locationMeta.city,
                    addressCountry: event.locationMeta.country
                }
            },
        }))
    })
    return returnArray;
}