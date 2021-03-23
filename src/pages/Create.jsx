import { useState } from "react";
import { Typography, Button, Container, TextField } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import SendIcon from "@material-ui/icons/Send";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block"
  }
});

const Create = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }

    if (details === "") {
      setDetailsError(true);
    }

    if (title && details) {
      console.log(title, details, category);

      setTitle("");
      setDetails("");
    }
  };

  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          variant="outlined"
          label="Note Title"
          color="secondary"
          fullWidth
          required
          error={titleError}
          value={title}
        ></TextField>
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          variant="outlined"
          label="Details"
          color="secondary"
          fullWidth
          required
          multiline
          rows={4}
          error={detailsError}
          value={details}
        ></TextField>
        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel control={<Radio />} label="Money" value="money" />
            <FormControlLabel control={<Radio />} label="Todos" value="todos" />
            <FormControlLabel
              control={<Radio />}
              label="Reminders"
              value="reminders"
            />
            <FormControlLabel control={<Radio />} label="Work" value="work" />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
          typography="fontWeightBold"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
