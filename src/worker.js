export default {
  async fetch(request, env) {

    const url = new URL(request.url);

    // BLACK CODE™ API TEST
    if (url.pathname === "/api/status") {

      return Response.json({
        status: "online",
        project: "VELVER MOTOS",
        infrastructure: "KNJO BLACK CODE™",
        edge: "Cloudflare Workers"
      });

    }

    // Servir assets estáticos
    return env.ASSETS.fetch(request);

  }
};
