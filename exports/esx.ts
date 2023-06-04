import type { ESXClient } from 'fivem-esx-js/client/esx_client'
import type { ESXServer } from 'fivem-esx-js/server/esx_server'

interface ESXClientExtended extends ESXClient {
  Progressbar(message: string, length: number, options: any): unknown
}

const esx = globalThis.exports.es_extended.getSharedObject()
export const ESX: ESXClientExtended | undefined = esx
export const ESX_Client: ESXClientExtended | undefined = esx
export const ESX_Server: ESXServer | undefined = esx
