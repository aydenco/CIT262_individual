import sayHello from "../utils/hello.ayden.mjs";
import assert from 'assert';

it("Hello World", ()=>{

    const hello = sayHello();

    assert.equal(hello,'hello');
    
});