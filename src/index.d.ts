export * from './constants';
export * from './interface';
export * from './byteProcessor/ByteProcessor';
export * from './config/Config';
export * from './config/interface';
export * from './signatureFactory/interface';
export * from './signatureFactory/SignatureFactory';
export * from './Seed';
export * from './dictionary';
export * from './parse';
import * as blake2b from './libs/blake2b';
import * as base64 from 'base64-js';
import { concatUint8Arrays } from './utils/concat';
export declare const libs: {
    base64: typeof base64;
    base58: {
        encode(buffer: import("./interface").TBuffer): string;
        decode(string: any): Uint8Array;
    };
    converters: {
        byteArrayToHexString: (bytes: any) => string;
        stringToByteArray: (str: any) => number[];
        hexStringToByteArray: (str: any) => any[];
        stringToHexString: (str: any) => any;
        hexStringToString: (hex: any) => any;
        checkBytesToIntInput: (bytes: any, numBytes: any, opt_startIndex: any) => any;
        byteArrayToSignedShort: (bytes: any, opt_startIndex: any) => any;
        byteArrayToSignedInt32: (bytes: any, opt_startIndex: any) => any;
        byteArrayToBigInteger: (bytes: any, opt_startIndex: any) => any;
        byteArrayToWordArray: (byteArray: any) => any;
        wordArrayToByteArray: (wordArray: any) => any[];
        wordArrayToByteArrayImpl: (wordArray: any, isFirstByteHasSign: any) => any[];
        byteArrayToString: (bytes: any, opt_startIndex?: any, length?: any) => string;
        byteArrayToShortArray: (byteArray: any) => number[];
        shortArrayToByteArray: (shortArray: any) => number[];
        shortArrayToHexString: (ary: any) => string;
        intToBytes_: (x: any, numBytes: any, unsignedMax: any, opt_bigEndian: any) => any[];
        int32ToBytes: (x: any, opt_bigEndian: any) => any[];
        int16ToBytes: (x: any, opt_bigEndian: any) => any[];
        wordArrayToByteArrayEx: (wordArray: any) => Uint8Array;
        byteArrayToWordArrayEx: (u8arr: any) => any;
    };
    axlsign: any;
    blake2b: typeof blake2b;
    secureRandom: {
        secureRandom: (count: any, options: any) => any;
        randomArray(byteCount: any): any;
        randomUint8Array(byteCount: any): any;
        randomBuffer(byteCount: any): any;
    };
    keccak256: any;
};
export declare const utils: {
    concatUint8Arrays: typeof concatUint8Arrays;
    convert: {
        booleanToBytes(input: boolean): number[];
        bytesToBoolean(bytes: Uint8Array): boolean;
        shortToByteArray(input: number): number[];
        bytesToByteArrayWithSize(input: import("./interface").TBuffer): number[];
        longToByteArray(input: number): number[];
        bigNumberToByteArray(input: any): number[];
        stringToByteArray(input: string | number): number[];
        stringToByteArrayWithSize(input: string | number): number[];
    };
    crypto: {
        buildTransactionSignature(dataBytes: Uint8Array, privateKey: string): string;
        isValidSignature(dataBytes: Uint8Array, signature: string, publicKey: string): boolean;
        buildTransactionId(dataBytes: Uint8Array): string;
        buildKeyPair(seed: string): import("./interface").IKeyPairBytes;
        isValidAddress(address: string): boolean;
        buildRawAddress(publicKeyBytes: Uint8Array): string;
        encryptSeed(seed: string, password: string, encryptionRounds?: number): string;
        decryptSeed(encryptedSeed: string, password: string, encryptionRounds?: number): string;
        generateRandomUint32Array(length: number): Uint32Array;
    };
};
