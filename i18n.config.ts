import deDE from './locales/de-DE.json'
import enUS from './locales/en-US.json'
export default defineI18nConfig(() => {
    return {
        legacy: false,
        locale: 'deDE',
        messages: {
            deDE,
            enUS
        }
    }
})