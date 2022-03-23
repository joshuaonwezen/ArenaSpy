import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import SearchPage from '../index';

describe('<SearchPage />', () => {
  it('should render its heading', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <SearchPage />
      </IntlProvider>,
    );

    expect(firstChild).toMatchSnapshot();
  });
});
