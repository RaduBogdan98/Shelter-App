using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationGateway.Helpers
{
   public class Router : ControllerBase
   {
      #region Singleton
      private static readonly object mutex = new object();
      private static volatile Router instance = null;

      /// <summary>
      /// Multithreaded handling for the Singleton pattern
      /// </summary>
      public static Router Instance
      {
         get
         {
            if (instance == null)
            {
               lock (mutex)
               {
                  if (instance == null)
                  {
                     instance = new Router();
                  }
               }
            }

            return instance;
         }
      }
      #endregion

      private Router()
      {
         httpClient = new HttpClient();
         httpClient.DefaultRequestHeaders.Accept.Clear();
         httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
      }

      private HttpClient httpClient;

      public async Task<IActionResult> RouteRequest(string url, HttpRequest request)
      {
         try
         {
            using (HttpRequestMessage newRequest = new HttpRequestMessage(new HttpMethod(request.Method), url))
            {
               newRequest.Content = await ExtractContentFromRequest(request);
               using (HttpResponseMessage response = await httpClient.SendAsync(newRequest))
               {
                  return await CreateActionResult(response);
               }
            }
         }
         catch (Exception e)
         {
            throw new HttpRequestException(e.Message + "\n" + e.StackTrace);
         }
      }

      private async Task<HttpContent> ExtractContentFromRequest(HttpRequest request)
      {
         StringContent content;
         using (StreamReader reader = new StreamReader(request.Body, Encoding.UTF8))
         {
            content = new StringContent(await reader.ReadToEndAsync(), Encoding.UTF8, request.ContentType);
         }

         return content;
      }

      private async Task<IActionResult> CreateActionResult(HttpResponseMessage response)
      {
         ContentResult result = Content(await response.Content.ReadAsStringAsync());
         result.ContentType = response.Content.Headers.ContentType.ToString();
         result.StatusCode = (int)response.StatusCode;

         return result;
      }
   }
}
