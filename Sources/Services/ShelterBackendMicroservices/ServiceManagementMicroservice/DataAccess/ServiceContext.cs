using Microsoft.EntityFrameworkCore;
using ServiceManagementMicroservice.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServiceManagementMicroservice.DataAccess
{
   public class ServiceContext : DbContext
   {
      public ServiceContext(DbContextOptions options) : base(options) { }

      public DbSet<Service> Services { get; set; }
   }
}
