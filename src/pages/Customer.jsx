import React from 'react'
import { Col, Row } from 'antd'
import DashboardLayout from '../layout/DashboardLayout'

function Customer() {
    return (
        <DashboardLayout>
            <Row gutter={16}>
                <Col span={24}>Customer</Col>
            </Row>
        </DashboardLayout>
    )
}

export default Customer
