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
  const history = useHistory();
  const { children } = props;

  /**
   * Back to previous route.
   */
  function goBack() {
    history.pop();
  }

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