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

namespace ApplicationGateway.Controllers
{
   [Route("users")]
   [ApiController]
   public class UsersController : ControllerBase
   {
      private string BASE_URL = "https://localhost:8629";

      [HttpGet]
      [Route("login/{email}/{password}")]
      public async Task<IActionResult> Login(string email, string password)
      {
         return await Router.Instance.RouteRequest(BASE_URL + "", Request);
      }

      [HttpPost]
      [Route("signup")]
      public async Task<IActionResult> SignUp()
      {
         return await Router.Instance.RouteRequest(BASE_URL + "", Request);
      }

      [HttpPost]
      [Route("update")]
      public async Task<IActionResult> Update()
      {
         return await Router.Instance.RouteRequest(BASE_URL + "", Request);
      }
   }
}
