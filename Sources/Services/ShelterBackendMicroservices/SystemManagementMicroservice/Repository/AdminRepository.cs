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

      public Task<IEnumerable<ProviderRequest>> GetAllProviderRequestsAsync()
      {
          throw new NotImplementedException();
      }

      public Task<ProviderRequest> GetProviderRequestByIdAsync(int providerRequestId)
      {
          throw new NotImplementedException();
      }

      public Task<bool> DeleteProviderRequestAsync(int providerRequestId)
      {
          throw new NotImplementedException();
      }
   }
}
