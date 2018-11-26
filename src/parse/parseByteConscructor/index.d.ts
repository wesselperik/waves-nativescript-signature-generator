export declare const getNumberFromBytes: (bytes: any, length: any, start?: number) => number;
export declare function toBoolean(name: string): (acc: any, bytes: any) => any;
export declare function toBigNumber(name: any): (acc: any, bytes: any) => any;
export declare function toNumber(name: any): (acc: any, bytes: any) => any;
export declare function toStringWithLength(name: any): (acc: any, bytes: any) => any;
export declare function toBase58(name: any): (acc: any, bytes: any) => any;
export declare function toAssetId(name: any): (acc: any, bytes: any) => any;
export declare function toAddressOrAlias(name: any): (acc: any, bytes: any) => any;
export declare function toNewAlias(name: any): (acc: any, bytes: any) => any;
export declare function toTransfers(name: any): (acc: any, bytes: any) => any;
export declare function toAccountScript(name: any): (acc: any, bytes: any) => any;
export declare function toData(name: any): (acc: any, bytes: any) => any;
export declare function parseConstructor(parts: Array<any>): (bytes: any) => any;
export interface IByteParser<T> {
    (bytes: Uint8Array, start: number): {
        shift: number;
        value: T;
    };
}
