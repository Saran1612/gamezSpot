import React from "react";
import { Box } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Switch from "@mui/material/Switch";

const NotifyTab = () => {
  const [state, setState] = React.useState({
    gilad: true,
    jason: true,
    antoine: true,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Box>
      <span className="notify-header_text">My activity settings</span>

      <Box sx={{ margin: "20px 0px" }}>
        <span className="notify-subheading_text">
          Stay up to date with notification on activity that involves you
          including mentions, messages, replies to your bids, new items, sale
          and administrative updates
        </span>
      </Box>

      <Box>
        <FormControl
          component="fieldset"
          variant="standard"
          className="notify-switch-group"
        >
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={state.gilad}
                  onChange={handleChange}
                  name="gilad"
                />
              }
              label="Like & Follows Notifications"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={state.jason}
                  onChange={handleChange}
                  name="jason"
                />
              }
              label="Post, Comments & Replies Notifications"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={state.antoine}
                  onChange={handleChange}
                  name="antoine"
                />
              }
              label="New Product Notifications"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default NotifyTab;
