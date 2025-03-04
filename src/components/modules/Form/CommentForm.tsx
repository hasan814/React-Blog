import { ICommentFormProps } from "../../../types";
import { SEND_COMMENT } from "../../../graphql/mutations";
import { useMutation } from "@apollo/client";
import { Typography } from "@mui/material";
import { useState } from "react";

import SubmitButton from "./SubmitButton";
import FormField from "./FormField";
import toast from "react-hot-toast";
import Grid from "@mui/material/Grid2";

const CommentForm = ({ slug }: ICommentFormProps) => {
  // ============= State =============
  const [formData, setFormData] = useState({ name: "", email: "", text: "" });

  // ============= Mutation =============
  const [sendComment, { loading, error }] = useMutation(SEND_COMMENT);

  // ============= Change Handler =============
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  // ============= Send Handler =============
  const sendHandler = async () => {
    try {
      await sendComment({ variables: { ...formData, slug } });

      setFormData({ name: "", email: "", text: "" });
      toast.success("اطلاعات با موفقیت ارسال شد!");
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "An unknown error occurred."
      );
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

      <FormField
        name="name"
        label="نام کاربری"
        value={formData.name}
        onChange={handleChange}
      />
      <FormField
        name="email"
        label="ایمیل"
        value={formData.email}
        onChange={handleChange}
      />
      <FormField
        name="text"
        label="متن کامنت"
        value={formData.text}
        onChange={handleChange}
        multiline
        minRows={4}
      />

      <SubmitButton onClick={sendHandler} loading={loading} />

      {error && (
        <Grid size={12} m={2}>
          <Typography color="error">
            {error.message || "خطا در ارسال نظر!"}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default CommentForm;
