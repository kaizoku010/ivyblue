import { Layout, Typography, Row, Col, Card, Avatar } from 'antd';
import { TeamOutlined, TrophyOutlined, SafetyOutlined } from '@ant-design/icons';
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

const { Title, Text, Paragraph } = Typography;

const About = () => {
  return (
    <Layout>
      <Header />
      <div className="min-h-screen bg-white pt-16">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <Title className="text-[#1890ff] mb-4">About ivyblue</Title>
            <Text className="text-lg text-gray-600 block max-w-3xl mx-auto">
            Sed quia non numquam eius modi tempora incidunt ut labore et dolore
             magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, 
            quis nostrum exercitationem ullam corporis suscipit laboriosam   
                     </Text>
          </div>

          <Row gutter={[48, 48]} className="mb-20">
            <Col xs={24} md={12}>
              <Title level={3}>Mission</Title>
              <Paragraph className="text-gray-600">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
              praesentium voluptatum deleniti atque corrupti quos 
              </Paragraph>
            </Col>
            <Col xs={24} md={12}>
              <Title level={3}>Vision</Title>
              <Paragraph className="text-gray-600">
              Qed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, 
              quis nostrum exercitationem ullam corporis suscipit laboriosam
            </Paragraph>
            </Col>
          </Row>

          <Title level={2} className="text-center mb-12">Core Values</Title>
          <Row gutter={[24, 24]} className="mb-20">
            <Col xs={24} md={8}>
              <Card className="text-center h-full">
                <TeamOutlined className="text-4xl text-[#1890ff] mb-4" />
                <Title level={4}>Collaboration</Title>
                <Text style={{justifyContent:"left"}} className="text-gray-600">
                At vero eos et accusamus et iusto odio dignissimos ducimus                 </Text>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className="text-center h-full">
                <TrophyOutlined className="text-4xl text-[#1890ff] mb-4" />
                <Title level={4}>Excellence</Title>
                <Text className="text-gray-600">
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus 
                saepe eveniet ut et 
                voluptates repudiandae sint et molestiae non recusandae
                </Text>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className="text-center h-full">
                <SafetyOutlined className="text-4xl text-[#1890ff] mb-4" />
                <Title level={4}>Security</Title>
                <Text className="text-gray-600">
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus 
                </Text>
              </Card>
            </Col>
          </Row>

          {/* <Title level={2} className="text-center mb-12">Our Team</Title>
          <Row gutter={[24, 24]} justify="center">
            {[1, 2, 3, 4].map((_, index) => (
              <Col key={index} xs={24} sm={12} md={6}>
                <Card className="text-center">
                  <Avatar size={80} className="mb-4" />
                  <Title level={5}>Team Member {index + 1}</Title>
                  <Text className="text-gray-600 block">Position</Text>
                </Card>
              </Col>
            ))}
          </Row> */}
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default About;
