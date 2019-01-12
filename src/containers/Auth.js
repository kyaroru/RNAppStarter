import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Actions from 'actions';
import Selectors from 'selectors';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import CONFIG from 'react-native-config';

class Auth extends Component {
  render() {
    const { token, isLoading, signIn } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Auth</Text>
        <Text style={styles.text}>
          Environment:
          {' '}
          {CONFIG.ENVIRONMENT}
        </Text>
        {token === null && <TouchableOpacity style={styles.button} onPress={() => signIn({ username: 'test', password: '1234' })}><Text style={styles.text}>Sign In</Text></TouchableOpacity>}
        {isLoading && <ActivityIndicator color="white" />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E90FF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
  button: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
  },
  buttonSignOut: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  buttonSignOutText: {
    color: '#1E90FF',
  },
});

Auth.propTypes = {
  signIn: PropTypes.func.isRequired,
  token: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};

Auth.defaultProps = {
  token: null,
};

const mapStateToProps = store => ({
  token: Selectors.getToken(store),
  isLoading: Selectors.isSignInLoading(store),
});

const mapDispatchToProps = {
  signIn: Actions.signIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
