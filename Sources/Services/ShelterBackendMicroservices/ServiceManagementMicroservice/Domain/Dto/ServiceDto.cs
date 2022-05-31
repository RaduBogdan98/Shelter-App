using ServiceManagementMicroservice.Model;

namespace ServiceManagementMicroservice.Domain.Dto
{
   public class ServiceDto
   {
      public int Id { get; set; }
      public int OwnerId { get; set; }
      public ServiceType ServiceType { get; set; }
      public string ServiceTitle { get; set; }
      public string ServiceDescription { get; set; }
      public string ServiceThumbnail { get; set; }
      public bool Available { get; set; } = true;
   }
}
