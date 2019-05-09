import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
//import { registerStudent } from '../actions/studentRegistration';
import { registerStudent } from '../actions/authentication';
import classnames from 'classnames';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


class StudentRegistration extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            mobile: '',
            dob: '',
            address: '',
            qualification: '',
            gender: '',
            errors: {}
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleCalenderChange = (dob, event) => {
        this.setState({ dob })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            address: this.state.address,
            dob: this.state.dob,
            qualification: this.state.qualification,
            gender: this.state.gender
        }
        this.props.registerStudent(user, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="container" style={{ marginTop: '50px', width: '700px' }}>
                <h2 style={{ marginBottom: '40px' }}>Registration</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Name"
                            className={classnames('form-control form-control-lg', {
                                'is-invalid': errors.name
                            })}
                            name="name"
                            onChange={this.handleInputChange}
                            value={this.state.name}
                        />
                        {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Mobile Number"
                            className={classnames('form-control form-control-lg', {
                                'is-invalid': errors.mobile
                            })}
                            name="mobile"
                            onChange={this.handleInputChange}
                            value={this.state.mobile}
                        />
                        {errors.name && (<div className="invalid-feedback">{errors.mobile}</div>)}
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email"
                            className={classnames('form-control form-control-lg', {
                                'is-invalid': errors.email
                            })}
                            name="email"
                            onChange={this.handleInputChange}
                            value={this.state.email}
                        />
                        {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                    </div>
                    <div className="form-group">
                        <DatePicker
                            placeholderText="Date of birth (MM/DD/YYY)"
                            className={classnames('form-control form-control-lg', {
                                'is-invalid': errors.dob
                            })}
                            name="dob"
                            selected={this.state.dob}
                            onChange={this.handleCalenderChange}
                            value={this.state.dob}
                            scrollableMonthYearDropdown={true}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Address"
                            className={classnames('form-control form-control-lg', {
                                'is-invalid': errors.address
                            })}
                            name="address"
                            onChange={this.handleInputChange}
                            value={this.state.address}
                        />
                        {errors.address && (<div className="invalid-feedback">{errors.address}</div>)}
                    </div>
                    <div className="form-group">
                        <select
                            className={classnames('form-control form-control-lg', {
                                'is-invalid': errors.gender
                            })}
                            name="gender"
                            onChange={this.handleInputChange}
                            value={this.state.gender}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        {errors.gender && (<div className="invalid-feedback">{errors.gender}</div>)}
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Highest Qualification"
                            className={classnames('form-control form-control-lg', {
                                'is-invalid': errors.qualification
                            })}
                            name="qualification"
                            onChange={this.handleInputChange}
                            value={this.state.qualification}
                        />
                        {errors.qualification && (<div className="invalid-feedback">{errors.qualification}</div>)}
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Register
                    </button>
                    </div>
                </form>
            </div>
        )
    }
}

StudentRegistration.propTypes = {
    registerStudent: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerStudent })(withRouter(StudentRegistration))