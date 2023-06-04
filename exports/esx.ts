import type { ESXClient } from 'fivem-esx-js/client/esx_client'
import type { ESXServer } from 'fivem-esx-js/server/esx_server'

const esx = globalThis.exports.es_extended.getSharedObject()
export const ESX: ESXClient | undefined = esx
export const ESX_Client: ESXClient | undefined = esx
export const ESX_Server: ESXServer | undefined = esx
