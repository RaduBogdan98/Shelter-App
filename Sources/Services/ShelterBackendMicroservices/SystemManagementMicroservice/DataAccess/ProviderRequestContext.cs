using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SystemManagementMicroservice.Model;

namespace SystemManagementMicroservice.DataAccess
{
   public class ProviderRequestContext : DbContext
   {
      public ProviderRequestContext(DbContextOptions options) : base(options) { }

      public DbSet<ProviderRequest> ProviderRequests { get; set; }
   }
}
