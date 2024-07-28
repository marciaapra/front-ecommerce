import { backendApi } from "@/utils/api";

export async function POST(request: Request) {
  try {
    const { params } = await request.json();

    const { pathname } = new URL(request.url);

    const id = pathname.split("/").splice(3, 1)[0];

    const { data } = await backendApi.post(`/cart/${id}/item`, params);

    return Response.json(data);
  } catch (error) {
    return Response.json("Ocorreu um erro na requisição", {
      status: 400,
    });
  }
}
