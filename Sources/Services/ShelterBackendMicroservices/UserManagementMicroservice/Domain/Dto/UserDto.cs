using UserManagementMicroservice.Model;

namespace UserManagementMicroservice.Domain.Dto
{
   public class UserDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string PhoneNumber { get; set; }
        public string Company { get; set; }
        public string Address { get; set; }
        public UserType Type { get; set; }
        public string ProfilePicture { get; set; }
    }
}
