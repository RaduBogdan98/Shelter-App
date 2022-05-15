using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SystemManagementMicroservice.Model;

namespace SystemManagementMicroservice.Repository
{
   interface IAdminRepository
   {
      Task<bool> CreateProviderRequest(int userId, string company, string address, string reason);

      Task<List<ProviderRequest>> GetProviderRequests();

      Task<bool> SendRequestResolution(int requestId, bool resolutionValue);
   }
}
