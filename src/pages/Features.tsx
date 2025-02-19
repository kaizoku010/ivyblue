import { Layout, Typography, Row, Col, Card } from 'antd';
import { 
  RobotOutlined, FileTextOutlined, BarChartOutlined, 
  UserOutlined, BellOutlined, BookOutlined, SafetyOutlined,
  TeamOutlined, MobileOutlined, CloudOutlined
} from '@ant-design/icons';
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

const { Title, Text, Paragraph } = Typography;

const features = [
  {
    icon: RobotOutlined,
    title: "AI-Powered Analytics",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos"
  },
  {
    icon: FileTextOutlined,
    title: "AI-Powered Analytics",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos"
  },
  {
    icon: BarChartOutlined,
    title: "AI-Powered Analytics",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos"
 },
  {
    icon: BellOutlined,
    title: "AI-Powered Analytics",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos"
 },
  {
    icon: UserOutlined,
    title: "AI-Powered Analytics",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos"
  },
  {
    icon: SafetyOutlined,
    title: "AI-Powered Analytics",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos"
  },
  {
    icon: TeamOutlined,
    title: "AI-Powered Analytics",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos"
  },
  {
    icon: BookOutlined,
    title: "AI-Powered Analytics",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos"
 },
  {
    icon: CloudOutlined,
    title: "AI-Powered Analytics",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos"
   }
];

const Features = () => {
  return (
    <Layout>
      <Header />
      <div className="min-h-screen bg-white pt-16">
        <div className="text-center mb-16" style={{marginTop:"5rem"}}>
          <Title className="text-[#1890ff] mb-4">Our Features</Title>
          <Text className="text-lg text-gray-600 block max-w-3xl mx-auto">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos
        </Text>
        </div>

        <Row className='features' style={{padding:"20px 4rem"}} gutter={[24, 24]}>
          {features.map((feature, index) => (
            <Col key={index} xs={24} sm={12} lg={8}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <feature.icon className="text-4xl text-[#1890ff] mb-4" />
                <Title level={4} className="mb-4">{feature.title}</Title>
                <Paragraph className="text-gray-600">{feature.description}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <Footer />
    </Layout>
  );
};

export default Features;
