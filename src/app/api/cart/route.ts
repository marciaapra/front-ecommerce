import { backendApi } from "@/utils/api";

export async function POST(request: Request) {
  try {
    const { params } = await request.json();

    const { data } = await backendApi.post("/cart", params);

    return Response.json(data);
  } catch (error) {
    return Response.json("Ocorreu um erro na requisição", {
      status: 400,
    });
  }
}
