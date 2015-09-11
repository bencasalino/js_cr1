// test 1
describe("wordReplacer", function() {
  it("returns the word that was inputed by the user", function() {
    expect(wordReplace("taco", "taco", "burrito")).to.equal("burrito");
  });

// test 2
  it(" describes what the test does", function() {
    expect(wordReplace(" ", " ", " ")).to.equal(" ");
});

// test 3
it(" describes what the test does", function() {
  expect(wordReplace(" ", " ", " ")).to.equal(" ");
});

// test 4
it(" describes what the test does", function() {
  expect(wordReplace(" ", " ", " ")).to.equal(" ");
});

//stays at bottom to enclose describe function 
  });
