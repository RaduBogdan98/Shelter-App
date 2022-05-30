using Microsoft.EntityFrameworkCore;
using ServiceManagementMicroservice.Model;

namespace ServiceManagementMicroservice.DataAccess
{
   public class ServiceContext : DbContext
   {
      public ServiceContext(DbContextOptions options) : base(options) { }

      public DbSet<Service> Services { get; set; }

      public DbSet<ServiceUser> ServicesUsers { get; set; }
   }
}
