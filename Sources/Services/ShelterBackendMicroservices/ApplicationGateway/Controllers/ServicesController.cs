using ApplicationGateway.Helpers;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using ServiceManagementMicroservice.Domain.Dto;
using Newtonsoft.Json;

namespace ApplicationGateway.Controllers
{
   [Route("Gateway/Services")]
   [ApiController]
   [ApiExplorerSettings(GroupName = "gateway")]
   public class ServicesController : ControllerBase
   {
      private string BASE_URL = "https://localhost:8705/Services/";

      [HttpPost]
      [Route("Create")]
      public async Task<IActionResult> CreateServiceAsync([FromBody] ServiceDto serviceRequestDto)
      {
         return await Router.Instance.RouteRequest(BASE_URL + "Create", Request, JsonConvert.SerializeObject(serviceRequestDto));
      }

      [HttpPost]
      [Route("UseService/{userId}/{serviceId}")]
      public async Task<IActionResult> UseServiceAsync(int userId, int serviceId)
      {
         return await Router.Instance.RouteRequest(BASE_URL + $"UseService/{userId}/{serviceId}", Request);
      }

      [HttpGet]
      [Route("GetAllServices")]
      public async Task<IActionResult> GetAllServicesAsync()
      {
         return await Router.Instance.RouteRequest(BASE_URL + "GetAllServices", Request);
      }

      [HttpGet]
      [Route("GetOwnedServices/{ownerId}")]
      public async Task<IActionResult> GetServicesByOwnerIdAsync(int ownerId)
      {
         return await Router.Instance.RouteRequest(BASE_URL + $"GetOwnedServices/{ownerId}", Request);
      }

      [HttpGet]
      [Route("GetUsedServices/{userId}")]
      public async Task<IActionResult> GetServicesByUserIdAsync(int userId)
      {
         return await Router.Instance.RouteRequest(BASE_URL + $"GetUsedServices/{userId}", Request);
      }

      [HttpPut]
      [Route("UpdateService")]
      public async Task<IActionResult> UpdateServiceAsync([FromBody] ServiceDto serviceUpdateRequestDto)
      {
         return await Router.Instance.RouteRequest(BASE_URL + "UpdateService", Request, JsonConvert.SerializeObject(serviceUpdateRequestDto));
      }

      [HttpDelete]
      [Route("DeleteService/{serviceId}")]
      public async Task<IActionResult> DeleteService(int serviceId)
      {
         return await Router.Instance.RouteRequest(BASE_URL + $"DeleteService/{serviceId}", Request);
      }
   }
}
