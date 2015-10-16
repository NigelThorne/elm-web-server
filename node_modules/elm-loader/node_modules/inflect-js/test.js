var Inflect = require("./index.js");

exports.test_pluralize_function = function(test) {
  test.equal("cows", Inflect.pluralize("cow", 0));
  test.equal("cows", Inflect.pluralize("cow", 2));
  test.done();
}

exports.test_singularize_function = function(test) {
  test.equal("cow", Inflect.singularize("cows"));
  test.done();
}

exports.test_camelize_function = function(test) {
  test.equal("FooBarBaz", Inflect.camelize("foo_bar_baz"));
  test.equal("fooBarBaz", Inflect.camelize("foo_bar_baz", true));
  test.done();
}

exports.test_underscore_function = function(test) {
  test.equal("foo_bar_baz", Inflect.underscore("FooBarBaz"));
  test.done();
}

exports.test_humanize_function = function(test) {
  test.equal("Foo bar", Inflect.humanize("foo_bar"));
  test.equal("foo bar", Inflect.humanize("foo_bar", true));
  test.done();
}

exports.test_capitalize_function = function(test) {
  test.equal("Foo", Inflect.capitalize("FOO"));
  test.equal("Foo", Inflect.capitalize("foo"));
  test.done();
}

exports.test_dasherize_function = function(test) {
  test.equal("foo-bar-baz", Inflect.dasherize("foo bar baz"));
  test.equal("foo-bar-baz", Inflect.dasherize("foo_bar_baz"));
  test.done();
}

exports.test_titleize_function = function(test) {
  test.equal("Dog and Cat", Inflect.titleize("dog and cat"));
  test.done();
}

exports.test_demodulize_function = function(test) {
  test.equal("Bar", Inflect.demodulize("Foo::Bar"));
  test.done();
}

exports.test_tableize_function = function(test) {
  test.equal("foo_bars", Inflect.tableize("FooBars"));
  test.done();
}

exports.test_classify_function = function(test) {
  test.equal("FooBar", Inflect.classify("foo_bars"));
  test.done();
}

exports.test_foreign_key_function = function(test) {
  test.equal("foo_bar_id", Inflect.foreign_key("FooBar"));
  test.done();
}

exports.test_ordinalize_function = function(test) {
  test.equal("1st", Inflect.ordinalize("1"));
  test.equal("2nd", Inflect.ordinalize("2"));
  test.equal("3rd", Inflect.ordinalize("3"));
  test.done();
}
