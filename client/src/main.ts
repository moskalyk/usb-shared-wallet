/* eslint-disable */
// @ts-nocheck
/**
 *
 * This file is generated using:
 * @fluencelabs/aqua-api version: 0.12.0
 * @fluencelabs/aqua-to-js version: 0.1.0
 * If you find any bugs in generated AIR, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * If you find any bugs in generated JS/TS, please write an issue on GitHub: https://github.com/fluencelabs/js-client/issues
 *
 */
import type { IFluenceClient as IFluenceClient$$, CallParams as CallParams$$ } from '@fluencelabs/js-client';

import {
    v5_callFunction as callFunction$$,
    v5_registerService as registerService$$,
} from '@fluencelabs/js-client';

// Services
export interface ShamirServiceDef {
    retrieveShare: (callParams: CallParams$$<null>) => string | Promise<string>;
}
export function registerShamirService(service: ShamirServiceDef): void;
export function registerShamirService(serviceId: string, service: ShamirServiceDef): void;
export function registerShamirService(peer: IFluenceClient$$, service: ShamirServiceDef): void;
export function registerShamirService(peer: IFluenceClient$$, serviceId: string, service: ShamirServiceDef): void;
export function registerShamirService(...args: any[]) {
    registerService$$(
        args,
        {
    "defaultServiceId": "shamirService",
    "functions": {
        "fields": {
            "retrieveShare": {
                "domain": {
                    "tag": "nil"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "string",
                            "tag": "scalar"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            }
        },
        "tag": "labeledProduct"
    }
}
    );
}


// Functions
export const serveDirectory_script = `
(xor
 (seq
  (seq
   (seq
    (seq
     (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
     (call %init_peer_id% ("getDataSrv" "peer") [] -peer-arg-)
    )
    (call %init_peer_id% ("getDataSrv" "relay_id") [] -relay_id-arg-)
   )
   (xor
    (seq
     (seq
      (seq
       (seq
        (new $-ephemeral-stream-
         (new #-ephemeral-canon-
          (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
         )
        )
        (new $-ephemeral-stream-
         (new #-ephemeral-canon-
          (canon -relay_id-arg- $-ephemeral-stream-  #-ephemeral-canon-)
         )
        )
       )
       (call -peer-arg- ("fileService" "serve") [] ret)
      )
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay_id-arg- $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
     )
     (new $-ephemeral-stream-
      (new #-ephemeral-canon-
       (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
      )
     )
    )
    (seq
     (seq
      (seq
       (new $-ephemeral-stream-
        (new #-ephemeral-canon-
         (canon -relay_id-arg- $-ephemeral-stream-  #-ephemeral-canon-)
        )
       )
       (new $-ephemeral-stream-
        (new #-ephemeral-canon-
         (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
        )
       )
      )
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
     )
     (fail :error:)
    )
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [ret.$.[0]])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type ServeDirectoryResult = { name: string; path: string; }

export function serveDirectory(
    peer: string,
    relay_id: string,
    config?: {ttl?: number}
): Promise<ServeDirectoryResult>;

export function serveDirectory(
    peer: IFluenceClient$$,
    peer: string,
    relay_id: string,
    config?: {ttl?: number}
): Promise<ServeDirectoryResult>;

export function serveDirectory(...args: any[]) {
    return callFunction$$(
        args,
        {
    "functionName": "serveDirectory",
    "arrow": {
        "domain": {
            "fields": {
                "peer": {
                    "name": "string",
                    "tag": "scalar"
                },
                "relay_id": {
                    "name": "string",
                    "tag": "scalar"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "File",
                    "fields": {
                        "name": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "path": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "struct"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        serveDirectory_script
    );
}

export const retrieveShares_script = `
(xor
 (seq
  (seq
   (seq
    (seq
     (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
     (call %init_peer_id% ("getDataSrv" "peers") [] -peers-arg-)
    )
    (call %init_peer_id% ("getDataSrv" "relay_id") [] -relay_id-arg-)
   )
   (new $shares
    (seq
     (seq
      (xor
       (seq
        (seq
         (seq
          (seq
           (seq
            (new $-ephemeral-stream-
             (new #-ephemeral-canon-
              (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
             )
            )
            (new $-ephemeral-stream-
             (new #-ephemeral-canon-
              (canon -relay_id-arg- $-ephemeral-stream-  #-ephemeral-canon-)
             )
            )
           )
           (call -peers-arg-.$.[0] ("shamirService" "retrieveShare") [] ret)
          )
          (ap ret $shares)
         )
         (new $-ephemeral-stream-
          (new #-ephemeral-canon-
           (canon -relay_id-arg- $-ephemeral-stream-  #-ephemeral-canon-)
          )
         )
        )
        (new $-ephemeral-stream-
         (new #-ephemeral-canon-
          (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
         )
        )
       )
       (seq
        (seq
         (seq
          (new $-ephemeral-stream-
           (new #-ephemeral-canon-
            (canon -relay_id-arg- $-ephemeral-stream-  #-ephemeral-canon-)
           )
          )
          (new $-ephemeral-stream-
           (new #-ephemeral-canon-
            (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
           )
          )
         )
         (new $-ephemeral-stream-
          (new #-ephemeral-canon-
           (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
          )
         )
        )
        (fail :error:)
       )
      )
      (canon %init_peer_id% $shares  #-shares-fix-0)
     )
     (ap #-shares-fix-0 -shares-flat-0)
    )
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [-shares-flat-0])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export function retrieveShares(
    peers: string[],
    relay_id: string,
    config?: {ttl?: number}
): Promise<string[]>;

export function retrieveShares(
    peer: IFluenceClient$$,
    peers: string[],
    relay_id: string,
    config?: {ttl?: number}
): Promise<string[]>;

export function retrieveShares(...args: any[]) {
    return callFunction$$(
        args,
        {
    "functionName": "retrieveShares",
    "arrow": {
        "domain": {
            "fields": {
                "peers": {
                    "type": {
                        "name": "string",
                        "tag": "scalar"
                    },
                    "tag": "array"
                },
                "relay_id": {
                    "name": "string",
                    "tag": "scalar"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "type": {
                        "name": "string",
                        "tag": "scalar"
                    },
                    "tag": "array"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        retrieveShares_script
    );
}

export const genWallet_script = `
(xor
 (seq
  (seq
   (seq
    (seq
     (seq
      (seq
       (seq
        (seq
         (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
         (call %init_peer_id% ("getDataSrv" "priv_key") [] -priv_key-arg-)
        )
        (new $option-inline
         (seq
          (seq
           (seq
            (new $array-inline
             (seq
              (seq
               (new %SpellLocation_obj_map
                (seq
                 (seq
                  (seq
                   (ap ("hostId" "12D3KooWR5g7X5twdqfBhMFTVJ2PG6k9zCqfri8kXNMZMzD8x8av") %SpellLocation_obj_map)
                   (ap ("spellId" "1e1e7eb7-f6d3-4809-b0ff-d82e07aba860") %SpellLocation_obj_map)
                  )
                  (ap ("workerId" "12D3KooWBiB5RuEc3FgJtCpS4RkiPzVU79HGnrpF8gnea1cfshGV") %SpellLocation_obj_map)
                 )
                 (canon %init_peer_id% %SpellLocation_obj_map  SpellLocation_obj)
                )
               )
               (ap SpellLocation_obj $array-inline)
              )
              (canon %init_peer_id% $array-inline  #array-inline-0)
             )
            )
            (new %Host_obj_map
             (seq
              (seq
               (seq
                (seq
                 (seq
                  (ap ("definition" "bafkreietlro65jn5ibhkptrga2qlkxxhcrvy44tu2iysf2ftwqc6xu3chm") %Host_obj_map)
                  (ap ("dummyDealId" "defaultWorker_12D3KooWKa3zzPDmbFnA7LAzrD68P3P9mgFjX4Xua7UeiiAbKudb_20819847233384992") %Host_obj_map)
                 )
                 (ap ("installationSpells" #array-inline-0) %Host_obj_map)
                )
                (ap ("relayId" "12D3KooWR5g7X5twdqfBhMFTVJ2PG6k9zCqfri8kXNMZMzD8x8av") %Host_obj_map)
               )
               (ap ("timestamp" "2024-02-08T02:01:08.521Z") %Host_obj_map)
              )
              (canon %init_peer_id% %Host_obj_map  Host_obj)
             )
            )
           )
           (xor
            (ap Host_obj $option-inline)
            (null)
           )
          )
          (canon %init_peer_id% $option-inline  #option-inline-0)
         )
        )
       )
       (new %Hosts_obj_map
        (seq
         (ap ("defaultWorker" #option-inline-0) %Hosts_obj_map)
         (canon %init_peer_id% %Hosts_obj_map  Hosts_obj)
        )
       )
      )
      (ap Hosts_obj.$.defaultWorker Hosts_obj_flat)
     )
     (ap Hosts_obj_flat.$.[0].installationSpells Hosts_obj_flat_flat)
    )
    (fold Hosts_obj_flat_flat w-0
     (seq
      (xor
       (seq
        (seq
         (seq
          (seq
           (seq
            (new $-ephemeral-stream-
             (new #-ephemeral-canon-
              (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
             )
            )
            (new $-ephemeral-stream-
             (new #-ephemeral-canon-
              (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
             )
            )
           )
           (call w-0.$.workerId ("shamirShared" "generate") [-priv_key-arg-] ret)
          )
          (ap ret $receipt)
         )
         (new $-ephemeral-stream-
          (new #-ephemeral-canon-
           (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
          )
         )
        )
        (new $-ephemeral-stream-
         (new #-ephemeral-canon-
          (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
         )
        )
       )
       (seq
        (seq
         (seq
          (new $-ephemeral-stream-
           (new #-ephemeral-canon-
            (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
           )
          )
          (new $-ephemeral-stream-
           (new #-ephemeral-canon-
            (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
           )
          )
         )
         (new $-ephemeral-stream-
          (new #-ephemeral-canon-
           (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
          )
         )
        )
        (fail :error:)
       )
      )
      (next w-0)
     )
    )
   )
   (canon %init_peer_id% $receipt  #receipt_canon)
  )
  (call %init_peer_id% ("callbackSrv" "response") [#receipt_canon])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export function genWallet(
    priv_key: string,
    config?: {ttl?: number}
): Promise<string[][]>;

export function genWallet(
    peer: IFluenceClient$$,
    priv_key: string,
    config?: {ttl?: number}
): Promise<string[][]>;

export function genWallet(...args: any[]) {
    return callFunction$$(
        args,
        {
    "functionName": "genWallet",
    "arrow": {
        "domain": {
            "fields": {
                "priv_key": {
                    "name": "string",
                    "tag": "scalar"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "type": {
                        "type": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "tag": "array"
                    },
                    "tag": "array"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        genWallet_script
    );
}

export const helloWorld_script = `
(xor
 (seq
  (seq
   (seq
    (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
    (call %init_peer_id% ("getDataSrv" "name") [] -name-arg-)
   )
   (call %init_peer_id% ("op" "concat_strings") ["Hello, " -name-arg-] ret)
  )
  (call %init_peer_id% ("callbackSrv" "response") [ret])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export function helloWorld(
    name: string,
    config?: {ttl?: number}
): Promise<string>;

export function helloWorld(
    peer: IFluenceClient$$,
    name: string,
    config?: {ttl?: number}
): Promise<string>;

export function helloWorld(...args: any[]) {
    return callFunction$$(
        args,
        {
    "functionName": "helloWorld",
    "arrow": {
        "domain": {
            "fields": {
                "name": {
                    "name": "string",
                    "tag": "scalar"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "string",
                    "tag": "scalar"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        helloWorld_script
    );
}

export const openWallet_script = `
(xor
 (seq
  (seq
   (seq
    (seq
     (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
     (call %init_peer_id% ("getDataSrv" "peers") [] -peers-arg-)
    )
    (call %init_peer_id% ("getDataSrv" "relay_id") [] -relay_id-arg-)
   )
   (new $receipt
    (new $shares
     (seq
      (seq
       (seq
        (seq
         (seq
          (seq
           (seq
            (new $option-inline
             (seq
              (seq
               (seq
                (new $array-inline
                 (seq
                  (seq
                   (new %SpellLocation_obj_map
                    (seq
                     (seq
                      (seq
                       (ap ("hostId" "12D3KooWR5g7X5twdqfBhMFTVJ2PG6k9zCqfri8kXNMZMzD8x8av") %SpellLocation_obj_map)
                       (ap ("spellId" "1e1e7eb7-f6d3-4809-b0ff-d82e07aba860") %SpellLocation_obj_map)
                      )
                      (ap ("workerId" "12D3KooWBiB5RuEc3FgJtCpS4RkiPzVU79HGnrpF8gnea1cfshGV") %SpellLocation_obj_map)
                     )
                     (canon %init_peer_id% %SpellLocation_obj_map  SpellLocation_obj)
                    )
                   )
                   (ap SpellLocation_obj $array-inline)
                  )
                  (canon %init_peer_id% $array-inline  #array-inline-0)
                 )
                )
                (new %Host_obj_map
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (ap ("definition" "bafkreietlro65jn5ibhkptrga2qlkxxhcrvy44tu2iysf2ftwqc6xu3chm") %Host_obj_map)
                      (ap ("dummyDealId" "defaultWorker_12D3KooWKa3zzPDmbFnA7LAzrD68P3P9mgFjX4Xua7UeiiAbKudb_20819847233384992") %Host_obj_map)
                     )
                     (ap ("installationSpells" #array-inline-0) %Host_obj_map)
                    )
                    (ap ("relayId" "12D3KooWR5g7X5twdqfBhMFTVJ2PG6k9zCqfri8kXNMZMzD8x8av") %Host_obj_map)
                   )
                   (ap ("timestamp" "2024-02-08T02:01:08.521Z") %Host_obj_map)
                  )
                  (canon %init_peer_id% %Host_obj_map  Host_obj)
                 )
                )
               )
               (xor
                (ap Host_obj $option-inline)
                (null)
               )
              )
              (canon %init_peer_id% $option-inline  #option-inline-0)
             )
            )
            (new %Hosts_obj_map
             (seq
              (ap ("defaultWorker" #option-inline-0) %Hosts_obj_map)
              (canon %init_peer_id% %Hosts_obj_map  Hosts_obj)
             )
            )
           )
           (ap Hosts_obj.$.defaultWorker Hosts_obj_flat)
          )
          (ap Hosts_obj_flat.$.[0].installationSpells Hosts_obj_flat_flat)
         )
         (fold -peers-arg- peer-0
          (seq
           (seq
            (xor
             (seq
              (seq
               (seq
                (seq
                 (new $-ephemeral-stream-
                  (new #-ephemeral-canon-
                   (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                  )
                 )
                 (new $-ephemeral-stream-
                  (new #-ephemeral-canon-
                   (canon -relay_id-arg- $-ephemeral-stream-  #-ephemeral-canon-)
                  )
                 )
                )
                (call peer-0 ("fileService" "serve") [] ret)
               )
               (new $-ephemeral-stream-
                (new #-ephemeral-canon-
                 (canon -relay_id-arg- $-ephemeral-stream-  #-ephemeral-canon-)
                )
               )
              )
              (new $-ephemeral-stream-
               (new #-ephemeral-canon-
                (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
               )
              )
             )
             (seq
              (seq
               (seq
                (new $-ephemeral-stream-
                 (new #-ephemeral-canon-
                  (canon -relay_id-arg- $-ephemeral-stream-  #-ephemeral-canon-)
                 )
                )
                (new $-ephemeral-stream-
                 (new #-ephemeral-canon-
                  (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                 )
                )
               )
               (new $-ephemeral-stream-
                (new #-ephemeral-canon-
                 (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
                )
               )
              )
              (fail :error:)
             )
            )
            (ap ret.$.[0].path $shares)
           )
           (next peer-0)
          )
         )
        )
        (fold Hosts_obj_flat_flat w-0
         (seq
          (xor
           (seq
            (seq
             (seq
              (seq
               (seq
                (seq
                 (new $-ephemeral-stream-
                  (new #-ephemeral-canon-
                   (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                  )
                 )
                 (new $-ephemeral-stream-
                  (new #-ephemeral-canon-
                   (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
                  )
                 )
                )
                (canon w-0.$.workerId $shares  #shares_canon)
               )
               (call w-0.$.workerId ("shamirShared" "openWallet") [#shares_canon] ret-0)
              )
              (ap ret-0 $receipt)
             )
             (new $-ephemeral-stream-
              (new #-ephemeral-canon-
               (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
              )
             )
            )
            (new $-ephemeral-stream-
             (new #-ephemeral-canon-
              (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
             )
            )
           )
           (seq
            (seq
             (seq
              (new $-ephemeral-stream-
               (new #-ephemeral-canon-
                (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
               )
              )
              (new $-ephemeral-stream-
               (new #-ephemeral-canon-
                (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
               )
              )
             )
             (new $-ephemeral-stream-
              (new #-ephemeral-canon-
               (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
              )
             )
            )
            (fail :error:)
           )
          )
          (next w-0)
         )
        )
       )
       (canon %init_peer_id% $shares  #-shares-fix-0)
      )
      (ap #-shares-fix-0 -shares-flat-0)
     )
    )
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [-shares-flat-0])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export function openWallet(
    peers: string[],
    relay_id: string,
    config?: {ttl?: number}
): Promise<string[]>;

export function openWallet(
    peer: IFluenceClient$$,
    peers: string[],
    relay_id: string,
    config?: {ttl?: number}
): Promise<string[]>;

export function openWallet(...args: any[]) {
    return callFunction$$(
        args,
        {
    "functionName": "openWallet",
    "arrow": {
        "domain": {
            "fields": {
                "peers": {
                    "type": {
                        "name": "string",
                        "tag": "scalar"
                    },
                    "tag": "array"
                },
                "relay_id": {
                    "name": "string",
                    "tag": "scalar"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "type": {
                        "name": "string",
                        "tag": "scalar"
                    },
                    "tag": "array"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        openWallet_script
    );
}
