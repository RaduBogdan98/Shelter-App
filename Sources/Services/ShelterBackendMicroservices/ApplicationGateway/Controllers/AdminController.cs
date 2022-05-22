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
      public async Task<IActionResult> GetAllProviderRequestsAsync()
      {
         return await Router.Instance.RouteRequest(BASE_URL, Request);
      }

      [HttpPost]
      [Route("acceptRequest/{providerRequestId}")]
      public async Task<IActionResult> AcceptProviderRequestAsync(int providerRequestId)
      {
         return await Router.Instance.RouteRequest(BASE_URL + providerRequestId, Request);
      }

      [HttpDelete]
      [Route("deleteRequest/{providerRequestId}")]
      public async Task<IActionResult> DeleteProviderRequestAsync(int providerRequestId)
      {
          return await Router.Instance.RouteRequest(BASE_URL + providerRequestId, Request);
      }
    }
}
