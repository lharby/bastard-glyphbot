import { expect, test, describe } from "bun:test";
import app from "../../src/app";

describe('getApp', () => {
    test('GET /', async () => {
        const res = await app.request('/');
        console.log(res);
        expect(res.status).toEqual(200);
    });
});