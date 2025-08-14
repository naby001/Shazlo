import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Paper,
  Chip,
  InputAdornment,
  AppBar,
  Toolbar,
  Container
} from '@mui/material';
import {
  ArrowBack,
  ExpandMore,
  CloudUpload,
  Delete,
  Scanner,
  Save,
  SaveAlt
} from '@mui/icons-material';
import { useSelector } from 'react-redux';

export default function ProductForm() {
  const [formData, setFormData] = useState({
    title: '',
    product_category: 'dress',
    // productMark: 'Scarlett Whitening',
    price: 100.00,
    discount: 20,
    discountPrice: 80.00,
  
    sku: '',
    stock: ''
  });

  const [productImage, setProductImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('/api/placeholder/200/200');
  const generalFields = ['title', 'product_category',  'price', 'discount'];
const stockFields = ['sku', 'stock'];
const brand=useSelector((state)=>state.user);
  const handleInputChange = (field) => (event) => {
    const value = event.target.value;
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Auto-calculate discount price
    if (field === 'price' || field === 'discount') {
      const price = field === 'price' ? parseFloat(value) : formData.price;
      const discount = field === 'discount' ? parseFloat(value) : formData.discount;
      const discountPrice = price - (price * discount / 100);
      setFormData(prev => ({
        ...prev,
        discountPrice: discountPrice.toFixed(2)
      }));
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProductImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setProductImage(null);
    setImagePreview('/api/placeholder/200/200');
  };

  const handleSave = async () => {
  if (!productImage) {
    alert("Please upload a product image.");
    return;
  }

  const payload = new FormData();
  payload.append('title', formData.title);
  payload.append('product_category', formData.product_category);
  payload.append('price', formData.price);
  payload.append('brand_name', brand.brand_name); 
  payload.append('image', productImage);
  payload.append('stock',formData.stock);
  payload.append('brand_id',brand.id);
  console.log(payload.get('image'));
  try {
    const response = await fetch('http://192.168.31.12:8000/v1/items/create', {
      method: 'POST',
      body: payload,
    });

    const data = await response.json();
    if (response.ok) {
      alert("✅ Product uploaded successfully!");
      console.log(data);
    } else {
      alert(`❌ Failed: ${data.error || "Unknown error"}`);
    }
  } catch (err) {
    console.error(err);
    alert("❌ Error while uploading product.");
  }
};


  const handleSaveDraft = () => {
    console.log('Saving draft:', formData);
    alert('Draft saved successfully!');
  };

  const handleScanToFill = () => {
    alert('Scan to fill functionality would be implemented here');
  };

  const countFilledFields = (fields) => {
  return fields.reduce((count, field) => {
    const value = formData[field];
    return value !== '' && value !== null && value !== undefined ? count + 1 : count;
  }, 0);
};


  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 1 }}>
        <Toolbar>
          <IconButton edge="start" sx={{ mr: 2 }}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600 }}>
            Add New Product
          </Typography>
         
          <Button
            variant="contained"
            startIcon={<Save />}
            onClick={handleSave}
            sx={{ backgroundColor: '#ffd700', color: 'black', '&:hover': { backgroundColor: '#ffed4a' } }}
          >
            Save Product
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" sx={{ py: 3 }}>
       <Grid container spacing={3} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>

          {/* Left Column - Product Image */}
          <Grid item xs={12} md={4} lg={3}>
            <Card sx={{ height: 'fit-content', position: 'sticky', top: 20 }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Product Image
                </Typography>
              
                <Paper
                  sx={{
                    width: '100%',
                    height: 200,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f0f0f0',
                    backgroundImage: productImage ? `url(${imagePreview})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    border: '2px dashed #ddd'
                  }}
                >
                  {!productImage && (
                    <Typography variant="body2" color="textSecondary">
                      No Image
                    </Typography>
                  )}
                  {productImage && (
                    <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
                      <Button
                        size="small"
                        onClick={removeImage}
                        sx={{ backgroundColor: 'white', color: 'red', minWidth: 'auto', p: 1 }}
                      >
                        Remove
                      </Button>
                    </Box>
                  )}
                </Paper>

                <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                  <Button
                    component="label"
                    variant="outlined"
                    size="small"
                    sx={{ flex: 1 }}
                  >
                    Replace
                    <input
                      type="file"
                      hidden
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    color="error"
                    onClick={removeImage}
                    sx={{ flex: 1 }}
                  >
                    Remove
                  </Button>
                </Box>

                <Button
                  startIcon={<CloudUpload />}
                  component="label"
                  sx={{ mt: 2, width: '100%' }}
                >
                  Add Another Image
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Column - Form Fields */}
          <Grid item xs={12} md={8} lg={9}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth:900}}>
              {/* Product Info Accordion */}
              <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, flexGrow: 1 }}>
                      General Information
                    </Typography>
                    <Chip
  label={`${countFilledFields(generalFields)}/${generalFields.length}`}
  size="small"
  sx={{ backgroundColor: '#e3f2fd', mr: 1 }}
/>

                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Product Name"
                        value={formData.title}
                        onChange={handleInputChange('title')}
                      />
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>Product Type</InputLabel>
                        <Select
                          value={formData.product_category}
                          label="Product Type"
                          onChange={handleInputChange('product_category')}
                        >
                          <MenuItem value="dress">Dress</MenuItem>
                          <MenuItem value="top">Top</MenuItem>
                          <MenuItem value="short">Shorts</MenuItem>
                          {/* <MenuItem value="Sunscreen">Sunscreen</MenuItem> */}
                        </Select>
                      </FormControl>
                    </Grid>

                   
                    <Grid item xs={12} sm={4}>
                      <TextField
                        fullWidth
                        label="Price"
                        type="number"
                        value={formData.price}
                        onChange={handleInputChange('price')}
                        InputProps={{
                          startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <TextField
                        fullWidth
                        label="Discount (Optional)"
                        type="number"
                        value={formData.discount}
                        onChange={handleInputChange('discount')}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">%</InputAdornment>,
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <TextField
                        fullWidth
                        label="Discount Price"
                        type="number"
                        value={formData.discountPrice}
                        InputProps={{
                          startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                          readOnly: true,
                        }}
                        sx={{ backgroundColor: '#f5f5f5' }}
                      />
                    </Grid>

                    

                  </Grid>
                </AccordionDetails>
              </Accordion>

              {/* Managing Stock Accordion */}
              <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, flexGrow: 1 }}>
                      Manage Stock
                    </Typography>
                    <Chip
  label={`${countFilledFields(stockFields)}/${stockFields.length}`}
  size="small"
  sx={{ backgroundColor: '#e8f5e8', mr: 1 }}
/>

                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="SKU"
                        value={formData.sku}
                        onChange={handleInputChange('sku')}
                        placeholder="Enter SKU"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Stock Quantity"
                        type="number"
                        value={formData.stock}
                        onChange={handleInputChange('stock')}
                        placeholder="Enter stock quantity"
                      />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>

             
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}