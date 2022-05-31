namespace SystemManagementMicroservice.Domain.Dto
{
   public class ProviderRequestDto
   {
      public int Id { get; set; }
      public int OwnerId { get; set; }
      public string Company { get; set; }
      public string Address { get; set; }
      public string Reason { get; set; }
   }
}
