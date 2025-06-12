import React, { use } from "react";
import { get, useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "..";
import { data, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { appwriteScrvice } from "../../appwrite/config";

const PostForm = ({ post }) => {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
        category: post?.category || "",
      },
    });

  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? await appwriteScrvice.uploadFile(data.image[0])
        : null;
      if (file) {
        appwriteScrvice.deleteFile(post.image);
      }
      const dbPost = await appwriteScrvice.updatePost(post.$id, {
        ...data,
        image: file ? file.$id : undefined,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      } else {
        const file = await appwriteScrvice.uploadFile(data.image[0]);
        if (file) {
          const field = file.$id;
          data.image = field;
          const dbPost = await appwriteScrvice.createPost({
            ...data,
            userId: userData.$id,
          });

          if (dbPost) {
            navigate(`/post/${dbPost.$id}`);
          }
        }
      }
    }
  };

  const slugTrnsform = useCallback((value) => {
    if (value && typeof value === "string") {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
    }
    return "";
  }, []);

  return (
    <form>
      <div>
        <Input
          label="Title: "
          placeholder="Title"
          className="mb-4 "
          {...register("title", { required: true })}
        />
        <Input
          label="Slug: : "
          placeholder="Slug"
          className="mb-4 "
          {...register("title", { required: true })}
          onInput={(e) => {
            const value = e.currentTarget.value;
            const slug = slugTrnsform(value);
            setValue("slug", slug),
              {
                shouldValidate: true,
              };
          }}
        />
        <RTE
          name={"content"}
          control={control}
          label={"Content: "}
          defaultValue={getValues("content")}
        />
      </div>
      <div>
        <Input
          label="Image: "
          type="file"
          className="mb-4 "
          accept="image/png, image/jpeg, image/jpg image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteScrvice.getFilePreview(post.image)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}

        <Select
          options={["active", "inactive"]}
          label="Status: "
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
          onClick={handleSubmit(submit)}
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
