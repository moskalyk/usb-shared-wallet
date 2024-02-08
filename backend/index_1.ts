
import {registerShamirService} from './main_y.js'
import {registerFileService} from './main.js'

import {Fluence, kras} from '@fluencelabs/js-client';

(async () => {
    try {
        const privateKeyArray = process.env.privkey!.split(',').map(Number).concat([
            133, 58, 155, 206, 90, 147, 127, 163,
            119, 66, 142, 188, 149, 35, 56, 48
        ]);
    
        const keyPair: any = {
            type: 'Ed25519',
            source: new Uint8Array(privateKeyArray)
        };

        await Fluence.connect(kras[4],
        {
            debug: { printParticleId: true },
            keyPair: keyPair
        });
    } catch (error) {
        console.error("Error connecting to Fluence network:", error);
    }

    registerShamirService({
        retrieveShare: async () => {
            console.log('share')
            return '01312205f00d4fa6cd4886dfffd2f97c82dd5f43aab8932161cc526682e3013f95043dca5efc15c63db61aef9802cd3d0e461d5692ffbcb31a220272787a6f825d835bc8b07989893eefc1e908fece27bd0af92d74e7e6f6af15ff6c9a8adf1e27cb26f60411a8f0f33de97950e6003141'
        }
    })

    registerFileService({
        serve: async () => {
            console.log('serving')
            return [{name: '', path: '025ac9a0e9d1a1e19882b679fb211fa9cfa34205af03ae439eca008c47c0b8f9dd043dca5efc15c63db61aef9802cd3d0e461d5692ffbcb31a220272787a6f825d835bc8b07989893eefc1e908fece27bd0af92d74e7e6f6af15ff6c9a8adf1e27cb26f60411a8f0f33de97950e6003141'}]
        },
        connect: (blob: any) => {
            return true
        }
    })

    console.log('connected ',(await Fluence.getClient().getPeerId()))
})()
