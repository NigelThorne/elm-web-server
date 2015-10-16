## Inflect-JS

[![Build Status](https://travis-ci.org/sonnym/inflect-js.png?branch=master)](https://travis-ci.org/sonnym/inflect-js)

A clone of Ryan Schuft's [inflection-js](https://code.google.com/p/inflection-js/),
rewritten to take string arguments rather than monkey patching the core String class.

###### Inflect.pluralize(string, plural) == String
renders a singular English language noun into its plural form
normal results can be overridden by passing in an alternative

###### Inflect.singularize(string, singular) == String
renders a plural English language noun into its singular form
normal results can be overridden by passing in an alterative

###### Inflect.camelize(string, lowFirstLetter) == String
renders a lower case underscored word into camel case
the first letter of the result will be upper case unless you pass true
also translates "/" into "::" (underscore does the opposite)

###### Inflect.underscore(string) == String
renders a camel cased word into words seperated by underscores
also translates "::" back into "/" (camelize does the opposite)

###### Inflect.humanize(string, lowFirstLetter) == String
renders a lower case and underscored word into human readable form
defaults to making the first letter capitalized unless you pass true

###### Inflect.capitalize(string) == String
renders all characters to lower case and then makes the first upper

###### Inflect.dasherize(string) == String
renders all underbars and spaces as dashes

###### Inflect.titleize(string) == String
renders words into title casing (as for book titles)

###### Inflect.demodulize(string) == String
renders class names that are prepended by modules into just the class

###### Inflect.tableize(string) == String
renders camel cased singular words into their underscored plural form

###### Inflect.classify(string) == String
renders an underscored plural word into its camel cased singular form

###### Inflect.foreign_key(string, dropIdUbar) == String
renders a class name (camel cased singular noun) into a foreign key
defaults to seperating the class from the id with an underbar unless
you pass true

###### Inflect.ordinalize(string) == String
renders all numbers found in the string into their sequence like "22nd"
