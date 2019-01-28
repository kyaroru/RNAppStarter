import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import * as Colors from 'themes/colors';
import Actions from 'actions';

class Auth extends Component {
  componentDidMount() {
    const { redirectApp } = this.props;
    redirectApp();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading ...</Text>
        <ActivityIndicator size="small" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.white,
  },
});

Auth.propTypes = {
  redirectApp: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  redirectApp: Actions.redirectApp,
};

export default connect(null, mapDispatchToProps)(Auth);
