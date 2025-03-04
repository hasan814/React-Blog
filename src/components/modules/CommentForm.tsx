import { Button, TextField, Typography } from "@mui/material";
import { ICommentFormProps } from "../../types";
import { SEND_COMMENT } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";
import { useState } from "react";

import toast from "react-hot-toast";
import Grid from "@mui/material/Grid2";

const CommentForm = ({ slug }: ICommentFormProps) => {
  // ============= State =============
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  // ============= Mutation =============
  const [sendComment, { loading, error }] = useMutation(SEND_COMMENT);

  // ============= Send Function =============
  const sendHandler = async () => {
    try {
      await sendComment({ variables: { name, email, text, slug } });

      setName("");
      setEmail("");
      setText("");

      toast.success("اطلاعات با موفقیت ارسال شد!");
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("An unknown error occurred.");
      }
    }
  };

  // ============= Rendering =============
  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid size={12} m={2}>
        <Typography variant="h6" fontWeight={700} color="primary">
          فرم ارسال کامنت
        </Typography>
      </Grid>
      <Grid size={12} m={2}>
        <TextField
          value={name}
          label="نام کاربری"
          variant="outlined"
          sx={{ width: "100%" }}
          onChange={(event) => setName(event.target.value)}
        />
      </Grid>
      <Grid size={12} m={2}>
        <TextField
          value={email}
          label="ایمیل"
          variant="outlined"
          sx={{ width: "100%" }}
          onChange={(event) => setEmail(event.target.value)}
        />
      </Grid>
      <Grid size={12} m={2}>
        <TextField
          multiline
          minRows={4}
          value={text}
          label="متن کامنت"
          variant="outlined"
          sx={{ width: "100%" }}
          onChange={(event) => setText(event.target.value)}
        />
      </Grid>
      <Grid size={12} m={2}>
        <Button variant="contained" onClick={sendHandler} disabled={loading}>
          {loading ? "در حال ارسال..." : "ارسال"}
        </Button>
      </Grid>
      {error && (
        <Grid size={12} m={2}>
          <Typography color="error">خطا در ارسال نظر!</Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default CommentForm;
