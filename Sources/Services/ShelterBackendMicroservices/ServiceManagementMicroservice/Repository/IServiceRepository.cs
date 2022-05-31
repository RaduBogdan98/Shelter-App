using ServiceManagementMicroservice.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ServiceManagementMicroservice.Repository
{
   public interface IServiceRepository
   {
      Task<bool> CreateServiceAsync(Service serviceRequest);
      Task<IEnumerable<Service>> GetAllServicesAsync();
      Task<IEnumerable<Service>> GetServicesByOwnerIdAsync(int ownerId);
      Task<IEnumerable<Service>> GetServicesByUserIdAsync(int ownerId);
      Task<bool> UseServiceAsync(int userId, int serviceId);
      Task<bool> UpdateServiceAsync(Service serviceUpdateRequest);
      Task<bool> DeleteService(int serviceId);

      
   }
}
