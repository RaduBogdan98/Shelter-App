using System.ComponentModel.DataAnnotations;

namespace ServiceManagementMicroservice.Model
{
   public class ServiceUser
   {
      public int Id { get; set; }

      [Required]
      public int UserId { get; set; }

      [Required]
      public int ServiceId { get; set; }
   }
}
