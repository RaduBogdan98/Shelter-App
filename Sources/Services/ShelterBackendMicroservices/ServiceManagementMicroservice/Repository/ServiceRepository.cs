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

      public Task<bool> CreateService(int ownerId, string title, string description, byte[] thumbnail)
      {
         throw new NotImplementedException();
      }

      public Task<bool> DeleteService(int serviceId)
      {
         throw new NotImplementedException();
      }

      public Task<List<Service>> GetServicesForProvider(int providerId)
      {
         throw new NotImplementedException();
      }

      public Task<List<Service>> GetUsedServicesForUser(int userId)
      {
         throw new NotImplementedException();
      }

      public Task<bool> SetAvailability(int serviceId, bool newAvailability)
      {
         throw new NotImplementedException();
      }
   }
}
