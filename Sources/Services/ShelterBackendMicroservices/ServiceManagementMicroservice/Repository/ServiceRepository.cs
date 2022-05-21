using ServiceManagementMicroservice.DataAccess;
using ServiceManagementMicroservice.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServiceManagementMicroservice.Repository
{
   public class ServiceRepository : IServiceRepository
   {
      private readonly ServiceContext context;

      public ServiceRepository(ServiceContext context)
      {
         this.context = context;
      }

      public Task<bool> CreateServiceAsync(Service serviceRequest)
      {
         throw new NotImplementedException();
      }

      public Task<IEnumerable<Service>> GetAllServicesAsync()
      {
          throw new NotImplementedException();
      }

      public Task<IEnumerable<Service>> GetServicesByOwnerIdAsync(int ownerId)
      {
          throw new NotImplementedException();
      }

      public Task<IEnumerable<Service>> GetServicesByUserIdAsync(int ownerId)
      {
          throw new NotImplementedException();
      }

      public Task<bool> UpdateServiceAsync(Service serviceUpdateRequest)
      {
          throw new NotImplementedException();
      }

      public Task<bool> DeleteService(int serviceId)
      {
         throw new NotImplementedException();
      }
   }
}
