import prisma from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import FormSubmitButton from "../components/FormSubmitButton";
import { getServerSession} from "next-auth";
import {authOptions} from "../api/auth/[...nextauth]/route"
export const metadata = {
    title: "Add Product - Customiza Aí"
}

async function addProduct(formData: FormData) {
  "use server";
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields");
  }


  await prisma.product.create({
    data: {name, description, imageUrl, price}
  });
  redirect("/");
}

export default async function AddProducPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }
  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">Adicionar Produto</h1>
      <form action={addProduct}>
        <input
          required
          name="name"
          placeholder="Nome"
          className="input input-bordered mb-3 w-full"
        />
        <textarea
          required
          name="description"
          placeholder="Descrição"
          className="textarea textarea-bordered mb-3 w-full"
        />
        <input
          required
          name="imageUrl"
          placeholder="Url da imagem"
          type="url"
          className="input input-bordered mb-3 w-full"
        />
        <input
          required
          name="price"
          placeholder="Preço"
          type="number"
          className="input input-bordered mb-3 w-full"
        />
      
      <FormSubmitButton className="btn-block">
        Adiconar Produto
      </FormSubmitButton>
      </form>
    </div>
  );
}
