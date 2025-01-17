// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

Object.defineProperty(window, "localStorage", {
  value: (function() {
    var store: any = {};
    return {
      getItem: function(key: string) {
        return store[key];
      },
      setItem: function(key: string, value: string) {
        store[key] = value.toString();
      },
      clear: function() {
        store = {};
      }
    };
  })()
});