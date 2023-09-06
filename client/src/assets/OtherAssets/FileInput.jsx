import React, { useRef, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import ButtonBase from "@material-ui/core/ButtonBase";
// import FileUploadIcon from "@material-ui/icons/CloudUpload";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { ThemeProvider, Button, Typography } from "@mui/material";
import mainTheme from "../theme/mainTheme";

const FileInput = ({ label, onChange, error, name, helperText,fileName }) => {
  const ref = useRef();
  const classes = useStyles();

  const [attachment, setAttachment] = useState(null);

  const handleChange = (event) => {
    const files = Array.from(event.target.files);
    const [file] = files;
    setAttachment(file);

    if (!!onChange) onChange({ target: { value: file, name: name } });
  };


  return (
    <ThemeProvider theme={mainTheme}>
      <div className={classes.container}>
        <Card className={classes.card}>
          <CardContent>
         
            <Typography >{fileName}</Typography>
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
                id={name}
                style={{ overflow: "hidden", width: "100%", height: "100%" }}
                error={error}
              />
            </Button>
            {error && <Typography variant="body2" color="error">{helperText}</Typography>}
          </CardContent>
        </Card>
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
    background: "none !important",
    border: "none !important",
    boxShadow: "none !important",
  },
}));

export default FileInput;
