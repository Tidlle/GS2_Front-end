const BASE_URL =
  (import.meta.env.VITE_API_URL ||
    "https://sprint4-java-1.onrender.com").replace(/\/+$/, "");

type HttpResp<T> = {
  ok: boolean;
  status: number;
  data?: T;
  errorText?: string;
};

async function http<T>(
  path: string,
  init?: RequestInit
): Promise<HttpResp<T>> {
  const endpoint = `${BASE_URL}${
    path.startsWith("/") ? path : "/" + path
  }`;

  try {
    const res = await fetch(endpoint, {
      headers: { "Content-Type": "application/json" },
      ...init,
    });

    const text = await res.text();
    const data = text ? JSON.parse(text) : undefined;

    return { ok: res.ok, status: res.status, data };
  } catch (err: any) {
    return { ok: false, status: 500, errorText: err.message };
  }
}

/* =======================
      TIPOS DA API
======================= */

export interface Compatibilidade {
  area: string;
  valor: number;
}

export interface ResultadoPerfil {
  compatibilidades: Compatibilidade[];
  proximoPasso: string;
}

export interface SimuladorRequest {
  nome: string;
  email: string;
  areaInteresse: string;
  experiencia: string;
  objetivo: string;
  horasEstudo: string;
}

export interface Trilha {
  id: number;
  titulo: string;
  area: string;
  nivel: string;
  descricao: string;
  duracaoHoras: number;
  focoPrincipal: string;
  objetivos: string[];
  competencias: string[];
  odsRelacionados: string[];
}

/* =======================
      API EXPORTADA
======================= */

export const api = {
  // ----- TRILHAS -----
  listarTrilhas: () => http<Trilha[]>("/trilhas"),

  obterTrilha: (id: number) => http<Trilha>(`/trilhas/${id}`),

  // ----- SIMULADOR -----
  enviarSimulador: (payload: SimuladorRequest) =>
    http<ResultadoPerfil>("/simulador/diagnostico", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};
