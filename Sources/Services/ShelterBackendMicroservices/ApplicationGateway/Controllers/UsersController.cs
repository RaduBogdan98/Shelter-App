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
   [Route("users")]
   [ApiController]
   public class UsersController : ControllerBase
   {
      private string BASE_URL = "https://localhost:8629";

      [HttpPost]
      [Route("register")]
      public async Task<IActionResult> RegisterUserAsync([FromBody] UserDto user)
      {
          return await Router.Instance.RouteRequest(BASE_URL + "", Request);
      }

      [HttpGet]
      [Route("authenticate")]
      public async Task<IActionResult> AuthenticateUserAsync(string email, string password)
      {
         return await Router.Instance.RouteRequest(BASE_URL + "", Request);
      }
   }
}
