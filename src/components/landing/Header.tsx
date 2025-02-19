import { useState } from 'react';
import { Layout, Menu, Drawer } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { MenuOutlined, HomeOutlined } from '@ant-design/icons'; // Import the icon
import Logo from '../../media/logo.svg';
const { Header: AntHeader } = Layout;
import "./header.css"
export const Header = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  const menuItems = [
    { key: '/', label: 'Home' },
    { key: '/features', label: 'Features' },
    { key: '/pricing', label: 'Pricing' },
    { key: '/about', label: 'About' },
    { key: '/contact', label: 'Contact' },
  ];

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <AntHeader className="bg-white shadow-sm fixed w-full z-50 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
        {/* Logo with Icon */}
        <Link to="/" className="text-2xl font-bold text-[#1890ff] flex items-center h-full">
          <img src={Logo} alt="Logo" className="logo" /> {/* Icon added here */}
          ivyblue
        </Link>

        {/* Desktop Menu */}
        <Menu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          className="border-none flex-1 justify-end min-w-[500px] hidden md:flex"
          items={menuItems.map(item => ({
            key: item.key,
            label: (
              <Link to={item.key}>
                {item.label}
              </Link>
            ),
          }))}
        />

        {/* Mobile Menu Button */}
        <MenuOutlined
          onClick={showDrawer}
          className="block md:hidden text-xl cursor-pointer"
        />

        {/* Mobile Drawer Menu */}
        <Drawer
          title="Menu"
          placement="right"
          onClose={onClose}
          visible={visible}
          className="md:hidden"
        >
          <Menu
            mode="vertical"
            selectedKeys={[location.pathname]}
            className="border-none"
            items={menuItems.map(item => ({
              key: item.key,
              label: (
                <Link to={item.key} onClick={onClose}>
                  {item.label}
                </Link>
              ),
            }))}
          />
        </Drawer>
      </div>
    </AntHeader>
  );
};