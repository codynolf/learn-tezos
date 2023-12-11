import { counter } from './binding/counter'
import { Nat } from '@completium/archetype-ts-types'

const assert = require('assert');

describe('[COUNTER] Contract Deployment', async () => {
    it('Deploy counter', async () => {
        await counter.deploy({})
    });
})

describe('[COUNTER] Call Entry', async () => {
    it("Call 'increment'", async () => {
        await counter.increment({})

        const newCount = await counter.get_count()
        assert(newCount.equals(new Nat(3)))
    });
})