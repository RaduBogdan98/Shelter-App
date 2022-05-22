using ApplicationGateway.Helpers;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Threading.Tasks;
using ServiceManagementMicroservice.Domain.Dto;

namespace ApplicationGateway.Controllers
{
   [Route("services")]
   [ApiController]
   public class ServicesController : ControllerBase
   {
      private string BASE_URL = "https://localhost:8705";

      [HttpPost]
      [Route("create")]
      public async Task<IActionResult> CreateServiceAsync([FromBody] ServiceDto serviceRequestDto)
      {
         return await Router.Instance.RouteRequest(BASE_URL + "", Request);
      }

      [HttpGet]
      [Route("getServices")]
      public async Task<IActionResult> GetAllServicesAsync()
      {
         return await Router.Instance.RouteRequest(BASE_URL + "", Request);
      }

      [HttpGet]
      [Route("getServices/{ownerId}")]
      public async Task<IActionResult> GetServicesByOwnerIdAsync(int ownerId)
      {
          return await Router.Instance.RouteRequest(BASE_URL + "", Request);
      }

      [HttpGet]
      [Route("getUsedServices/{userId}")]
      public async Task<IActionResult> GetServicesByUserIdAsync(int userId)
      {
         return await Router.Instance.RouteRequest(BASE_URL + "", Request);
      }

      [HttpPut]
      [Route("updateService")]
      public async Task<IActionResult> UpdateServiceAsync([FromBody] ServiceDto serviceUpdateRequestDto)
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
