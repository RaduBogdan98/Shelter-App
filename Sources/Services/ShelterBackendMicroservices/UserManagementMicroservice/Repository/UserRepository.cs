using System.Linq;
using System.Threading.Tasks;
using UserManagementMicroservice.DataAccess;
using UserManagementMicroservice.Model;
using Microsoft.EntityFrameworkCore;

namespace UserManagementMicroservice.Repository
{
   public class UserRepository : IUserRepository
   {
      private readonly UserContext context;

      public UserRepository(UserContext context)
      {
         this.context = context;
      }

      public async Task<bool> RegisterUserAsync(User user)
      {
         int result = 0;
         try
         {
            this.context.Users.Add(user);
            result = await this.context.SaveChangesAsync();
         }
         catch
         {

         }

         return result > 0;
      }

      public async Task<User> AuthenticateUserAsync(string email, string password)
      {
         return await this.context.Users.FirstOrDefaultAsync(x => x.Email == email && x.Password == password);
      }

      public async Task<User> UpdateUserRoleAsync(int userId, UserType userRole)
      {
         User user = null;
         try
         {
            context.Users.FirstOrDefault(x => x.Id == userId);
            user.Type = userRole;

            context.Users.Update(user);
            await this.context.SaveChangesAsync();
         }
         catch
         {
            user = null;
         }

         return user;
      }
   }
}
