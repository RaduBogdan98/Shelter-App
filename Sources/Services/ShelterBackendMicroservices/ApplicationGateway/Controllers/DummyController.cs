using ApplicationGateway.Helpers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace ApplicationGateway.Controllers
{
   [Route("dummy")]
   [ApiController]
   public class DummyController : ControllerBase
   {
      private string filename = "myFile.txt";

      public DummyController()
      {
         if (!System.IO.File.Exists(filename))
         {
            System.IO.File.Create(filename).Close();
         }
      }

      #region Multithreading
      [HttpGet]
      [Route("read")]
      public IActionResult ReaderThread()
      {
         System.IO.File.ReadAllText(filename);
         return Ok("File Read! ");
      }

      [HttpGet]
      [Route("write")]
      public IActionResult WritterThread()
      {
         string writterText = "-Writter-" + System.Threading.Thread.CurrentThread.ManagedThreadId + "-\n";
         System.IO.File.WriteAllText(filename, writterText);
         return Ok("File Written! ");
      }

      [HttpGet]
      [Route("multiread")]
      public async Task<IActionResult> StartRoutedRead()
      {
         ContentResult result = Content("");
         for (int i = 0; i < 1000; i++)
         {
            result.Content += ((ContentResult)await Router.Instance.RouteRequest("https://localhost:8091/dummy/read", Request)).Content;
         }

         return result;
      }

      [HttpGet]
      [Route("multiwrite")]
      public async Task<IActionResult> StartRoutedWrite()
      {
         ContentResult result = Content("");
         for (int i = 0; i < 1000; i++)
         {
            result.Content += ((ContentResult)await Router.Instance.RouteRequest("https://localhost:8091/dummy/write", Request)).Content;
         }

         return result;
      }
      #endregion

      #region endpoint tests
      [HttpGet]
      [Route("user")]
      public IActionResult GetUser()
      {
         return Ok(new User());
      }

      [HttpGet]
      [Route("routedUser")]
      public async Task<IActionResult> GetUserThroughRouter()
      {
         return await Router.Instance.RouteRequest("https://localhost:8091/dummy/user", Request);
      }

      [HttpGet]
      [Route("error")]
      public IActionResult GetError()
      {
         return NotFound();
      }

      [HttpGet]
      [Route("routedError")]
      public async Task<IActionResult> GetRouterError()
      {
         return await Router.Instance.RouteRequest("https://localhost:8091/dummy/error", Request);
      }

      [HttpGet]
      [Route("bad")]
      public IActionResult GetBadRequest()
      {
         return BadRequest("Bad request dummy!!");
      }

      [HttpGet]
      [Route("routedBad")]
      public async Task<IActionResult> GetRouterBadRequest()
      {
         return await Router.Instance.RouteRequest("https://localhost:8091/dummy/bad", Request);
      }
      #endregion
   }

   class User
   {
      public User()
      {
         this.Id = 1;
         this.Name = "Radu";
         this.Email = "radu@gmail.com";
         this.Password = "parola";
         this.PhoneNumber = "0123456789";
      }

      public int Id { get; set; }
      public string Name { get; set; }
      public string Email { get; set; }
      public string Password { get; set; }
      public string PhoneNumber { get; set; }
   }
}
