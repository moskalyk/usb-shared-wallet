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
export interface CopyServiceDef {
    copy: (callParams: CallParams$$<null>) => string[] | Promise<string[]>;
}
export function registerCopyService(service: CopyServiceDef): void;
export function registerCopyService(serviceId: string, service: CopyServiceDef): void;
export function registerCopyService(peer: IFluenceClient$$, service: CopyServiceDef): void;
export function registerCopyService(peer: IFluenceClient$$, serviceId: string, service: CopyServiceDef): void;
export function registerCopyService(...args: any[]) {
    registerService$$(
        args,
        {
    "defaultServiceId": "copyService",
    "functions": {
        "fields": {
            "copy": {
                "domain": {
                    "tag": "nil"
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
            }
        },
        "tag": "labeledProduct"
    }
}
    );
}

export interface RoutingServiceDef {
    list: (callParams: CallParams$$<null>) => string[] | Promise<string[]>;
    register: (peer: string, callParams: CallParams$$<'peer'>) => boolean | Promise<boolean>;
}
export function registerRoutingService(service: RoutingServiceDef): void;
export function registerRoutingService(serviceId: string, service: RoutingServiceDef): void;
export function registerRoutingService(peer: IFluenceClient$$, service: RoutingServiceDef): void;
export function registerRoutingService(peer: IFluenceClient$$, serviceId: string, service: RoutingServiceDef): void;
export function registerRoutingService(...args: any[]) {
    registerService$$(
        args,
        {
    "defaultServiceId": "registryService",
    "functions": {
        "fields": {
            "list": {
                "domain": {
                    "tag": "nil"
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
            "register": {
                "domain": {
                    "fields": {
                        "peer": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "bool",
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

export interface FileServiceDef {
    connect: (blob: number[], callParams: CallParams$$<'blob'>) => boolean | Promise<boolean>;
    serve: (callParams: CallParams$$<null>) => { name: string; path: string; }[] | Promise<{ name: string; path: string; }[]>;
}
export function registerFileService(service: FileServiceDef): void;
export function registerFileService(serviceId: string, service: FileServiceDef): void;
export function registerFileService(peer: IFluenceClient$$, service: FileServiceDef): void;
export function registerFileService(peer: IFluenceClient$$, serviceId: string, service: FileServiceDef): void;
export function registerFileService(...args: any[]) {
    registerService$$(
        args,
        {
    "defaultServiceId": "fileService",
    "functions": {
        "fields": {
            "connect": {
                "domain": {
                    "fields": {
                        "blob": {
                            "type": {
                                "name": "i32",
                                "tag": "scalar"
                            },
                            "tag": "array"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "bool",
                            "tag": "scalar"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            },
            "serve": {
                "domain": {
                    "tag": "nil"
                },
                "codomain": {
                    "items": [
                        {
                            "type": {
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
                            },
                            "tag": "array"
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

export interface WonderServiceDef {
    message: (payload: { author: string; lng: number; color: string; date: string; message: string; lat: number; wonderOS: number; }, callParams: CallParams$$<'payload'>) => boolean | Promise<boolean>;
    online: (callParams: CallParams$$<null>) => boolean | Promise<boolean>;
    typing: (essence: number, state: boolean, callParams: CallParams$$<'essence' | 'state'>) => boolean | Promise<boolean>;
}
export function registerWonderService(service: WonderServiceDef): void;
export function registerWonderService(serviceId: string, service: WonderServiceDef): void;
export function registerWonderService(peer: IFluenceClient$$, service: WonderServiceDef): void;
export function registerWonderService(peer: IFluenceClient$$, serviceId: string, service: WonderServiceDef): void;
export function registerWonderService(...args: any[]) {
    registerService$$(
        args,
        {
    "defaultServiceId": "wonderService",
    "functions": {
        "fields": {
            "message": {
                "domain": {
                    "fields": {
                        "payload": {
                            "name": "ChatPayload",
                            "fields": {
                                "author": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "lng": {
                                    "name": "i32",
                                    "tag": "scalar"
                                },
                                "color": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "date": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "message": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "lat": {
                                    "name": "i32",
                                    "tag": "scalar"
                                },
                                "wonderOS": {
                                    "name": "u8",
                                    "tag": "scalar"
                                }
                            },
                            "tag": "struct"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "bool",
                            "tag": "scalar"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            },
            "online": {
                "domain": {
                    "tag": "nil"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "bool",
                            "tag": "scalar"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            },
            "typing": {
                "domain": {
                    "fields": {
                        "essence": {
                            "name": "i32",
                            "tag": "scalar"
                        },
                        "state": {
                            "name": "bool",
                            "tag": "scalar"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "bool",
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

export interface ImageProccessorServiceDef {
    process: (blob: number[], callParams: CallParams$$<'blob'>) => boolean | Promise<boolean>;
}
export function registerImageProccessorService(service: ImageProccessorServiceDef): void;
export function registerImageProccessorService(serviceId: string, service: ImageProccessorServiceDef): void;
export function registerImageProccessorService(peer: IFluenceClient$$, service: ImageProccessorServiceDef): void;
export function registerImageProccessorService(peer: IFluenceClient$$, serviceId: string, service: ImageProccessorServiceDef): void;
export function registerImageProccessorService(...args: any[]) {
    registerService$$(
        args,
        {
    "defaultServiceId": "imageProcessorService",
    "functions": {
        "fields": {
            "process": {
                "domain": {
                    "fields": {
                        "blob": {
                            "type": {
                                "name": "i32",
                                "tag": "scalar"
                            },
                            "tag": "array"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "bool",
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
export const register_script = `
(xor
 (seq
  (seq
   (seq
    (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
    (call %init_peer_id% ("getDataSrv" "peer") [] -peer-arg-)
   )
   (xor
    (seq
     (seq
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
      (call -peer-arg- ("registryService" "register") [%init_peer_id%] ret)
     )
     (new $-ephemeral-stream-
      (new #-ephemeral-canon-
       (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
      )
     )
    )
    (seq
     (seq
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
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
  (call %init_peer_id% ("callbackSrv" "response") [ret])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export function register(
    peer: string,
    config?: {ttl?: number}
): Promise<boolean>;

export function register(
    peer: IFluenceClient$$,
    peer: string,
    config?: {ttl?: number}
): Promise<boolean>;

export function register(...args: any[]) {
    return callFunction$$(
        args,
        {
    "functionName": "register",
    "arrow": {
        "domain": {
            "fields": {
                "peer": {
                    "name": "string",
                    "tag": "scalar"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "bool",
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
        register_script
    );
}

export const connectSquare_script = `
(xor
 (seq
  (seq
   (seq
    (seq
     (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
     (call %init_peer_id% ("getDataSrv" "peer") [] -peer-arg-)
    )
    (call %init_peer_id% ("getDataSrv" "blob") [] -blob-arg-)
   )
   (xor
    (seq
     (seq
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
      (call -peer-arg- ("fileService" "connect") [-blob-arg-] ret)
     )
     (new $-ephemeral-stream-
      (new #-ephemeral-canon-
       (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
      )
     )
    )
    (seq
     (seq
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
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
  (call %init_peer_id% ("callbackSrv" "response") [ret])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export function connectSquare(
    peer: string,
    blob: number[],
    config?: {ttl?: number}
): Promise<boolean>;

export function connectSquare(
    peer: IFluenceClient$$,
    peer: string,
    blob: number[],
    config?: {ttl?: number}
): Promise<boolean>;

export function connectSquare(...args: any[]) {
    return callFunction$$(
        args,
        {
    "functionName": "connectSquare",
    "arrow": {
        "domain": {
            "fields": {
                "peer": {
                    "name": "string",
                    "tag": "scalar"
                },
                "blob": {
                    "type": {
                        "name": "i32",
                        "tag": "scalar"
                    },
                    "tag": "array"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "bool",
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
        connectSquare_script
    );
}

export const isOnline_script = `
(xor
 (seq
  (seq
   (seq
    (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
    (call %init_peer_id% ("getDataSrv" "peer") [] -peer-arg-)
   )
   (xor
    (seq
     (seq
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
      (call -peer-arg- ("wonderService" "online") [] ret)
     )
     (new $-ephemeral-stream-
      (new #-ephemeral-canon-
       (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
      )
     )
    )
    (seq
     (seq
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
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
  (call %init_peer_id% ("callbackSrv" "response") [ret])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export function isOnline(
    peer: string,
    config?: {ttl?: number}
): Promise<boolean>;

export function isOnline(
    peer: IFluenceClient$$,
    peer: string,
    config?: {ttl?: number}
): Promise<boolean>;

export function isOnline(...args: any[]) {
    return callFunction$$(
        args,
        {
    "functionName": "isOnline",
    "arrow": {
        "domain": {
            "fields": {
                "peer": {
                    "name": "string",
                    "tag": "scalar"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "bool",
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
        isOnline_script
    );
}

export const serveDirectory_script = `
(xor
 (seq
  (seq
   (seq
    (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
    (call %init_peer_id% ("getDataSrv" "peer") [] -peer-arg-)
   )
   (xor
    (seq
     (seq
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
      (call -peer-arg- ("fileService" "serve") [] ret)
     )
     (new $-ephemeral-stream-
      (new #-ephemeral-canon-
       (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
      )
     )
    )
    (seq
     (seq
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
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
  (call %init_peer_id% ("callbackSrv" "response") [ret])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export function serveDirectory(
    peer: string,
    config?: {ttl?: number}
): Promise<{ name: string; path: string; }[]>;

export function serveDirectory(
    peer: IFluenceClient$$,
    peer: string,
    config?: {ttl?: number}
): Promise<{ name: string; path: string; }[]>;

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
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "type": {
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
        serveDirectory_script
    );
}

export const forward_script = `
(xor
 (seq
  (seq
   (seq
    (seq
     (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
     (call %init_peer_id% ("getDataSrv" "peer") [] -peer-arg-)
    )
    (call %init_peer_id% ("getDataSrv" "payload") [] -payload-arg-)
   )
   (xor
    (seq
     (seq
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
      (call -peer-arg- ("wonderService" "message") [-payload-arg-] ret)
     )
     (new $-ephemeral-stream-
      (new #-ephemeral-canon-
       (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
      )
     )
    )
    (seq
     (seq
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
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
  (call %init_peer_id% ("callbackSrv" "response") [ret])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type ForwardArgPayload = { author: string; lng: number; color: string; date: string; message: string; lat: number; wonderOS: number; }

export function forward(
    peer: string,
    payload: ForwardArgPayload,
    config?: {ttl?: number}
): Promise<boolean>;

export function forward(
    peer: IFluenceClient$$,
    peer: string,
    payload: ForwardArgPayload,
    config?: {ttl?: number}
): Promise<boolean>;

export function forward(...args: any[]) {
    return callFunction$$(
        args,
        {
    "functionName": "forward",
    "arrow": {
        "domain": {
            "fields": {
                "peer": {
                    "name": "string",
                    "tag": "scalar"
                },
                "payload": {
                    "name": "ChatPayload",
                    "fields": {
                        "author": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "lng": {
                            "name": "i32",
                            "tag": "scalar"
                        },
                        "color": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "date": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "message": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "lat": {
                            "name": "i32",
                            "tag": "scalar"
                        },
                        "wonderOS": {
                            "name": "u8",
                            "tag": "scalar"
                        }
                    },
                    "tag": "struct"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "bool",
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
        forward_script
    );
}

export const copy_script = `
(xor
 (seq
  (seq
   (seq
    (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
    (call %init_peer_id% ("getDataSrv" "peer") [] -peer-arg-)
   )
   (xor
    (seq
     (seq
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
      (call -peer-arg- ("copyService" "copy") [] ret)
     )
     (new $-ephemeral-stream-
      (new #-ephemeral-canon-
       (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
      )
     )
    )
    (seq
     (seq
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
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
  (call %init_peer_id% ("callbackSrv" "response") [ret])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export function copy(
    peer: string,
    config?: {ttl?: number}
): Promise<string[]>;

export function copy(
    peer: IFluenceClient$$,
    peer: string,
    config?: {ttl?: number}
): Promise<string[]>;

export function copy(...args: any[]) {
    return callFunction$$(
        args,
        {
    "functionName": "copy",
    "arrow": {
        "domain": {
            "fields": {
                "peer": {
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
        copy_script
    );
}

export const processImage_script = `
(xor
 (seq
  (seq
   (seq
    (seq
     (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
     (call %init_peer_id% ("getDataSrv" "peer") [] -peer-arg-)
    )
    (call %init_peer_id% ("getDataSrv" "blob") [] -blob-arg-)
   )
   (xor
    (seq
     (seq
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
      (call -peer-arg- ("imageProcessorService" "process") [-blob-arg-] ret)
     )
     (new $-ephemeral-stream-
      (new #-ephemeral-canon-
       (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
      )
     )
    )
    (seq
     (seq
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
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
  (call %init_peer_id% ("callbackSrv" "response") [ret])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export function processImage(
    peer: string,
    blob: number[],
    config?: {ttl?: number}
): Promise<boolean>;

export function processImage(
    peer: IFluenceClient$$,
    peer: string,
    blob: number[],
    config?: {ttl?: number}
): Promise<boolean>;

export function processImage(...args: any[]) {
    return callFunction$$(
        args,
        {
    "functionName": "processImage",
    "arrow": {
        "domain": {
            "fields": {
                "peer": {
                    "name": "string",
                    "tag": "scalar"
                },
                "blob": {
                    "type": {
                        "name": "i32",
                        "tag": "scalar"
                    },
                    "tag": "array"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "bool",
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
        processImage_script
    );
}

export const isTyping_script = `
(xor
 (seq
  (seq
   (seq
    (seq
     (seq
      (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
      (call %init_peer_id% ("getDataSrv" "peer") [] -peer-arg-)
     )
     (call %init_peer_id% ("getDataSrv" "essence") [] -essence-arg-)
    )
    (call %init_peer_id% ("getDataSrv" "state") [] -state-arg-)
   )
   (xor
    (seq
     (seq
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
      (call -peer-arg- ("wonderService" "typing") [-essence-arg- -state-arg-] ret)
     )
     (new $-ephemeral-stream-
      (new #-ephemeral-canon-
       (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
      )
     )
    )
    (seq
     (seq
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
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
  (call %init_peer_id% ("callbackSrv" "response") [ret])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export function isTyping(
    peer: string,
    essence: number,
    state: boolean,
    config?: {ttl?: number}
): Promise<boolean>;

export function isTyping(
    peer: IFluenceClient$$,
    peer: string,
    essence: number,
    state: boolean,
    config?: {ttl?: number}
): Promise<boolean>;

export function isTyping(...args: any[]) {
    return callFunction$$(
        args,
        {
    "functionName": "isTyping",
    "arrow": {
        "domain": {
            "fields": {
                "peer": {
                    "name": "string",
                    "tag": "scalar"
                },
                "essence": {
                    "name": "i32",
                    "tag": "scalar"
                },
                "state": {
                    "name": "bool",
                    "tag": "scalar"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "bool",
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
        isTyping_script
    );
}

export const list_script = `
(xor
 (seq
  (seq
   (seq
    (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
    (call %init_peer_id% ("getDataSrv" "peer") [] -peer-arg-)
   )
   (xor
    (seq
     (seq
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
      (call -peer-arg- ("registryService" "list") [] ret)
     )
     (new $-ephemeral-stream-
      (new #-ephemeral-canon-
       (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
      )
     )
    )
    (seq
     (seq
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
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
  (call %init_peer_id% ("callbackSrv" "response") [ret])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export function list(
    peer: string,
    config?: {ttl?: number}
): Promise<string[]>;

export function list(
    peer: IFluenceClient$$,
    peer: string,
    config?: {ttl?: number}
): Promise<string[]>;

export function list(...args: any[]) {
    return callFunction$$(
        args,
        {
    "functionName": "list",
    "arrow": {
        "domain": {
            "fields": {
                "peer": {
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
        list_script
    );
}
