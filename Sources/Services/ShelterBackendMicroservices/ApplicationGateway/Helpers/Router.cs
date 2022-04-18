using Microsoft.AspNetCore.Http;
using System;
using System.IO;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationGateway.Helpers
{
   public class Router
   {
      #region Singleton
      private static Router instance = null;

      internal static Router Instance
      {
         get
         {
            if(instance == null)
            {
               instance = new Router();
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

      internal async Task<HttpResponseMessage> RouteRequest(string url, HttpRequest request)
      {
         try
         {
            using (HttpRequestMessage newRequest = new HttpRequestMessage(new HttpMethod(request.Method), url))
            {
               newRequest.Content = await extractContentFromRequest(request);
               using (HttpResponseMessage response = await httpClient.SendAsync(newRequest))
               {
                  return response;
               }
            }
         }
         catch (Exception e)
         {
            throw new HttpRequestException(e.Message + "\n" + e.StackTrace);
         }
      }

      private async Task<HttpContent> extractContentFromRequest(HttpRequest request)
      {
         StringContent content;
         using (StreamReader reader = new StreamReader(request.Body, Encoding.UTF8))
         {
            content = new StringContent(await reader.ReadToEndAsync(), Encoding.UTF8, request.ContentType);
         }

         return content;
      }
   }
}
