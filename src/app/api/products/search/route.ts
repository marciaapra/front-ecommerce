import { backendApi } from "@/utils/api";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search");

    const { data } = await backendApi.get("/products/search", {
      params: {
        search,
      },
    });

    return Response.json(data);
  } catch (error) {
    return Response.json("Ocorreu um erro na requisição", {
      status: 400,
    });
  }
}
