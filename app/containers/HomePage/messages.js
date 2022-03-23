/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  findBuild: {
    id: `${scope}.find_build.findbuild`,
    defaultMessage: 'Find the best build',
  },
  findBuildInfo: {
    id: `${scope}.find_build.findbuildinfo`,
    defaultMessage:
      'Recommended builds are based on the top 100 rated players for your selected class and specialization',
  }
});
