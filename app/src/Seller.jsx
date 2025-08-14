import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Button,
  IconButton,
  Drawer,
  InputBase,
  Badge
} from '@mui/material';
import {
  Dashboard,
  Inventory,
  People,
  ShoppingCart,
  Store,
  Settings,
  Feedback,
  HelpOutline,
  Search,
  Notifications
} from '@mui/icons-material';

import mainlogo from "./assets/1.png";
import ProductForm from './components/Add_Product_admin';
import { useDispatch, useSelector } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import { setLogout } from './state';
// Static sidebar items (no 'active' field needed)
const sidebarItems = [
  { icon: <Dashboard />, text: 'Analytics' },
  { icon: <Inventory />, text: 'Products' },
  // { icon: <People />, text: 'Customer' },
  { icon: <ShoppingCart />, text: 'Orders' },
  // { icon: <Store />, text: 'Store' },
  { icon: <Settings />, text: 'Store Setting' },
  // { icon: <Feedback />, text: 'Feedback' },
  { icon: <HelpOutline />, text: 'Help & Support' }
];

export default function NovanestDashboard() {
  const [activeSection, setActiveSection] = useState('Overview');
  const brand=useSelector((state)=>state.user);
  const dispatch=useDispatch();
  const handlelogout=async()=>{
    dispatch(setLogout());
  }

  return (
    <Box sx={{ display: 'flex', bgcolor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          '& .MuiDrawer-paper': {
            width: 240,
            bgcolor: 'white',
            color: 'black',
            border: 'none'
          }
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box
            component="img"
            src={mainlogo}
            alt="main logo"
            sx={{ width: "60%", maxWidth: 750, mt: 0 }}
          />
        </Box>

        <List sx={{ px: 1 }}>
          {sidebarItems.map((item, index) => (
            <ListItem
              key={index}
              button
              onClick={() => setActiveSection(item.text)}
              sx={{
                borderRadius: 1,
                mb: 0.5,
                bgcolor: activeSection === item.text ? 'black' : 'transparent',
                color: activeSection === item.text && 'white',
                '&:hover': { bgcolor: 'grey', color: 'white' },
                cursor:'pointer'
              }}
            >
              <ListItemIcon sx={{ color: activeSection === item.text ? 'white' : 'black', minWidth: 35 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ '& .MuiTypography-root': { fontSize: '0.9rem' } }}
              />
            </ListItem>
          ))}
           {/* Logout Button */}
 <ListItem
  button
  onClick={handlelogout}
  sx={{
    borderRadius: 1,
    mt: 2,
    bgcolor: 'transparent',
    color: 'red',
    cursor:'pointer',
    '&:hover': {
      bgcolor: 'red',
      color: 'white',
      '& .MuiListItemIcon-root': {
        color: 'white'
      }
    }
  }}
>
  <ListItemIcon sx={{ color: 'red', minWidth: 35 }}>
    <LogoutIcon />
  </ListItemIcon>
  <ListItemText
    primary="Logout"
    sx={{ '& .MuiTypography-root': { fontSize: '0.9rem' } }}
  />
</ListItem>

        </List>

        {/* Upgrade Pro Card */}
        {/* <Box sx={{ p: 2, mt: 'auto' }}>
          <Card sx={{ bgcolor: '#2d3748', color: 'white' }}>
            <CardContent sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                Upgrade Pro
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
                Get 1 month free and unlock report and analytics
              </Typography>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: '#4a5568',
                  '&:hover': { bgcolor: '#5a6578' }
                }}
              >
                Upgrade Now
              </Button>
            </CardContent>
          </Card>
        </Box> */}
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 0.5 }}>
              {`Welcome back, ${brand.poc_name}`}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              Here's Your Control Sales Overview
            </Typography> */}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              bgcolor: 'white',
              borderRadius: 1,
              px: 2,
              py: 1,
              border: '1px solid #e0e0e0'
            }}>
              <Search sx={{ color: 'text.secondary', mr: 1 }} />
              <InputBase placeholder="Search" sx={{ width: 200 }} />
            </Box>
            <IconButton>
              <Badge badgeContent={3} color="error">
                <Notifications />
              </Badge>
            </IconButton>
            <Avatar src="/api/placeholder/32/32" sx={{ width: 32, height: 32 }} />
          </Box>
        </Box>

        {/* Conditional Rendering */}
        {activeSection === 'Products' && <ProductForm />}
      </Box>
    </Box>
  );
}
