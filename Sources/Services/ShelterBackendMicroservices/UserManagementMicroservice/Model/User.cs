namespace UserManagementMicroservice.Model
{
   public class User
   {
      public int Id { get; set; }
      public string Name { get; set; }
      public string Email { get; set; }
      public string Password { get; set; }
      public string PhoneNumber { get; set; }
      public string Company { get; set; }
      public string Address { get; set; }
      public UserType Type { get; set; }
      public byte[] ProfilePicture { get; set; }
   }
}
