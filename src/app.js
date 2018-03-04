import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Actions from 'actions';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CONFIG from 'react-native-config';

class App extends Component {
  render() {
    const { token } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hi, Welcome</Text>
        <Text style={styles.text}>Environment: {CONFIG.ENVIRONMENT}</Text>
        {token === null && <TouchableOpacity style={styles.button} onPress={() => this.props.signIn()}><Text style={styles.text}>Sign In</Text></TouchableOpacity>}
        {token !== null && <TouchableOpacity style={styles.buttonSignOut} onPress={() => this.props.signOut()}><Text style={styles.buttonSignOutText}>Sign Out</Text></TouchableOpacity>}
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

App.propTypes = {
  signIn: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  token: PropTypes.string,
};

App.defaultProps = {
  token: null,
};

const mapStateToProps = store => ({
  token: Actions.getToken(store),
});

const mapDispatchToProps = {
  signIn: Actions.signIn,
  signOut: Actions.signOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
