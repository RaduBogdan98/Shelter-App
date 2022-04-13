namespace SystemManagementMicroservice.Model
{
   public class ProviderRequest
   {
      public int Id { get; set; }
      public int IdUser { get; set; }
      public string Company { get; set; }
      public string Address { get; set; }
      public string Reason { get; set; }
   }
}
