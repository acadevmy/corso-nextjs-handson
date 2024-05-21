import { createPost } from "@/lib/actions";
import { fetchCategories } from "@/lib/data";

async function CreateBlogPostForm() {
  const categories = await fetchCategories();

  return (
    <form className="flex flex-col gap-10" action={createPost}>
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

      <button type="submit" className="btn btn-primary">
        Invia
      </button>
    </form>
  );
}

export default CreateBlogPostForm;
