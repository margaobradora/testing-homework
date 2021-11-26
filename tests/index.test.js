/**
 * @jest-environment jsdom
 */

 let viewFromDataObject = require("../src/index.js");


 describe("view from data objects", () => {
   
   test("normal object", () => {
     let view = viewFromDataObject({
       username: 'someusername',
       message: 'Something I say',
       dateTime: '11/25/2021, 1:39:12 PM'
     })
     
     expect(view.outerHTML).toBe('<div class="post"><div class="username">someusername</div><div class="date-time">11/25/2021, 1:39:12 PM</div><p>Something I say</p></div>');
   });
   
   test("object without date", () => {
    expect(() => {
      viewFromDataObject({
        message: "Something I say",
        username: "someusername"
      });
    }).toThrow();
  });

  test("object without name", () => {
    expect(() => {
      viewFromDataObject({
        message: "Something I say",
        dateTime: '11/25/2021, 1:39:12 PM'
      });
    }).toThrow();
  });

  test("object without message", () => {
    expect(() => {
      viewFromDataObject({
        dateTime: '11/25/2021, 1:39:12 PM',
        username: "someusername"
      });
    }).toThrow();
  });

   test("not object", () => {
      expect(() => {
       viewFromDataObject("hello");
     }).toThrow();
   });
 
   test("number", () => {
    expect(() => {
     viewFromDataObject(2);
   }).toThrow();
 });

 test("empty", () => {
  expect(() => {
   viewFromDataObject();
 }).toThrow();
});
 }); 
 