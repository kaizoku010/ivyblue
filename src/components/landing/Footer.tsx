
import { GithubOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Layout, Row, Col, Typography, Space, Divider } from 'antd';
import {Link} from "react-router-dom"

const { Footer: AntFooter } = Layout;
const { Title, Text } = Typography;

export const Footer = () => {
 
  // const menuItems = [
  //   { key: '/', label: 'Home' },
  //   { key: '/features', label: 'Features' },
  //   { key: '/pricing', label: 'Pricing' },
  //   { key: '/about', label: 'About' },
  //   { key: '/contact', label: 'Contact' },
  // ];

  return (
    <AntFooter className="bg-[#f0f2f5] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={24} md={8}>
            <Title level={4} className="text-[#1890ff] mb-6">ivyblue</Title>
            <Text className="text-gray-600">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit  </Text>
          </Col>
          
          <Col xs={24} sm={12} md={8}>
            <Title level={4} className="mb-6">Quick Links</Title>
            <Space direction="vertical">
              <Link to="/">Home</Link>
              <Link to="/features">Features</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/about">About</Link>
            </Space>
          </Col>
          
          <Col xs={24} sm={12} md={8}>
            <Title level={4} className="mb-6">Contact Us</Title>
            <Space direction="vertical" className="text-gray-600">
              {/* <Text>Email: contact@schoolforce.com</Text> */}
              <Text>whatsapp: +144 (750) 323-993</Text>
              <Text>Address: Atalantis, Aalantian street</Text>
            </Space>
      
          </Col>
        </Row>
        
        <Divider />
        
        <Row justify="center">
          <Col>
            <Text className="text-gray-500">
              © {new Date().getFullYear()} ivyblue. All rights reserved.
            </Text>
          </Col>
        </Row>
      </div>
    </AntFooter>
  );
};
