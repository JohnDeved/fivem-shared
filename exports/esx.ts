import type { ESXClient } from 'fivem-esx-js/client/esx_client'
import type { ESXServer } from 'fivem-esx-js/server/esx_server'

interface ESXClientExtended extends ESXClient {

}

interface ESXServerExtended extends ESXServer {

}

const esx = globalThis.exports.es_extended.getSharedObject()
export const ESX: ESXClientExtended = esx
export const ESX_Client: ESXClientExtended = esx
export const ESX_Server: ESXServerExtended = esx
