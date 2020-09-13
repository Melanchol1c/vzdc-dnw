import React from 'react';
import { Panel, View } from '@vkontakte/vkui';
import PropTypes from 'prop-types';

/**
 * Application layout.
 *
 * @param {object} props Props.
 * @returns {React.FC}
 */
export default function AppLayout(props) {
  const { children } = props;

  return (
    <View>
      <Panel>
        {children}
      </Panel>
    </View>
  );
}

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
};