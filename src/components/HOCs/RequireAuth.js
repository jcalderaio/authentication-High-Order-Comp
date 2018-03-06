import React from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends React.Component {
    /* saying static defines a "class" level property. Saying static contextTypes = object gives any
  other piece of code in our application the ability to ability authentication.contextTypes */

    /* Example. You dont have to create an instance of Authentication, you can just go ahead and
    call it. THe static keyword defines a property (or an object) on the class (the actual class, NOT an
    instance of the class, but the actual class. Thats what the static keyword is doing.) */
    // Authentication.contextTypes

    static contextTypes = {
      router: React.PropTypes.object
    };

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps({ authenticated }) {
    return {
      authenticated
    };
  }

  return connect(mapStateToProps)(Authentication);
}
