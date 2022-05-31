using Microsoft.AspNetCore.Mvc;
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace SystemManagementMicroservice.Helpers
{
   public class HttpUtils : ControllerBase
   {
      #region Singleton
      private static readonly object mutex = new object();
      private static volatile HttpUtils instance = null;

      /// <summary>
      /// Multithreaded handling for the Singleton pattern
      /// </summary>
      public static HttpUtils Instance
      {
         get
         {
            if (instance == null)
            {
               lock (mutex)
               {
                  if (instance == null)
                  {
                     instance = new HttpUtils();
                  }
               }
            }

            return instance;
         }
      }
      #endregion

      private HttpUtils()
      {
         httpClient = new HttpClient();
         httpClient.DefaultRequestHeaders.Accept.Clear();
         httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
      }

      private HttpClient httpClient;

      public async Task<ContentResult> RouteRequest(string url, string requestMethod, string requestBody = "")
      {
         try
         {
            using (HttpRequestMessage newRequest = new HttpRequestMessage(new HttpMethod(requestMethod), url))
            {
               newRequest.Content = new StringContent(requestBody, Encoding.UTF8, "application/json");
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

      private async Task<ContentResult> CreateActionResult(HttpResponseMessage response)
      {
         ContentResult result = Content(await response.Content.ReadAsStringAsync());
         result.ContentType = response.Content.Headers.ContentType?.ToString();
         result.StatusCode = (int)response.StatusCode;

         return result;
      }
   }
}
