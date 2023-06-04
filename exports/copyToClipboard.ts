type ICopyToClipboard = ((val: string) => void) | undefined
export const copyToClipboard = globalThis.exports['fivem-copy-to-clipboard'].copyToClipboard as ICopyToClipboard
