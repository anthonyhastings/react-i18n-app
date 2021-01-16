import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import './stylesheets/index.css';

const namespace = 'example-strings';

const ExampleStrings = ({
  name,
  setName,
  setUnreadMessages,
  setWalletValue,
  unreadMessages,
  walletValue
}) => {
  return (
    <React.Fragment>
      <div className={`${namespace}__pod`}>
        <FormattedMessage
          id="example-strings.name-label"
          defaultMessage="Name:"
          description="The label for a form field signifying a persons name."
        >
          {(txt) => <label htmlFor="name-input">{txt}</label>}
        </FormattedMessage>
        <input
          className={`${namespace}__control`}
          id="name-input"
          onChange={(e) => setName(e.currentTarget.value)}
          type="text"
          value={name}
        />
      </div>

      <div className={`${namespace}__pod`}>
        <FormattedMessage
          id="example-strings.unread-messages-label"
          defaultMessage="Unread Messages:"
          description="The label for a form field signifying the number of unread messages."
        >
          {(txt) => <label htmlFor="unread-messages-input">{txt}</label>}
        </FormattedMessage>
        <input
          className={`${namespace}__control`}
          id="unread-messages-input"
          onChange={(e) => setUnreadMessages(e.currentTarget.value)}
          type="number"
          value={unreadMessages}
        />
      </div>

      <div className={`${namespace}__pod`}>
        <FormattedMessage
          id="example-strings.wallet-value-label"
          defaultMessage="Wallet Value:"
          description="The value of a wallet."
        >
          {(txt) => <label htmlFor="wallet-value-input">{txt}</label>}
        </FormattedMessage>
        <input
          className={`${namespace}__control`}
          id="wallet-value-input"
          onChange={(e) => setWalletValue(e.currentTarget.value)}
          type="number"
          value={walletValue}
        />
      </div>

      <div className={`${namespace}__pod`}>
        <FormattedMessage
          id="example-strings.literal"
          description="A simple string with no interpolation required."
          defaultMessage="This is a simple string."
        />
      </div>

      <div className={`${namespace}__pod`}>
        <FormattedMessage
          id="example-strings.interpolation"
          description="A simple string with some interpolation."
          defaultMessage="Hello, {name}."
          values={{ name }}
        />
      </div>

      <div className={`${namespace}__pod`}>
        <FormattedMessage
          id="example-strings.plurals"
          description="An interpolated string with placeholders and formatting."
          defaultMessage={`Hello {name}, you have {unreadMessages, plural, one {# unread message} other {# unread messages}}.`}
          values={{ name: <b>{name}</b>, unreadMessages }}
        />
      </div>

      <div className={`${namespace}__pod`}>
        <FormattedMessage
          id="example-strings.dates"
          description="A string with various date formattings."
          defaultMessage={`Today is {today, date, full}.`}
          values={{ today: Date.now() }}
        />
      </div>

      <div className={`${namespace}__pod`}>
        <FormattedMessage
          id="example-strings.currency"
          description="A string with currency formatting."
          defaultMessage={`In my wallet I have {walletValue, number, GBP}.`}
          values={{ walletValue }}
        />
      </div>
    </React.Fragment>
  );
};

ExampleStrings.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func.isRequired,
  setUnreadMessages: PropTypes.func.isRequired,
  setWalletValue: PropTypes.func.isRequired,
  unreadMessages: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  walletValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

ExampleStrings.defaultProps = {
  name: '',
  unreadMessages: ''
};

export default ExampleStrings;
