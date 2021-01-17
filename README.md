[![Netlify Status](https://api.netlify.com/api/v1/badges/91c1970c-ef38-44e0-95dd-d7ff054fe1de/deploy-status)](https://app.netlify.com/sites/react-i18n-app/deploys)

# React i18n App

## Introduction
![Demonstration](https://raw.githubusercontent.com/anthonyhastings/react-i18n-app/master/images/react-i18n-app-example.gif)

This repository showcases how react applications can make use of `react-intl` to aid with interationalization, and cater for numerous languages / regions. Examples contained within showcase:
- Dynamically loading i18n polyfills per locale as required.
- Adding simple translations.
- Interpolating translations with dynamic values.
- Handling translations containing plurals.
- Using syntax that allows for switch statement like translations.
- Displaying numeric values as currency.
- Converting timestamps into human-readable dates.

## Instructions
This project assumes you already have Node and Yarn installed. The steps are as follows:

1) Install node dependencies:
```shell
yarn install
```

2) Run the application:
```shell
yarn start
```

3) Use the form controls to change locales, and update dynamic values to refresh translations.

## Tooling
Translations can be extracted from source code along with their development ID's, default messages and translator descriptions. This generates a specially formatted template that can then be uploaded into Translation Management Systems (TMS) in order to have a professional translator localise the messages into a particular language. The completed file could then be downloaded and compiled back into a format that react-intl understands, as a locale specific file.

To illustrate this, two scripts have been added:
```shell
yarn run translations:extract
yarn run translations:compile
```

The extract command will creates the `src/translations/_extracted-template.json` file. For illustrative purposes, I've created a dummy file (`src/translations/_translated-de-template-from-translator.json`) that mimics the template as having been localised into German, and passed back. Running the compile command will parse this file and output the german translation file (`src/translations/de.json`).

## Testing Polyfills
Almost every modern browser has a fully implemented `Intl` API which makes it difficult to test polyfills. You can update the source code so that at some stage during runtime, the `PluralRules` constructor is removed:

```js
delete window.Intl.PluralRules
```

Now when reloading the project, you can see in the network panel a core plural rules polyfill is downloaded, followed by plural rules for the current locale. Changing the locale via the form control will show a spinner while downloading the new locales plural rule data.

## Noteworthy Information

### Plural Rules
Plural rules offer a way of representing how a language handles various cases of quantity, such as having zero, one or many of something. These cases often differ greatly from language to language.

Example: In English, zero is considered plural (e.g. 0 messages), but in French, zero is considered singular (e.g. 0 message).

```
You have {unreadMessages, plural, one {# unread message} other {# unread messages}}.
```

### Select Statements
Translations are not always simple, static strings. Often they are required to dynamically craft their final result by matching a value to one of many choices. Much like a switch statement, this is done by matching a value to supplied translations.

Example: A translation may require gender context and will differ due to the need for a varying pronoun (e.g. "He took the car.", "She took the car.", "They took the car.").

```
{gender, select, male {He} female {She} other {They}} took the car.
```

Example: Rather than handling conditional logic in your application code to show related messages as separate translations, this could be handled by associating those outcomes into a single translation:

```
{isTaxable, select, yes {An additional tax will be collected.} other {No taxes apply.}}
```

## Further Information
- [Basic Internationalization Principles](https://formatjs.io/docs/core-concepts/basic-internationalization-principles/)
- [MessageFormat Syntax](https://formatjs.io/docs/core-concepts/icu-syntax)
- [Internationalization API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
- [Language & Region Codes](https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/language_plural_rules.html)
- [React Intl](https://formatjs.io/docs/react-intl)
- [React Intl - Message Extraction](https://formatjs.io/docs/getting-started/message-extraction)





TODO: TALK ABOUT PLURAL OR SELECT ARGUMENTS. ADD EXAMPLE OF SELECT ARGUMENTS TO INTRO. IN ENGLISH, ONE IS SINGULAR ("ONE" PLURAL RULE), AND ZERO IS CONSIDERED PLURAL ("OTHER" PLURAL RULE), e.g. 1 MESSAGE, 0 MESSAGES.
      IN FRENCH, ZERO IS DIFFERENT AS IT IS CONSIDERED SINGULAR ("ONE" PLURAL RULE), e.g. 1 MESSAGE, 0 MESSAGE.





