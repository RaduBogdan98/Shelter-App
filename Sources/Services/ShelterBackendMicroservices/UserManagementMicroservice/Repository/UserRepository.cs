using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserManagementMicroservice.DataAccess;
using UserManagementMicroservice.Model;

namespace UserManagementMicroservice.Repository
{
   public class UserRepository : IUserRepository
   {
      private readonly UserContext context;

      public UserRepository(UserContext context)
      {
         this.context = context;
      }

      public Task<bool> RegisterUserAsync(User user)
      {
          throw new NotImplementedException();
      }

      public Task<User> AuthenticateUserAsync(string email, string password)
      {
          throw new NotImplementedException();
      }

      public Task<User> UpdateUserRoleAsync(UserType userRole)
      {
          throw new NotImplementedException();
      }
   }
}
