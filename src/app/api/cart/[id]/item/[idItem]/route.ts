import { backendApi } from "@/utils/api";

export async function PATCH(request: Request) {
  try {
    const { params } = await request.json();

    const { pathname } = new URL(request.url);

    const id = pathname.split("/").splice(3, 1)[0];
    const idItem = pathname.split("/").splice(5, 1)[0];

    const { data } = await backendApi.patch(
      `/cart/${id}/item/${idItem}`,
      params
    );

    return Response.json(data);
  } catch (error) {
    return Response.json("Ocorreu um erro na requisição", {
      status: 400,
    });
  }
}

export async function DELETE(request: Request) {
  try {
    const { pathname } = new URL(request.url);

    const id = pathname.split("/").splice(3, 1)[0];
    const idItem = pathname.split("/").splice(5, 1)[0];

    const { data } = await backendApi.delete(`/cart/${id}/item/${idItem}`);

    return Response.json(data);
  } catch (error) {
    return Response.json("Ocorreu um erro na requisição", {
      status: 400,
    });
  }
}
