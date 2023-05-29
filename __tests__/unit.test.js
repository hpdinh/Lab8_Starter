// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('000-000-0000 is a phone number', () => {
    expect(functions.isPhoneNumber("000-000-0000")).toBe(true);
  });
test('123-456-7890 is a phone number', () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});
test('123 is not a phone number', () => {
    expect(functions.isPhoneNumber("123")).toBe(false);
  });
test('character is not a phone number', () => {
    expect(functions.isPhoneNumber("character")).toBe(false);
});

test("hpdinh@ucsd.edu is a valid email", () => {
    expect(functions.isEmail("hpdinh@ucsd.edu")).toBe(true);
});
test("asdf@gmail.com is a valid email", () => {
    expect(functions.isEmail("asdf@gmail.com")).toBe(true);
});
test("hpdinh is not a valid email", () => {
    expect(functions.isEmail("hpdinh")).toBe(false);
});
test("123-456-7890 is not a valid email", () => {
    expect(functions.isEmail("123-456-7890")).toBe(false);
});

test("Password is a strong password", () => {
    expect(functions.isStrongPassword("Password")).toBe(true);
})

test("asdf is a strong password", () => {
    expect(functions.isStrongPassword("asdf")).toBe(true);
})

test("asdfghjkl123456789 is not a strong password because it is too long", () => {
    expect(functions.isStrongPassword("asdfghjkl123456789")).toBe(false);
})

test("1234 is not a strong password because it does not start with a letter", () => {
    expect(functions.isStrongPassword("1234")).toBe(false);
})

test("5/29/2023 is a valid date", () => {
    expect(functions.isDate("05/29/2023")).toBe(true);
})

test("06/03/2023 is a valid date", () => {
    expect(functions.isDate("06/03/2023")).toBe(true);
})

test("5 / 6 / 2003 is not a valid date", () => {
    expect(functions.isDate("1 / 1 / 1970")).toBe(false);
})

test("asdf", () => {
    expect(functions.isDate("asdf")).toBe(false);
})

test("#000000 is a valid hex color", () => {
    expect(functions.isHexColor("#000000")).toBe(true);
})

test("#FFF is a valid hex color", () => {
    expect(functions.isHexColor("#FFF")).toBe(true);
})

test("red is not a valid hex color", () => {
    expect(functions.isHexColor("red")).toBe(false);
})

test("111111111111", () => {
    expect(functions.isHexColor("111111111111")).toBe(false);
})