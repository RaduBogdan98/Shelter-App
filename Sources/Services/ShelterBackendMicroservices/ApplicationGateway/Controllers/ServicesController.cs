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
      public async Task<HttpResponseMessage> CreateService()
      {
         return null;
      }

      [HttpGet]
      [Route("getServices/{userId}")]
      public async Task<HttpResponseMessage> GetServices(int userId)
      {
         return await Router.Instance.RouteRequest(BASE_URL + "", Request);
      }

      [HttpGet]
      [Route("getUsedServices/{userId}")]
      public async Task<HttpResponseMessage> GetUsedServices(int userId)
      {
         return await Router.Instance.RouteRequest(BASE_URL + "", Request);
      }

      [HttpGet]
      [Route("setAvailability/{serviceId}/{isAvailable}")]
      public async Task<HttpResponseMessage> SetAvailability(int serviceId, bool isAvailable)
      {
         return await Router.Instance.RouteRequest(BASE_URL + "", Request);
      }

      [HttpDelete]
      [Route("deleteService/{serviceId}")]
      public async Task<HttpResponseMessage> DeleteService(int serviceId)
      {
         return await Router.Instance.RouteRequest(BASE_URL + "", Request);
      }
   }
}
