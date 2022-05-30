using System.ComponentModel.DataAnnotations;

namespace UserManagementMicroservice.Model
{
   public class User
   {
      public int Id { get; set; }

      [Required]
      [MaxLength(100)]
      public string Name { get; set; }

      [Required]
      [MaxLength(100)]
      public string Email { get; set; }

      [Required]
      [MaxLength(50)]
      public string Password { get; set; }

      [Required]
      [MaxLength(20)]
      public string PhoneNumber { get; set; }

      [MaxLength(100)]
      public string Company { get; set; }

      [MaxLength(200)]
      public string Address { get; set; }

      public UserType Type { get; set; }

      public string ProfilePicture { get; set; }
   }
}
