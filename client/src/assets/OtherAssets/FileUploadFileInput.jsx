import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import { ThemeProvider,Button } from "@mui/material";
import mainTheme from "../theme/mainTheme";

const FileInput = ({ label, onChange, error, name }) => {
  const ref = useRef();
  const classes = useStyles();

  const [attachment, setAttachment] = useState(null);

  const handleChange = (event) => {
    const files = event.target.files; // Access the FileList object directly

    if (files && files.length > 0) {
      onChange(files); // Pass the FileList object to the onChange callback
      setAttachment(files[0]); // Update attachment with the first selected file
    }
  };

  const truncatedLabel = attachment ? attachment.name.split(" ") : [];

  return (
    <ThemeProvider theme={mainTheme}>
      <div className={classes.container}>
        <div className={classes.card}>
          <div className={classes.content}>
            {truncatedLabel.length > 0 && (
              <label htmlFor="fileInput" className={classes.label}>
                {truncatedLabel}
              </label>
            )}

            <Button
            
              component="label"
              onKeyDown={(e) => e.keyCode === 32 && ref.current?.click()}
            >
              Upload File
              <input
                ref={ref}
                type="file"
                accept=""
                hidden
                onChange={handleChange}
                id="fileInput"
                style={{
                  overflow: "hidden",
                  width: "100%",
                  height: "100%",
                  padding: "0px",
                }}
              />
            </Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
  },
  card: {
    background: "none",
    border: "none",
    boxShadow: "none",
  },
  content: {
    padding: theme.spacing(1),
  },
  label: {
    fontSize: "1rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  
}));

export default FileInput;
