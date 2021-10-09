import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
function FormatMessageComponent({ id }) {
  return <FormattedMessage id={id} />;
}
export default memo(FormatMessageComponent);
