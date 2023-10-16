import { Box } from "@mui/material";
import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Terms&Condition.css";

const TermsCondition = () => {
  return (
    <Box className="cart-bg_img">
      <Box>
        {/* <Header /> */}
      </Box>

      <Box>
        <Box
          sx={{
            background: "#FF003A",
            padding: "30px 20px 60px 20px",
            textAlign: "center",
          }}
        >
          <span className="policy_header-text">TERMS AND CONDITIONS</span>
        </Box>

        <Box
          sx={{
            background: "#000000",
            padding: { xs: "30px 20px", md: "40px" },
            transform: {
              xs: "translateY( -1% )",
              sm: "translateY( -2% )",
              md: "translateY( -3% )",
            },
            margin: { xs: "0px 20px 0px 20px", md: "0px 125px 0px 110px" },
          }}
        >
          <Box className="terms-points_text">
            <span className="terms-header_points">Use of the Website:</span>
            <ul>
              <li>
                The Website provides a platform for users to access and explore
                fitness-related details, including information, articles, and
                resources.
              </li>

              <li>
                The content on the Website is for informational purposes only
                and does not constitute professional advice. You should consult
                with a qualified professional before making any fitness or
                health-related decisions.
              </li>

              <li>
                You understand and agree that your use of the Website is at your
                own risk, and you assume full responsibility for any
                consequences arising from such use.
              </li>
            </ul>
          </Box>

          <Box className="terms-points_text">
            <span className="terms-header_points">User Conduct:</span>
            <ul>
              <li>
                You agree to use the Website in accordance with applicable laws
                and regulations and to respect the rights of others.
              </li>

              <li>
                You are solely responsible for any content you post or submit on
                the Website, ensuring that it is accurate, lawful, and does not
                infringe upon the rights of any third party.
              </li>

              <li>
                You must not engage in any activities that may disrupt or
                interfere with the proper functioning of the Website.
              </li>
            </ul>
          </Box>

          <Box className="terms-points_text">
            <span className="terms-header_points">Intellectual Property:</span>
            <ul>
              <li>
                The Website and its content, including but not limited to text,
                graphics, logos, and images, are the property of the Company and
                protected by intellectual property laws.
              </li>

              <li>
                You may not reproduce, distribute, modify, or create derivative
                works of any part of the Website without prior written consent
                from the Company.
              </li>
            </ul>
          </Box>

          <Box className="terms-points_text">
            <span className="terms-header_points">Third-Party Links:</span>
            <ul>
              <li>
                The Website may contain links to third-party websites or
                resources for your convenience. We do not endorse or control the
                content, privacy practices, or availability of these external
                websites and are not responsible for their policies.
              </li>

              <li>
                You acknowledge and agree that your use of any linked websites
                is at your own risk.
              </li>
            </ul>
          </Box>

          <Box className="terms-points_text">
            <span className="terms-header_points">
              Limitation of Liability:
            </span>
            <ul>
              <li>
                The Company shall not be liable for any direct, indirect,
                incidental, special, consequential, or exemplary damages arising
                from your use of the Website or reliance on the content.
              </li>

              <li>
                The Company does not provide warranties or representations
                regarding the accuracy, reliability, or completeness of the
                information on the Website.
              </li>
            </ul>
          </Box>

          <Box className="terms-points_text">
            <span className="terms-header_points">Termination:</span>
            <ul style={{ listStyle: "none" }}>
              <li>
                The Company reserves the right to suspend or terminate your
                access to the Website at any time and for any reason without
                prior notice.
              </li>
            </ul>
          </Box>

          <Box className="terms-points_text">
            <span className="terms-header_points">Modifications to Terms:</span>
            <ul style={{ listStyle: "none" }}>
              <li>
                The Company may modify these Terms and Conditions at any time.
                Any changes will be effective immediately upon posting the
                updated Agreement on the Website. Your continued use of the
                Website after any modifications constitutes acceptance of the
                revised terms
              </li>

              <li style={{ marginTop: "12px" }}>
                By using the Fitness Related Details Showcasing website, you
                agree to comply with these Terms and Conditions. If you do not
                agree, please refrain from using the Website.
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

export default TermsCondition;
