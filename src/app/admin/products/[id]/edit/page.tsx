import React from "react";
import { ProductForm } from "../../_components/ProductForm";
import db from "@/db/db";
import { PageHeader } from "@/app/admin/_components/PageHeader";

const EditProductPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const product = await db.product.findUnique({ where: { id } });
  return (
    <>
      <PageHeader>Add EditProductPage</PageHeader>
      <ProductForm product={product} />
    </>
  );
};

export default EditProductPage;
