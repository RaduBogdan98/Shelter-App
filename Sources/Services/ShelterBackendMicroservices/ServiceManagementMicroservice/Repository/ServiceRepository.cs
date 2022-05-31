using ServiceManagementMicroservice.DataAccess;
using ServiceManagementMicroservice.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

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
            serviceRequest.Date = DateTime.Now;
            this.context.Services.Add(serviceRequest);
            result = await this.context.SaveChangesAsync();
         }
         catch (Exception e)
         {

         }

         return result > 0;
      }

      public async Task<IEnumerable<Service>> GetAllServicesAsync()
      {
         return await context.Services.Where(x => x.Available == true).ToListAsync();
      }

      public async Task<IEnumerable<Service>> GetServicesByOwnerIdAsync(int ownerId)
      {
         return await context.Services.Where(x => x.OwnerId == ownerId && x.Available == true).ToListAsync();
      }

      public async Task<IEnumerable<Service>> GetServicesByUserIdAsync(int userId)
      {
         List<int> usedServices = context.ServicesUsers.Where(x => x.UserId == userId).Select(x => x.ServiceId).ToList();

         return await context.Services.Where(x => usedServices.Contains(x.Id)).ToListAsync();
      }

      public async Task<bool> UseServiceAsync(int userId, int serviceId)
      {
         ServiceUser serviceUser = new ServiceUser();
         serviceUser.UserId = userId;
         serviceUser.ServiceId = serviceId;

         int result = 0;
         try
         {
            this.context.ServicesUsers.Add(serviceUser);
            result = await this.context.SaveChangesAsync();
         }
         catch (Exception e)
         {

         }

         return result > 0;
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
