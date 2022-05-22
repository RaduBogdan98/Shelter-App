using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace ServiceManagementMicroservice.Model
{
   [Keyless]
   public class ServiceUser
   {
      [Required]
      public int UserId { get; set; }

      [Required]
      public int ServiceId { get; set; }
   }
}
