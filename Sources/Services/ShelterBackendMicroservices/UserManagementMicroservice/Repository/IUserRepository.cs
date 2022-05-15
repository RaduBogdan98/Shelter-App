using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserManagementMicroservice.Model;

namespace UserManagementMicroservice.Repository
{
   interface IUserRepository
   {
      Task<bool> CreateUser(string name, string email, string password);

      Task<User> AuthenticateUser(string email, string password);

      Task<bool> AddProviderAttributes(int userId, string address, string company);

      Task<bool> UpdateUserDetails(User user);
   }
}
