import React from 'react';
import { Panel, View } from '@vkontakte/vkui';
import { useLocation, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Application layout.
 *
 * @param {object} props Props.
 * @returns {React.FC}
 */
export default function AppLayout(props) {
  const location = useLocation();
  const { children } = props;

  return (
    <View>
      <Panel id={location.key}>
        {children}
      </Panel>
    </View>
  );
}

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
};