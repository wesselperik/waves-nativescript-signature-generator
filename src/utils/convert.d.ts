import { TBuffer } from '../interface';
import { BigNumber } from '@waves/data-entities';
declare const _default: {
    booleanToBytes(input: boolean): number[];
    bytesToBoolean(bytes: Uint8Array): boolean;
    shortToByteArray(input: number): number[];
    bytesToByteArrayWithSize(input: TBuffer): number[];
    longToByteArray(input: number): number[];
    bigNumberToByteArray(input: BigNumber): number[];
    stringToByteArray(input: string | number): number[];
    stringToByteArrayWithSize(input: string | number): number[];
};
export default _default;
