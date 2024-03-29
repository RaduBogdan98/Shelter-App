﻿using System.Threading.Tasks;
using UserManagementMicroservice.Model;

namespace UserManagementMicroservice.Repository
{
   public interface IUserRepository
   {
      Task<bool> RegisterUserAsync(User user);

      Task<User> AuthenticateUserAsync(string email, string password);

      Task<bool> UpdateUserAsync(User user);

      Task<User> GetUserByIdAsync(int userId);
   }
}
