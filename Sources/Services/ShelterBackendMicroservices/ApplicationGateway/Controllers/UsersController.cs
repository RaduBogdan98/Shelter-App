using ApplicationGateway.Helpers;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Threading.Tasks;
using UserManagementMicroservice.Domain.Dto;

namespace ApplicationGateway.Controllers
{
   [Route("Gateway/Users")]
   [ApiController]
   [ApiExplorerSettings(GroupName = "gateway")]
   public class UsersController : ControllerBase
   {
      private string BASE_URL = "https://localhost:8629/Users/";

      [HttpPost]
      [Route("Register")]
      public async Task<IActionResult> RegisterUserAsync([FromBody] UserDto user)
      {
          return await Router.Instance.RouteRequest(BASE_URL + "Register", Request, JsonConvert.SerializeObject(user));
      }

      [HttpGet]
      [Route("Authenticate/{email}/{password}")]
      public async Task<IActionResult> AuthenticateUserAsync(string email, string password)
      {
         return await Router.Instance.RouteRequest(BASE_URL + $"Authenticate/{email}/{password}", Request);
      }

      [HttpPut]
      [Route("Update")]
      public async Task<IActionResult> UpdateUserAsync([FromBody] UserDto user)
      {
         return await Router.Instance.RouteRequest(BASE_URL + "Update", Request, JsonConvert.SerializeObject(user));
      }
   }
}
