using System;

namespace ServiceManagementMicroservice.Model
{
   public class Service
   {
      public int Id { get; set; }
      public int IdOwner { get; set; }
      public ServiceType ServiceType { get; set; }
      public string ServiceTitle { get; set; }
      public string ServiceDescription { get; set; }
      public byte[] ServiceThumbnail { get; set; }
      public DateTime Date { get; set; }
      public bool Available { get; set; }
   }
}
