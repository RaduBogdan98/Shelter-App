using ApplicationGateway.Helpers;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Threading.Tasks;
using SystemManagementMicroservice.Domain.Dto;

namespace ApplicationGateway.Controllers
{
   [Route("Gateway/Admin")]
   [ApiController]
   [ApiExplorerSettings(GroupName = "gateway")]
   public class AdminController : ControllerBase
   {
      private string BASE_URL = "https://localhost:8086/Admin/";

      [HttpGet]
      [Route("GetProviderRequests")]
      public async Task<IActionResult> GetAllProviderRequestsAsync()
      {
         return await Router.Instance.RouteRequest(BASE_URL + "GetRequests", Request);
      }

      [HttpPost]
      [Route("CreateRequest")]
      public async Task<IActionResult> CreateProviderRequestAsync([FromBody] ProviderRequestDto providerRequestDto)
      {
         return await Router.Instance.RouteRequest(BASE_URL + "CreateRequest", Request, JsonConvert.SerializeObject(providerRequestDto));
      }


      [HttpPut]
      [Route("AcceptRequest/{providerRequestId}")]
      public async Task<IActionResult> AcceptProviderRequestAsync(int providerRequestId)
      {
         return await Router.Instance.RouteRequest(BASE_URL + $"AcceptRequest/{providerRequestId}", Request);
      }

      [HttpDelete]
      [Route("DeleteRequest/{providerRequestId}")]
      public async Task<IActionResult> DeleteProviderRequestAsync(int providerRequestId)
      {
         return await Router.Instance.RouteRequest(BASE_URL + $"DeleteRequest/{providerRequestId}", Request);
      }
   }
}
