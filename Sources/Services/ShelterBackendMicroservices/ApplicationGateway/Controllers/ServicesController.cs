using ApplicationGateway.Helpers;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Threading.Tasks;

namespace ApplicationGateway.Controllers
{
   [Route("services")]
   [ApiController]
   public class ServicesController : ControllerBase
   {
      private string BASE_URL = "https://localhost:8705";

      [HttpPost]
      [Route("create")]
      public async Task<IActionResult> CreateService()
      {
         return await Router.Instance.RouteRequest(BASE_URL + "", Request);
      }

      [HttpGet]
      [Route("getServices/{userId}")]
      public async Task<IActionResult> GetServices(int userId)
      {
         return await Router.Instance.RouteRequest(BASE_URL + "", Request);
      }

      [HttpGet]
      [Route("getUsedServices/{userId}")]
      public async Task<IActionResult> GetUsedServices(int userId)
      {
         return await Router.Instance.RouteRequest(BASE_URL + "", Request);
      }

      [HttpPost]
      [Route("updateService/{serviceId}")]
      public async Task<IActionResult> UpdateService(int serviceId)
      {
         return await Router.Instance.RouteRequest(BASE_URL + "", Request);
      }

      [HttpGet]
      [Route("setAvailability/{serviceId}/{isAvailable}")]
      public async Task<IActionResult> SetAvailability(int serviceId, bool isAvailable)
      {
         return await Router.Instance.RouteRequest(BASE_URL + "", Request);
      }

      [HttpDelete]
      [Route("deleteService/{serviceId}")]
      public async Task<IActionResult> DeleteService(int serviceId)
      {
         return await Router.Instance.RouteRequest(BASE_URL + "", Request);
      }
   }
}
