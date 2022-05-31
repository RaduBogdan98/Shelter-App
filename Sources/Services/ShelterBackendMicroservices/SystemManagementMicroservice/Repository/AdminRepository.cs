using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SystemManagementMicroservice.DataAccess;
using SystemManagementMicroservice.Model;
using Microsoft.EntityFrameworkCore;

namespace SystemManagementMicroservice.Repository
{
   public class AdminRepository : IAdminRepository
   {
      private readonly ProviderRequestContext context;

      public AdminRepository(ProviderRequestContext context)
      {
         this.context = context;
      }

      public async Task<IEnumerable<ProviderRequest>> GetAllProviderRequestsAsync()
      {
         return await context.ProviderRequests.ToListAsync();
      }

      public async Task<ProviderRequest> GetProviderRequestByIdAsync(int providerRequestId)
      {
         return await context.ProviderRequests.FirstOrDefaultAsync(x => x.Id == providerRequestId);
      }

      public async Task<bool> DeleteProviderRequestAsync(int providerRequestId)
      {
         var result = 0;
         try
         {
            context.ProviderRequests.Remove(context.ProviderRequests.FirstOrDefault(x => x.Id == providerRequestId));
            result = await context.SaveChangesAsync();
         }
         catch
         {

         }

         return result > 0;
      }

      public async Task<bool> CreateProviderRequestAsync(ProviderRequest providerRequest)
      {
         var result = 0;
         try
         {
            context.ProviderRequests.Add(providerRequest);
            result = await context.SaveChangesAsync();
         }
         catch
         {

         }

         return result > 0;
      }
   }
}
