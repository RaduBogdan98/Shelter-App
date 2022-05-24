using ApplicationGateway.Helpers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;
using UserManagementMicroservice.Domain.Dto;

namespace ApplicationGateway.Controllers
{
   [Route("Users")]
   [ApiController]
   [ApiExplorerSettings(GroupName = "gateway")]
   public class UsersController : ControllerBase
   {
      private string BASE_URL = "https://localhost:8629/Users/";

      [HttpPost]
      [Route("Register")]
      public async Task<IActionResult> RegisterUserAsync([FromBody] UserDto user)
      {
          return await Router.Instance.RouteRequest(BASE_URL + "Register", Request);
      }

      [HttpGet]
      [Route("Authenticate/{email}/{password}")]
      public async Task<IActionResult> AuthenticateUserAsync(string email, string password)
      {
         return await Router.Instance.RouteRequest(BASE_URL + $"Authenticate/{email}/{password}", Request);
      }
   }
}
