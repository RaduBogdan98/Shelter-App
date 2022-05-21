using System.ComponentModel.DataAnnotations;
using UserManagementMicroservice.Model;

namespace SystemManagementMicroservice.Model
{
   public class ProviderRequest
   {
      public int Id { get; set; }

      [Required]
      public int OwnerId { get; set; }

      [Required]
      [MaxLength(1000)]
      public string Reason { get; set; }

      public User Owner { get; set; }
   }
}
