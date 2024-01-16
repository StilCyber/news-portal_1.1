import { StateSchema } from "app/providers/StoreProvider"
import { getCounter } from "./getCounter"

describe('getCounter', () => {
    test('should return counter value', () => {
        const state: StateSchema = {
            counter: {value: 10},
            user: undefined
        }
        expect(getCounter(state as StateSchema)).toEqual({value: 10})
    })
})