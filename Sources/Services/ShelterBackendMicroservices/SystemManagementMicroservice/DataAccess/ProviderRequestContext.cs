using Microsoft.EntityFrameworkCore;
using SystemManagementMicroservice.Model;

namespace SystemManagementMicroservice.DataAccess
{
   public class ProviderRequestContext : DbContext
   {
      public ProviderRequestContext(DbContextOptions options) : base(options) { }

      public DbSet<ProviderRequest> ProviderRequests { get; set; }
   }
}
