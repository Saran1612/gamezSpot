import { Box } from "@mui/material";
import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <Box className="cart-bg_img">
      <Box>
        <Header />
      </Box>

      <Box>
        <Box
          sx={{
            background: "#FF003A",
            padding: "30px 20px 60px 20px",
            textAlign: "center",
          }}
        >
          <span className="policy_header-text">PRIVACY POLICY</span>
        </Box>

        <Box
          sx={{
            background: "#000000",
            padding: { xs: "20px", md: "40px" },
            transform: {
              xs: "translateY( -1% )",
              sm: "translateY( -2% )",
              md: "translateY( -3% )",
            },
            margin: { xs: "0px 20px 0px 20px", md: "0px 125px 0px 110px" },
          }}
        >
          <Box className="terms-points_text">
            <span className="terms-header_points">Information We Collect:</span>
            <ul>
              <li>
                When you use our Website, we may collect personal information
                that you voluntarily provide, such as your name, email address,
                and any additional information you choose to share with us. We
                also automatically collect non-personal information, including
                your IP address, browser type, device information, and browsing
                patterns, through the use of cookies and similar technologies.
              </li>
            </ul>
          </Box>

          <Box className="terms-points_text">
            <span className="terms-header_points">Use of Information:</span>
            <ul>
              <li>
                We use the personal information you provide to deliver and
                enhance the services offered on our Website. This includes
                responding to your inquiries or requests, personalizing your
                experience, and communicating with you regarding the Website.
                The non-personal information we collect is used for statistical
                analysis, research, trend analysis, and to improve the
                functionality and user experience of the Website.
              </li>
            </ul>
          </Box>

          <Box className="terms-points_text">
            <span className="terms-header_points">Data Security:</span>
            <ul>
              <li>
                We take reasonable measures to protect your personal information
                from unauthorized access, alteration, disclosure, or
                destruction. However, please note that no method of transmission
                or storage is completely secure, and we cannot guarantee
                absolute data security.
              </li>
            </ul>
          </Box>

          <Box className="terms-points_text">
            <span className="terms-header_points">Third-Party Links:</span>
            <ul>
              <li>
                We do not sell, trade, or transfer your personal information to
                third parties without your consent, except as necessary to
                provide the services offered on the Website or as required by
                law. We may share your information with trusted third-party
                service providers who assist us in operating the Website,
                conducting our business, or servicing you, ensuring their
                compliance with this Policy.
              </li>
            </ul>
          </Box>

          <Box className="terms-points_text">
            <span className="terms-header_points">Children's Privacy:</span>
            <ul>
              <li>
                Our Website is not intended for individuals under the age of 18,
                and we do not knowingly collect personal information from
                children. If you believe that your child has provided us with
                personal information, please contact us immediately.
              </li>
            </ul>
          </Box>

          <Box className="terms-points_text">
            <span className="terms-header_points">
              Changes to the Privacy Policy:
            </span>
            <ul style={{ listStyle: "none" }}>
              <li>
                We reserve the right to modify this Privacy Policy at any time.
                Any updates will be effective immediately upon posting the
                revised Policy on the Website. Your continued use of the Website
                after such modifications constitutes acceptance of the updated
                Policy.
              </li>
            </ul>
          </Box>

          <Box className="terms-points_text">
            <span className="terms-header_points">Contact Us:</span>
            <ul style={{ listStyle: "none" }}>
              <li>
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or the handling of your personal information,
                please don't hesitate to contact us.
              </li>

              <li style={{ marginTop: "12px" }}>
                By using our Fitness Related Details Showcasing website, you
                acknowledge that you have read, understood, and agree to the
                practices described in this Privacy Policy. If you do not agree
                with any provision of this Policy, we kindly ask you to refrain
                from using the Website.
              </li>
            </ul>
          </Box>
        </Box>
      </Box>

      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;
