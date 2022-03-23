import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Title from './Title';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

function Header() {
  return (
    <div>
      <Title>Arena Spy</Title>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/search/deathknight">
          <FormattedMessage {...messages.deathknight} />
        </HeaderLink>
        <HeaderLink to="/search/demonhunter">
          <FormattedMessage {...messages.demonhunter} />
        </HeaderLink>
        <HeaderLink to="/search/druid">
          <FormattedMessage {...messages.druid} />
        </HeaderLink>
        <HeaderLink to="/search/hunter">
          <FormattedMessage {...messages.hunter} />
        </HeaderLink>
        <HeaderLink to="/search/mage">
          <FormattedMessage {...messages.mage} />
        </HeaderLink>
        <HeaderLink to="/search/monk">
          <FormattedMessage {...messages.monk} />
        </HeaderLink>
        <HeaderLink to="/search/paladin">
          <FormattedMessage {...messages.paladin} />
        </HeaderLink>
        <HeaderLink to="/search/priest">
          <FormattedMessage {...messages.priest} />
        </HeaderLink>
        <HeaderLink to="/search/rogue">
          <FormattedMessage {...messages.rogue} />
        </HeaderLink>
        <HeaderLink to="/search/shaman">
          <FormattedMessage {...messages.shaman} />
        </HeaderLink>
        <HeaderLink to="/search/warlock">
          <FormattedMessage {...messages.warlock} />
        </HeaderLink>
        <HeaderLink to="/search/warrior">
          <FormattedMessage {...messages.warrior} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
