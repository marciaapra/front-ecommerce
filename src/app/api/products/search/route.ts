import { backendApi } from "@/utils/api";

export async function GET() {
  try {
    const { data } = await backendApi.get("/products");

    return Response.json(data);
  } catch (error) {
    return Response.json("Ocorreu um erro na requisição", {
      status: 400,
    });
  }
}
