import { Box } from '@mui/material';
import './App.css';
import Routers from './Routers/Routers';


function App() {
  return (
    <Box>
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/billing" element={<BillingPage />} />
          <Route path="/termsCondition" element={<TermsCondition />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/cartItems" element={<CartItems />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profile" element={<ProfileTabs />} />
          <Route path="/singleProducts" element={<SingleProduct />} />
        </Routes>
      </Router> */}
      <Routers />
    </Box>
  );
}

export default App;
