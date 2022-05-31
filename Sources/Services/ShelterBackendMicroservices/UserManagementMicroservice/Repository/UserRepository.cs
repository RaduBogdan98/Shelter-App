using System.Threading.Tasks;
using UserManagementMicroservice.DataAccess;
using UserManagementMicroservice.Model;
using Microsoft.EntityFrameworkCore;
using ApplicationGateway.Helpers;

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
            GeoPoint userGeoLocation = await GeoDecoder.GetAdressLatLong(user.Address);
            user.Latitude = userGeoLocation.Latitude;
            user.Longitude = userGeoLocation.Longitude;

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

      public async Task<bool> UpdateUserAsync(User user)
      {
         int result = 0;
         try
         {
            GeoPoint userGeoLocation = await GeoDecoder.GetAdressLatLong(user.Address);
            user.Latitude = userGeoLocation.Latitude;
            user.Longitude = userGeoLocation.Longitude;

            context.Users.Update(user);
            result = await this.context.SaveChangesAsync();
         }
         catch
         {

         }

         return result > 0;
      }

      public async Task<User> GetUserByIdAsync(int userId)
      {
         return await context.Users.FirstOrDefaultAsync(x => x.Id == userId);
      }
   }
}
