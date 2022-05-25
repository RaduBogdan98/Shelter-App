using System;
using System.ComponentModel.DataAnnotations;

namespace ServiceManagementMicroservice.Model
{
   public class Service
   {
      public int Id { get; set; }

      [Required]
      public int OwnerId { get; set; }

      [Required]
      public ServiceType ServiceType { get; set; }

      [Required]
      [MaxLength(100)]
      public string ServiceTitle { get; set; }

      [Required]
      [MaxLength(2000)]
      public string ServiceDescription { get; set; }

      public string ServiceThumbnail { get; set; }

      [Required]
      public DateTime Date { get; set; }

      [Required]
      public bool Available { get; set; }
   }
}
