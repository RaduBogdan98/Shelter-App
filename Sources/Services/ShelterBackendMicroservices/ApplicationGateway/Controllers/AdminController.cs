using ApplicationGateway.Helpers;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Threading.Tasks;

namespace ApplicationGateway.Controllers
{
   [Route("admin")]
   [ApiController]
   public class AdminController : ControllerBase
   {
      private string BASE_URL = "https://localhost:8086/";

      [HttpGet]
      [Route("getProviderRequests")]
      public async Task<IActionResult> GetRequests()
      {
         return await Router.Instance.RouteRequest(BASE_URL, Request);
      }

      [HttpPost]
      [Route("resolveRequest/{requestId}/{isAccepted}")]
      public async Task<IActionResult> ResolveRequest(int requestId, bool isAccepted)
      {
         return await Router.Instance.RouteRequest(BASE_URL + requestId + "/" + isAccepted, Request);
      }
   }
}
