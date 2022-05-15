using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SystemManagementMicroservice.DataAccess;
using SystemManagementMicroservice.Model;

namespace SystemManagementMicroservice.Repository
{
   public class AdminRepository : IAdminRepository
   {
      private readonly ProviderRequestContext context;

      public AdminRepository(ProviderRequestContext context)
      {
         this.context = context;
      }

      public Task<bool> CreateProviderRequest(int userId, string company, string address, string reason)
      {
         throw new NotImplementedException();
      }

      public Task<List<ProviderRequest>> GetProviderRequests()
      {
         throw new NotImplementedException();
      }

      public Task<bool> SendRequestResolution(int requestId, bool resolutionValue)
      {
         throw new NotImplementedException();
      }
   }
}
