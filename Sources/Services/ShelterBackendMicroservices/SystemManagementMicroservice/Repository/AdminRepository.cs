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
         return Task.FromResult(context.ProviderRequests.AsEnumerable());
      }

      public Task<ProviderRequest> GetProviderRequestByIdAsync(int providerRequestId)
      {
         return Task.FromResult(context.ProviderRequests.FirstOrDefault(x => x.Id == providerRequestId));
      }

      public async Task<bool> DeleteProviderRequestAsync(int providerRequestId)
      {
         var result = 0;

         try
         {
            context.Remove(context.ProviderRequests.FirstOrDefault(x => x.Id == providerRequestId));
            result = await context.SaveChangesAsync();
         }
         catch
         {

         }

         return result > 0;
      }
   }
}
