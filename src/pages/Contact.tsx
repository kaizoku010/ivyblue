import { Layout, Typography, Row, Col, Card } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

const { Title, Text } = Typography;

const Contact = () => {
  return (
    <Layout>
      <Header />
      <div className="min-h-screen bg-white pt-16">
        <div style={{ marginTop: "7rem" }} className="text-center mb-16">
          <Title className="text-[#1890ff] mb-4">Contact Us</Title>
          <Text style={{ fontSize: "1.25rem" }} className="text-gray-600 block max-w-2xl mx-auto">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam
          </Text>
        </div>

        <Row justify="center" style={{ padding: "2rem 1rem" }}>
          <Col xs={24} md={12} lg={8}>
            <div className="space-y-8">
              <Card className="bg-[#f8f9fa]">
                <div className="flex items-start gap-4">
                  <MailOutlined className="text-2xl text-[#1890ff]" />
                  <div>
                    <Title level={5}>Email Us</Title>
                    <Text className="text-gray-600">root@gmail.com</Text>
                  </div>
                </div>
              </Card>

              <Card className="bg-[#f8f9fa]">
                <div className="flex items-start gap-4">
                  <PhoneOutlined className="text-2xl text-[#1890ff]" />
                  <div>
                    <Title level={5}>Call Us</Title>
                    <Text className="text-gray-600">+144 (750) 323-993</Text>
                  </div>
                </div>
              </Card>

              <Card className="bg-[#f8f9fa]">
                <div className="flex items-start gap-4">
                  <EnvironmentOutlined className="text-2xl text-[#1890ff]" />
                  <div>
                    <Title level={5}>Location</Title>
                    <Text className="text-gray-600">
                      Atalantis,<br />
                      Atalantian Street
                    </Text>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </Layout>
  );
};

export default Contact;