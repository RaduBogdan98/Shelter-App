using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace ServiceManagementMicroservice.Model
{
   [Keyless]
   public class ServiceUser
   {
      [Required]
      public int IdUser { get; set; }

      [Required]
      public int IdService { get; set; }
   }
}
