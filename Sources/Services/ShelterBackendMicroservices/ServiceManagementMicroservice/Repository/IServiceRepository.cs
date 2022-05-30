using ServiceManagementMicroservice.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServiceManagementMicroservice.Repository
{
   public interface IServiceRepository
   {
      Task<bool> CreateServiceAsync(Service serviceRequest);
      Task<IEnumerable<Service>> GetAllServicesAsync();
      Task<IEnumerable<Service>> GetServicesByOwnerIdAsync(int ownerId);
      Task<IEnumerable<Service>> GetServicesByUserIdAsync(int ownerId);
      Task<bool> UpdateServiceAsync(Service serviceUpdateRequest);
      Task<bool> DeleteService(int serviceId);

      
   }
}
