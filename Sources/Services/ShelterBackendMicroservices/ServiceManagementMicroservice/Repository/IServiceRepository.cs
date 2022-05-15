using ServiceManagementMicroservice.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServiceManagementMicroservice.Repository
{
   interface IServiceRepository
   {
      Task<bool> CreateService(int ownerId, string title, string description, byte[] thumbnail);

      Task<List<Service>> GetServicesForProvider(int providerId);

      Task<bool> SetAvailability(int serviceId, bool newAvailability);

      Task<bool> DeleteService(int serviceId);

      Task<List<Service>> GetUsedServicesForUser(int userId);
   }
}
