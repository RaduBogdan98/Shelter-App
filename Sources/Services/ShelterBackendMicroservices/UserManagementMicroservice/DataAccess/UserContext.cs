using Microsoft.EntityFrameworkCore;
using UserManagementMicroservice.Model;

namespace UserManagementMicroservice.DataAccess
{
   public class UserContext : DbContext
   {
      public UserContext(DbContextOptions options) : base(options) { }

      public DbSet<User> Users { get; set; }
   }
}