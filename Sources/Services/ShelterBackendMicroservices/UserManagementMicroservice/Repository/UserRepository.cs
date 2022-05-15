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

      public Task<bool> CreateUser(string name, string email, string password)
      {
         throw new NotImplementedException();
      }

      public Task<User> AuthenticateUser(string email, string password)
      {
         throw new NotImplementedException();
      }

      public Task<bool> UpdateUserDetails(User user)
      {
         throw new NotImplementedException();
      }
      public Task<bool> AddProviderAttributes(int userId, string address, string company)
      {
         throw new NotImplementedException();
      }
   }
}
