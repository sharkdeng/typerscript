import {expect} from "chai"
import {describe, it} from "mocha"


const add = (a:number, b:number) => {
    return a+b
}

describe("test math", function() {
    it("add()", function(){
        expect(add(1, 2)).to.equal(3)
    })
})