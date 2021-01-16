import { useRef, useState, useEffect } from 'react';
import { shouldPolyfill } from '@formatjs/intl-pluralrules/should-polyfill';
import * as locales from 'constants/locales';

const useI18nPolyfills = (locale) => {
  const [requiredPolyfill] = useState(shouldPolyfill());
  const [polyfilledLocales, setPolyfilledLocales] = useState([]);
  const polyfillLoaded = useRef(false);

  useEffect(() => {
    async function polyfillPluralRules() {
      if (!requiredPolyfill || polyfilledLocales.includes(locale)) return;

      if (!polyfillLoaded.current) {
        console.log('polyfillPluralRules() - Loading polyfill core.');
        await import(/* webpackChunkName: 'pluralrules-polyfill' */ '@formatjs/intl-pluralrules/polyfill');
        console.log('polyfillPluralRules() - Polyfill core loaded.');
        polyfillLoaded.current = true;
      }

      console.log('polyfillPluralRules() - Loading locale data.');
      switch (locale) {
        case locales.de: {
          await import(/* webpackChunkName: 'pluralrules-polyfill-de' */ '@formatjs/intl-pluralrules/locale-data/de');
          break;
        }
        case locales.es: {
          await import(/* webpackChunkName: 'pluralrules-polyfill-es' */ '@formatjs/intl-pluralrules/locale-data/es');
          break;
        }
        case locales.fr: {
          await import(/* webpackChunkName: 'pluralrules-polyfill-fr' */ '@formatjs/intl-pluralrules/locale-data/fr');
          break;
        }
        case locales.en:
        default: {
          await import(/* webpackChunkName: 'pluralrules-polyfill-en' */ '@formatjs/intl-pluralrules/locale-data/en');
          break;
        }
      }
      console.log(`polyfillPluralRules() - ${locale} locale data loaded.`);

      setPolyfilledLocales([...polyfilledLocales, locale]);
    }

    polyfillPluralRules();
  }, [locale, requiredPolyfill, polyfilledLocales]);

  return (
    !requiredPolyfill ||
    (requiredPolyfill &&
      polyfillLoaded.current &&
      polyfilledLocales.includes(locale))
  );
};

export default useI18nPolyfills;
