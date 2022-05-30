using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SystemManagementMicroservice.Model;

namespace SystemManagementMicroservice.Repository
{
   public interface IAdminRepository
   { 
       Task<IEnumerable<ProviderRequest>> GetAllProviderRequestsAsync();

      Task<ProviderRequest> GetProviderRequestByIdAsync(int providerRequestId);

      Task<bool> DeleteProviderRequestAsync(int providerRequestId);
   }
}
