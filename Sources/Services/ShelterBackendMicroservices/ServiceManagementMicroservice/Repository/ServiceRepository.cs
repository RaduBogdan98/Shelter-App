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

      public async Task<bool> CreateServiceAsync(Service serviceRequest)
      {
         int result = 0;
         try
         {
            this.context.Services.Add(serviceRequest);
            result = await this.context.SaveChangesAsync();
         }
         catch (Exception e)
         {

         }

         return result > 0;
      }

      public Task<IEnumerable<Service>> GetAllServicesAsync()
      {
         return Task.FromResult(context.Services.Where(x => x.Available == true).AsEnumerable());
      }

      public Task<IEnumerable<Service>> GetServicesByOwnerIdAsync(int ownerId)
      {
         return Task.FromResult(context.Services.Where(x => x.OwnerId == ownerId && x.Available == true).AsEnumerable());
      }

      public Task<IEnumerable<Service>> GetServicesByUserIdAsync(int userId)
      {
         List<int> usedServices = context.ServicesUsers.Where(x => x.UserId == userId).Select(x => x.ServiceId).ToList();

         return Task.FromResult(context.Services.Where(x => usedServices.Contains(x.Id)).AsEnumerable());
      }

      public async Task<bool> UpdateServiceAsync(Service serviceUpdateRequest)
      {
         int result = 0;

         try
         {
            context.Services.Update(serviceUpdateRequest);
            result = await context.SaveChangesAsync();
         }
         catch
         {

         }

         return result > 0;
      }

      public async Task<bool> DeleteService(int serviceId)
      {
         var result = 0;

         try
         {
            context.Remove(context.Services.FirstOrDefault(x => x.Id == serviceId));
            result = await context.SaveChangesAsync();
         }
         catch
         {

         }

         return result > 0;
      }
   }
}
