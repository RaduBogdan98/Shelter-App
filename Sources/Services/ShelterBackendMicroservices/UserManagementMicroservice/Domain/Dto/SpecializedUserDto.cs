using UserManagementMicroservice.Model;

namespace UserManagementMicroservice.Domain.Dto
{
   public class SpecializedUserDto
   {
      public int Id { get; set; }
      public string Name { get; set; }
      public string Email { get; set; }
      public string Password { get; set; }
      public string PhoneNumber { get; set; }
      public string Company { get; set; }
      public string Address { get; set; }
      public double Latitude { get; set; }
      public double Longitude { get; set; }
      public UserType Type { get; set; }
      public string ProfilePicture { get; set; }
   }
}
