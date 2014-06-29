//var expect = require("chai").expect
var greet = require("greet")
describe('greet', function(){
  it("greet no drunk", function(){
      expect(greet(null,null)).to.eql("Hello World");
    });
  it("greet \"Heaven\" with drunk", function(){
      expect(greet("Heaven",true)).to.eql("Hello Heaven, you are so sexy");
    });
  it("greet \"Heaven\" no drunk", function(){
      expect(greet("Heaven",null)).to.eql("Hello Heaven");
    });
});
