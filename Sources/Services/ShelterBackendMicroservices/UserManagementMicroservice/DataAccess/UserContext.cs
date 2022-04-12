using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserManagementMicroservice.Model;

namespace UserManagementMicroservice.DataAccess
{
   public class UserContext : DbContext
   {
      public UserContext(DbContextOptions options) : base(options) { }

      public DbSet<User> Users { get; set; }
   }
}