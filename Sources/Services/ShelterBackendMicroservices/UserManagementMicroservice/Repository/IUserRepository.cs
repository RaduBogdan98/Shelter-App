using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserManagementMicroservice.Model;

namespace UserManagementMicroservice.Repository
{
   public interface IUserRepository
   {
       Task<bool> RegisterUserAsync(User user);
       Task<User> AuthenticateUserAsync(string email, string password);

       Task<User> UpdateUserRoleAsync(UserType userRole);
   }
}
