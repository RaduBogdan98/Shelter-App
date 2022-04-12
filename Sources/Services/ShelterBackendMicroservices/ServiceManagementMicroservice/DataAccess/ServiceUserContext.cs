using Microsoft.EntityFrameworkCore;
using ServiceManagementMicroservice.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServiceManagementMicroservice.DataAccess
{
   public class ServiceUserContext : DbContext
   {
      public ServiceUserContext(DbContextOptions options) : base(options) { }

      public DbSet<ServiceUser> ServicesUsers { get; set; }
   }
}
