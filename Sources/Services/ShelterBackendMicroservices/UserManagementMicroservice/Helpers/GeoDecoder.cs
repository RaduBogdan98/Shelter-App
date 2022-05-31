using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace ApplicationGateway.Helpers
{
   public class GeoDecoder
   {
      public async static Task<GeoPoint> GetAdressLatLong(string address)
      {
         GeoPoint point = new GeoPoint();
         HttpClient httpClient = new HttpClient();
         httpClient.DefaultRequestHeaders.Accept.Clear();
         httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
         httpClient.DefaultRequestHeaders.UserAgent.Add(new ProductInfoHeaderValue("ShelterBackend", "1.0.0"));

         string BASE_URL = "http://nominatim.openstreetmap.org/";
         using (HttpRequestMessage newRequest = new HttpRequestMessage(new HttpMethod("GET"), BASE_URL + $"search?q={address}&format=json&addressdetails=1"))
         {
            using (HttpResponseMessage response = await httpClient.SendAsync(newRequest))
            {
               string stringContent = await response.Content.ReadAsStringAsync();
               JToken responseContent = JsonConvert.DeserializeObject<JArray>(stringContent)[0];

               point.Latitude = Double.Parse(responseContent["lat"].ToString());
               point.Longitude = Double.Parse(responseContent["lon"].ToString());
            }
         }

         return point;
      }
   }
}
