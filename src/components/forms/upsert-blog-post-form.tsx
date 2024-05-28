"use client";

import { useFormState } from "react-dom";

import { createPost, updatePost } from "@/lib/actions";
import { Category, Post } from "@/lib/definitions";

import FormFieldError from "../form-field-error";
import FormSubmitButton from "../form-submit-button";

type CreateBlogPostFormProps = {
  categories: Category[];
  defaultValues?: Post;
  slug?: string;
};

function CreateBlogPostForm({
  categories,
  defaultValues,
  slug,
}: CreateBlogPostFormProps) {
  const [formState, formAction] = useFormState(
    slug ? updatePost.bind(null, slug) : createPost,
    undefined,
  );

  return (
    <form className="flex flex-col gap-10" action={formAction}>
      <div>
        <label htmlFor="imageSrc">Immagine</label>
        <input
          type="text"
          id="imageSrc"
          name="imageSrc"
          placeholder="Inserisci l'immagine di copertina"
          defaultValue={defaultValues?.imageSrc}
          required
        />
        <FormFieldError labels={formState?.errors?.imageSrc} />
      </div>

      <div>
        <label htmlFor="slug">Slug</label>
        <input
          type="text"
          id="slug"
          name="slug"
          placeholder="Inserisci uno slug"
          defaultValue={defaultValues?.slug}
          required
        />
        <FormFieldError labels={formState?.errors?.slug} />
      </div>

      <div>
        <label htmlFor="title">Titolo</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Inserisci il titolo"
          defaultValue={defaultValues?.title}
          required
        />
        <FormFieldError labels={formState?.errors?.title} />
      </div>

      <div>
        <label htmlFor="summary">Riassunto</label>
        <textarea
          id="summary"
          name="summary"
          placeholder="Inserisci un riassunto"
          defaultValue={defaultValues?.summary}
          required
        />
        <FormFieldError labels={formState?.errors?.summary} />
      </div>

      <div>
        <label htmlFor="content">Contenuto</label>
        <textarea
          id="content"
          name="content"
          placeholder="Inserisci il contenuto"
          defaultValue={defaultValues?.content}
          required
        />
        <FormFieldError labels={formState?.errors?.content} />
      </div>

      <div>
        <label htmlFor="category">Categoria</label>
        <select
          id="category"
          name="category"
          required
          defaultValue={defaultValues?.category.id}
        >
          {categories.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
        <FormFieldError labels={formState?.errors?.category} />
      </div>

      {!!formState?.errorMessage && (
        <div className="border border-red-300 bg-red-500/50 p-4 rounded-md">
          {formState.errorMessage}
        </div>
      )}

      <FormSubmitButton />
    </form>
  );
}

export default CreateBlogPostForm;
