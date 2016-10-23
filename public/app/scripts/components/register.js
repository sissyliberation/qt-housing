import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default React.createClass({
	componentWillMount() {
		this.props.handleLogin('nicerhugs', 'password')
	},
	render() {
		console.log(this.props.isFetching);
		return (
			<div>

				<h1>QT Housing</h1>
				<TextField
				hintText="username"
				floatingLabelText="Username"
				floatingLabelFixed={true} />
				<TextField
				hintText="Password"
				floatingLabelText="password"
				type="password" />

				<RaisedButton label="Sign Up" fullWidth={true} />

			</div>
		)
	}
});
