"use client";

import { useFormState } from "react-dom";

import { createPost } from "@/lib/actions";
import { Category } from "@/lib/definitions";

import FormSubmitButton from "../form-submit-button";

type CreateBlogPostFormProps = {
  categories: Category[];
};

function CreateBlogPostForm({ categories }: CreateBlogPostFormProps) {
  const [formState, formAction] = useFormState(createPost, undefined);

  return (
    <form className="flex flex-col gap-10" action={formAction}>
      <div>
        <label htmlFor="imageSrc">Immagine</label>
        <input
          type="text"
          id="imageSrc"
          name="imageSrc"
          placeholder="Inserisci l'immagine di copertina"
          required
        />
      </div>

      <div>
        <label htmlFor="slug">Slug</label>
        <input
          type="text"
          id="slug"
          name="slug"
          placeholder="Inserisci uno slug"
          required
        />
      </div>

      <div>
        <label htmlFor="title">Titolo</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Inserisci il titolo"
          required
        />
      </div>

      <div>
        <label htmlFor="summary">Riassunto</label>
        <textarea
          id="summary"
          name="summary"
          placeholder="Inserisci un riassunto"
          required
        />
      </div>

      <div>
        <label htmlFor="content">Contenuto</label>
        <textarea
          id="content"
          name="content"
          placeholder="Inserisci il contenuto"
          required
        />
      </div>

      <div>
        <label htmlFor="category">Categoria</label>
        <select id="category" name="category" required>
          {categories.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      {!!formState?.error && (
        <div className="border border-red-300 bg-red-500/50 p-4 rounded-md">
          {formState.error}
        </div>
      )}

      <FormSubmitButton />
    </form>
  );
}

export default CreateBlogPostForm;
