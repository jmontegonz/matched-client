import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import AuthService from './auth/auth-service'
import NavigationBar from './NavigationBar'
import Sidebar from './Sidebar'
import './CompanyWelcome.css'

export default class CompanyWelcome extends React.Component {

    render() {
        return (
            <div className='welcome-wraper'>
                <NavigationBar />
                <div style={{ float: 'left' }}>
                    <Sidebar />
                </div>
                <div className='welcome-message'>
                    <h1>Welcome!</h1>
                    <p>Remember: transparent and fun! This is about making life easier, not the other way around ;)</p>
                </div>
            </div>


        );
    }
}
