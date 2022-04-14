using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApplicationGateway.Controllers
{
   [Route("[controller]")]
   [ApiController]
   public class UsersController : ControllerBase
   {
      [HttpGet]
      [Route("login")]
      public string Login()
      {
         return "User is in";
      }

      [HttpPost]
      [Route("signup")]
      public string SignUp()
      {
         return "User sign up";
      }

      [HttpPost]
      [Route("update")]
      public string Update()
      {
         return "User is updated";
      }
   }
}
