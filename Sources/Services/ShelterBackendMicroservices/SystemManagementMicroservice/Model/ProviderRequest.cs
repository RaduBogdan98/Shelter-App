using System.ComponentModel.DataAnnotations;

namespace SystemManagementMicroservice.Model
{
   public class ProviderRequest
   {
      public int Id { get; set; }

      [Required]
      public int OwnerId { get; set; }

      [Required]
      [MaxLength(100)]
      public string Company { get; set; }

      [Required]
      [MaxLength(200)]
      public string Address { get; set; }

      [Required]
      [MaxLength(1000)]
      public string Reason { get; set; }
   }
}
